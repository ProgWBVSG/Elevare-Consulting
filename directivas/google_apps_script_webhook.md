# Enviar leads a Google Sheets vía Apps Script

## Google Apps Script (Webhook)
Este es el método más simple cuando las Políticas de Organización bloquean la creación de Service Accounts en Google Cloud.

### Pasos en el Google Sheet
1. Abrir el Google Sheet (1HsPQ7-8glmO0CQnEaVTwZEVH442mR7mP94tDeaNgdXA).
2. Ir a **Extensiones > Apps Script**.
3. Pegar este código allí:

```javascript
// Google Apps Script para recibir Leads

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
    if (!sheet) {
      throw new Error("No se encontró la pestaña 'Leads'. Por favor, creala.");
    }

    const data = JSON.parse(e.postData.contents);
    
    // Configura las columnas: Fecha, Nombre, Email, Teléfono, Empresa, Motivo, Mensaje
    const row = [
      data.fecha || new Date().toLocaleString("es-AR"),
      data.nombre || "",
      data.email || "",
      data.telefono || "",
      data.empresa || "",
      data.motivo || "",
      data.mensaje || ""
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Clic en **Guardar** (el icono de disquete).
5. Ir a **Implementar (Deploy) > Nueva implementación**.
6. Seleccionar tipo: **Aplicación web**.
7. En "Acceso" (Who has access), seleccionar **Cualquier persona** (Anyone).
8. Clic en **Implementar**.
9. Dar permisos a la cuenta de Google (aviso de "App no verificada" -> Avanzado -> Ir a Proyecto).
10. **Copiar la "URL de la aplicación web"** que aparece al final. Ese es nuestro webhook.

### Módulo Next.js
El código de nuestra API `/api/leads-to-sheets` se simplificará enormemente, haciendo solo un `fetch` POST estándar a la URL copiada en el paso 10.
Eliminando así la necesidad del paquete `googleapis` completo.
