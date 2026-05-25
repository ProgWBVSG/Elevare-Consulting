# SOP: Implementación de Panel de Control (CMS + CRM) en Elevare Consulting

## 1. Análisis y Garantía SEO
El desarrollo de un panel de control interno NO afectará negativamente al SEO ni a la velocidad de la web pública, siempre y cuando se utilicen las herramientas nativas de Next.js:
- **Indexación y SEO intactos**: Los datos que se obtengan desde Supabase para los textos y testimonios se renderizarán en el servidor (SSR) o se generarán estáticamente (SSG). Google seguirá leyendo HTML puro y optimizado.
- **Incremental Static Regeneration (ISR)**: Cuando se guarde un cambio en el panel de control, se llamará a una ruta de Next.js (`/api/revalidate`) que actualizará la caché en Vercel. Así la web cargará de forma instantánea sin tener que consultar la base de datos con cada visita.
- **Privacidad del Panel**: La ruta `/admin` estará completamente bloqueada para los robots de búsqueda mediante la etiqueta `noindex` y el archivo `robots.txt`.

## 2. Objetivo
Dotar a la propietaria de total autonomía mediante un panel de gestión privado (protegido por contraseña) construido sobre Supabase, que permita:
1. Ver y gestionar los contactos (Leads/CRM).
2. Editar los textos de las diferentes secciones de la web.
3. Añadir, modificar, ocultar o eliminar testimonios.

## 3. Arquitectura y Tecnologías
- **Frontend Panel**: Rutas anidadas en Next.js bajo `/admin/*` (ej. `/admin/leads`, `/admin/content`, `/admin/testimonials`).
- **Diseño (UI/UX)**: Minimalista, corporativo (Sidebar de navegación oscuro, tablas limpias, notificaciones toast al guardar cambios), usando posiblemente `lucide-react` para iconos y CSS modular/Tailwind puro.
- **Backend / Base de Datos**: Supabase PostgreSQL.
- **Autenticación**: Supabase Auth (Email y Contraseña) gestionado mediante `middleware.ts` en Next.js para bloquear cualquier acceso no autorizado a `/admin`.
- **Emails y Notificaciones**: Resend (envío de correos transaccionales y campañas desde el CRM).
- **Analíticas Web**: Herramienta a definir (Google Analytics 4, PostHog, o Vercel Analytics) integrada en el layout.

## 4. Estructura de Base de Datos (Supabase)
Se requerirán las siguientes tablas:
- `leads`: id, nombre, email, telefono, mensaje, status (nuevo, contactado, cliente), created_at.
- `site_content`: id, section_key (ej. `hero_title`), text_value, updated_at.
- `testimonials`: id, author_name, position, content, is_active, display_order.

## 5. Fases de Implementación (Paso a Paso)

### Fase 1: Setup Backend y Seguridad
- Crear las tablas en Supabase con Row Level Security (RLS) habilitado.
- Permitir lectura pública (anon) a `site_content` y `testimonials`.
- Restringir la escritura, actualización y borrado *exclusivamente* al rol autenticado (authenticated).
- Crear el usuario administrador de María en Supabase Auth.

### Fase 2: Autenticación y Middleware
- Construir la página de login (`/admin/login`) con un diseño muy limpio (caja de usuario y contraseña).
- Implementar `middleware.ts` en la raíz del proyecto para proteger cualquier subruta bajo `/admin`, redirigiendo al login si no hay sesión activa.

### Fase 3: Módulo CRM (Leads)
- Conectar el formulario público de contacto actual (que quizá ya va a email o sheets) para que también haga un `INSERT` en la tabla `leads` de Supabase.
- Construir el dashboard `/admin/leads` con una tabla de contactos y funcionalidad para cambiar el estado de seguimiento del cliente.

### Fase 4: Gestor de Contenidos (Textos y Testimonios)
- Construir `/admin/testimonials`: Interfaz para listar testimonios, botón de añadir nuevo y un switch (toggle) para ocultar/mostrar.
- Construir `/admin/content`: Formulario unificado con todos los textos dinámicos de la web para editarlos fácilmente.

### Fase 5: Conexión Frontend Público + Caché (ISR)
- Reemplazar los textos hardcodeados en `app/page.tsx` (y otras rutas) por la función de llamada a Supabase (`fetchContent`).
- Configurar el Webhook interno de Next.js (`revalidatePath` o `revalidateTag`) disparado desde el panel al guardar, para que los cambios se reflejen inmediatamente en producción sin penalizar la velocidad.

## 6. Trampas Conocidas (Edge Cases)
- **Cookies de Autenticación en App Router**: Asegurarse de usar `@supabase/ssr` en lugar de `@supabase/auth-helpers-nextjs` que está deprecado, para manejar las cookies correctamente en Server Components y Server Actions.
- **Fuga de datos por RLS mal configurado**: Es vital no exponer los endpoints de `leads` al rol público.
