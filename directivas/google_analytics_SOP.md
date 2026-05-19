# SOP: Integración de Google Analytics

## 1. Objetivo
Añadir soporte de Google Analytics (GA4) a la página web de Elevare Consulting, asegurando que las métricas de tráfico y comportamiento del usuario se registren correctamente sin penalizar el rendimiento de carga inicial de Next.js.

## 2. Entradas
- Proyecto Next.js (App Router).
- Archivo `.env.local` para almacenar la variable de entorno `NEXT_PUBLIC_GA_ID`.
- ID de medición de Google Analytics proporcionado por el usuario (o uso de un placeholder temporal como `G-XXXXXXXXXX` hasta obtener el real).

## 3. Salidas
- Paquete `@next/third-parties` instalado en el proyecto.
- Variable `NEXT_PUBLIC_GA_ID` inyectada en `.env.local`.
- Archivo `app/layout.tsx` actualizado para incluir el componente estandarizado `<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />` y la nueva etiqueta de `google-site-verification`.

## 4. Lógica y Pasos a Seguir
1. **Instalación de Dependencias**: El script debe ejecutar `npm install @next/third-parties@latest` para integrar el componente oficial de Next.js diseñado para evitar bloqueos de renderizado.
2. **Modificación de Variables de Entorno**: El script debe comprobar si `NEXT_PUBLIC_GA_ID` existe en `.env.local`. Si no existe, se añade al final del archivo.
3. **Inyección en Layout**:
   - Abrir `app/layout.tsx`.
   - Insertar la importación: `import { GoogleAnalytics } from '@next/third-parties/google';`.
   - Inyectar el componente `<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />` dentro del `<body>` o fuera del contenedor principal.
   
## 5. Trampas Conocidas y Restricciones (Edge Cases)
- **Error de tipado en TypeScript**: Asegurarse de realizar el cast `as string` al leer la variable de entorno.
- **Verificación de Propiedad (Google Search Console)**: A veces el crawler de Google falla al detectar la etiqueta si se usa la API nativa de `metadata` de Next.js (`verification: { google: ... }`). **Solución obligatoria**: Inyectar explícitamente `<meta name="google-site-verification" content="..." />` dentro del elemento `<head>` de `app/layout.tsx` para garantizar que aparezca de forma estática pura.
