# Directiva: Sincronización Supabase -> Google Sheets

## Objetivo
Cada vez que un lead ingresa por el formulario de la web y se guarda en la tabla `leads` de Supabase, un webhook dispara automáticamente un evento que lo inserta como una nueva fila en Google Sheets.

## Arquitectura
1.  **Origen:** Supabase (Tabla `leads`).
2.  **Trigger:** Database Webhook en Supabase (Dispara on `INSERT` en `leads`).
3.  **Procesador:** API Route en Next.js (`/api/leads-to-sheets`).
4.  **Destino:** Google Sheets (Vía Google Sheets API v4).

## Configuración Requerida

### 1. Variables de Entorno (`.env.local`)
Se necesitan las siguientes variables en el entorno de servidor (Next.js / Vercel):
*   `GOOGLE_SERVICE_ACCOUNT_EMAIL`: El email de la cuenta de servicio de Google Cloud.
*   `GOOGLE_PRIVATE_KEY`: La clave privada JSON de la cuenta de servicio.

### 2. Google Cloud Platform (GCP)
1.  Crear un proyecto en GCP.
2.  Habilitar la **Google Sheets API**.
3.  Crear una **Cuenta de Servicio** (Service Account).
4.  Generar una **Clave JSON** para esa cuenta.

### 3. Google Sheets (El Documento)
*   ID del documento: `1HsPQ7-8glmO0CQnEaVTwZEVH442mR7mP94tDeaNgdXA`
*   **⚠️ CRÍTICO:** Se debe COMPARTIR el documento de Google Sheets con el email de la cuenta de servicio (ej: `tu-servicio@tu-proyecto.iam.gserviceaccount.com`) dándole permisos de **Editor**. Si no se hace esto, la API dará error `403 Permission Denied`.
*   El nombre de la hoja (pestaña) inferior debe ser exactamente **Leads** (o modificar la constante `SHEET_NAME` en `route.ts`).
*   Las columnas deben estar en este orden: `Fecha | Nombre | Email | Teléfono | Empresa | Motivo | Mensaje`.

### 4. Webhook en Supabase
En el dashboard de Supabase (Database -> Webhooks):
1.  Crear nuevo Webhook.
2.  **Table:** `leads`
3.  **Events:** `INSERT`
4.  **Method:** `POST`
5.  **URL:** La URL de producción de la API (Ej: `https://elevareconsultingmg.com/api/leads-to-sheets`)

## Notas y Restricciones Conocidas
*   **Problema con saltos de línea en Vercel:** Al copiar la `GOOGLE_PRIVATE_KEY` en Vercel, a veces los saltos de línea se rompen. El código en `route.ts` usa `.replace(/\\n/g, "\n")` para corregirlo automáticamente.
*   **Formato de Fecha:** La fecha se formatea a la zona horaria de Argentina (es-AR) antes de insertarse en Sheets.
