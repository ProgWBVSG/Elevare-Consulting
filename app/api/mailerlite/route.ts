import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, nombre } = body;

        if (!email) {
            return NextResponse.json({ error: "Email es requerido" }, { status: 400 });
        }

        const API_KEY = process.env.MAILERLITE_API_KEY;
        const GROUP_ID = process.env.MAILERLITE_GROUP_ID; // Optional

        if (!API_KEY) {
            console.error("Falta MAILERLITE_API_KEY en las variables de entorno");
            return NextResponse.json({ error: "Configuración del servidor incompleta" }, { status: 500 });
        }

        const data: any = {
            email: email,
            fields: {
                name: nombre || "",
            }
        };

        if (GROUP_ID) {
            data.groups = [GROUP_ID];
        }

        // Petición a la nueva API de MailerLite
        const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.error("Error de MailerLite:", responseData);
            return NextResponse.json({ error: "Error al suscribir en MailerLite", details: responseData }, { status: response.status });
        }

        return NextResponse.json({ success: true, data: responseData });

    } catch (error) {
        console.error("Error interno del servidor en /api/mailerlite:", error);
        return NextResponse.json({ error: "Error procesando la solicitud" }, { status: 500 });
    }
}
