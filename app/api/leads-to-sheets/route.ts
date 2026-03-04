import { NextRequest, NextResponse } from "next/server";

// URL del Google Apps Script Webhook (Deploy ID: AKfycbxconeugTZ6I_vJhhFm0acsU8_OtKj1GSMEO6nXf8oPWErdA2XbEJMzin6pCuK6Wj6Q)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxconeugTZ6I_vJhhFm0acsU8_OtKj1GSMEO6nXf8oPWErdA2XbEJMzin6pCuK6Wj6Q/exec";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Supabase webhook payload structure
        const record = body?.record;
        if (!record) {
            return NextResponse.json({ error: "No record found" }, { status: 400 });
        }

        // Formato de fecha legible
        const fecha = new Date(record.created_at).toLocaleString("es-AR", {
            day: "2-digit", month: "2-digit", year: "numeric",
            hour: "2-digit", minute: "2-digit"
        });

        // Enviar a Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8", // text/plain evita el preflight CORS
            },
            body: JSON.stringify({
                fecha,
                nombre: record.nombre ?? "",
                email: record.email ?? "",
                telefono: record.telefono ?? "",
                empresa: record.empresa ?? "",
                motivo: record.motivo ?? "",
                mensaje: record.mensaje ?? "",
            }),
        });

        const result = await response.json();

        if (result.error) {
            console.error("[leads-to-sheets] Apps Script Error:", result.error);
            return NextResponse.json({ error: result.error }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("[leads-to-sheets] Error:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
