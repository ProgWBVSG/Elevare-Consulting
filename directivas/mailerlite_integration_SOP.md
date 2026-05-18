# Directiva: Integración de MailerLite en Formulario de Contacto Next.js

## 1. Objetivo
Conectar el formulario de contacto existente en `app/contacto/page.tsx` con la API de MailerLite para que los usuarios que lo completen sean añadidos automáticamente como suscriptores en MailerLite, sin interrumpir el flujo actual hacia Supabase o Google Sheets.

## 2. Entradas
- API Key de MailerLite (debe ser obtenida en el panel de MailerLite).
- Group ID de MailerLite (opcional, para asignar el lead a un grupo específico).
- Archivo de configuración local (`.env.local`).
- Componente de formulario de contacto (`app/contacto/page.tsx`).

## 3. Salidas
- Guía paso a paso documentada para el usuario.
- Un nuevo endpoint en Next.js (`app/api/mailerlite/route.ts`) que reciba la petición desde el cliente y se comunique con la API oficial de MailerLite de forma segura.
- Formulario de contacto actualizado (`app/contacto/page.tsx`) que realice un `fetch` a este nuevo endpoint.

## 4. Lógica y Pasos a Seguir
1. **Configuración en MailerLite**: Obtener la clave API (y un Group ID si es necesario) desde el panel de Integraciones/API de MailerLite.
2. **Variables de Entorno**: Agregar `MAILERLITE_API_KEY` (y `MAILERLITE_GROUP_ID`) en el archivo `.env.local` y en el panel de Vercel/hosting.
3. **Desarrollo del Endpoint**: Crear una función POST en `app/api/mailerlite/route.ts` que haga un POST a `https://connect.mailerlite.com/api/subscribers` usando la API key.
4. **Modificación del Frontend**: En la función `handleSubmit` de `app/contacto/page.tsx`, agregar una llamada asíncrona a `/api/mailerlite` después de verificar que no haya errores, enviando al menos `email` y `nombre`.

## 5. Restricciones / Casos Borde / Trampas Conocidas
- **Seguridad (CORS / Exposición de Keys)**: Nunca exponer la API key de MailerLite en el cliente. La llamada a MailerLite DEBE hacerse desde el servidor (`/api/...`).
- **Manejo de Errores Silencioso**: Si MailerLite falla por alguna razón (ej. límite de API o timeout), esto NO DEBE impedir que el usuario vea el mensaje de "Formulario enviado". La inserción en MailerLite se maneja con un bloque `try/catch` que registra el error pero no bloquea el éxito general.
- **Versión de API**: Asegurarse de usar la API v2 o la nueva API (MailerLite Classic vs. New MailerLite). El endpoint `connect.mailerlite.com` pertenece al nuevo MailerLite.
