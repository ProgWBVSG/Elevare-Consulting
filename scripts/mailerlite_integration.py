import os
import json

def patch_file(file_path, target, replacement):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if target in content:
        content = content.replace(target, replacement)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Patched {file_path} successfully.")
    else:
        print(f"Target string not found in {file_path}. No changes made.")

def create_file(file_path, content):
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Created {file_path} successfully.")

def main():
    project_root = r"c:\Users\benja\Elevare Consulting"
    
    # 1. Create API route for MailerLite
    api_route_path = os.path.join(project_root, "app", "api", "mailerlite", "route.ts")
    api_route_content = """import { NextResponse } from "next/server";

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
"""
    create_file(api_route_path, api_route_content)

    # 2. Patch the contact form to call the MailerLite API
    page_tsx_path = os.path.join(project_root, "app", "contacto", "page.tsx")
    target_string = """            // Send directly to API Route (Sheets Integration)
            fetch("/api/leads-to-sheets", {"""
            
    replacement_string = """            // Send directly to API Route (Sheets Integration)
            fetch("/api/leads-to-sheets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    record: {
                        nombre: form.nombre,
                        email: form.email,
                        telefono: form.telefono || "",
                        empresa: form.empresa || "",
                        motivo: form.motivo || "",
                        mensaje: form.mensaje || "",
                        created_at: new Date().toISOString()
                    }
                })
            }).catch(e => console.error("Error envío a Sheets:", e));

            // Send to MailerLite API Route
            fetch("/api/mailerlite", {"""
            
    # However, since the existing code is:
    #             fetch("/api/leads-to-sheets", {
    #                 method: "POST",
    # ...
    #             }).catch(e => console.error("Error envío a Sheets:", e));
    # 
    #             setSubmitted(true);
    
    target_string_2 = """            }).catch(e => console.error("Error envío a Sheets:", e));

            setSubmitted(true);"""
            
    replacement_string_2 = """            }).catch(e => console.error("Error envío a Sheets:", e));

            // Send to MailerLite API Route
            fetch("/api/mailerlite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: form.email,
                    nombre: form.nombre
                })
            }).catch(e => console.error("Error envío a MailerLite:", e));

            setSubmitted(true);"""
            
    patch_file(page_tsx_path, target_string_2, replacement_string_2)
    print("Script execution completed.")

if __name__ == "__main__":
    main()
