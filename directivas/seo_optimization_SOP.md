# DIRECTIVA: SEO_OPTIMIZATION_SOP

> **ID:** 2026-04-17
> **Estado:** ACTIVO

## 1. Objetivos y Alcance
- **Objetivo Principal:** Optimizar el SEO completo del sitio Elevare Consulting para posicionar en "coaching ontológico Argentina", "mentoría mujeres ejecutivas LATAM", "desarrollo organizacional PYMEs".
- **Criterio de Éxito:** Sitemap.xml, robots.txt, JSON-LD en todas las páginas, metadata optimizada, FAQPage schema, canonical URLs.

## 2. Problemas Detectados
1. **NO existe sitemap.xml** — Google no puede descubrir las páginas
2. **NO existe robots.txt** — Sin directivas de crawling
3. **Contacto page es "use client"** — No puede exportar metadata (SEO invisible)
4. **Falta JSON-LD** en páginas internas (solo hay en layout global)
5. **Falta BreadcrumbList schema** en todas las subpáginas
6. **Falta FAQPage schema** en /empresas, /mentoria, /faq
7. **Falta og:image** en todas las páginas
8. **Keywords meta** no están en subpáginas
9. **Falta Service schema** en /empresas y /mentoria
10. **Falta Person schema** en /sobre-maria

## 3. Competencia Analizada
- **cocrear.com.ar** — Escuela de coaching, bien posicionada con contenido educativo
- **lideracoach.com** — Formación de coaches con buenas descripciones OG
- **bpsolutions.com.ar** — Consultoría PYMEs con buen SEO local
- **aacop.org.ar** — Asociación Argentina de Coaching Ontológico (autoridad)

## 4. Keywords Objetivo
- Primarias: "coaching ontológico", "desarrollo organizacional", "mentoría ejecutiva mujeres"
- Secundarias: "coaching empresarial Argentina", "consultoría liderazgo PYMEs", "coaching ejecutivo LATAM"
- Long-tail: "coaching ontológico para empresas Argentina", "mentoría para mujeres líderes", "síndrome del impostor mujeres ejecutivas"

## 5. Restricciones
- Contacto page usa "use client" → **SOLUCIONADO**: crear `layout.tsx` en la carpeta para metadata
- No hardcodear URLs de imágenes OG que no existan

## 6. Historial de Ejecución

### ✅ Ejecución 2026-04-17 (EXITOSA)
- **Build:** 0 errores TypeScript, 13/13 páginas generadas
- **Nuevos archivos:** `sitemap.ts`, `robots.ts`, `contacto/layout.tsx`
- **Páginas optimizadas:** 7/7
- **Schemas implementados:** ProfessionalService, WebSite, Service (x2), Person, FAQPage (x3), AggregateRating + Review, ContactPage, BreadcrumbList (x6)

### Aprendizajes
1. **"use client" y metadata:** En Next.js, si una `page.tsx` tiene `"use client"`, no puede exportar `metadata`. La solución es crear un `layout.tsx` separado en la misma carpeta que sí puede exportar metadata estática.
2. **Canonical URLs:** Siempre usar `alternates.canonical` en cada página para evitar contenido duplicado.
3. **FAQPage schema dinámico:** En la FAQ general, se puede usar `faqs.flatMap()` para generar el schema dinámicamente desde los datos existentes, evitando duplicación manual.
4. **GoogleBot directives:** Agregar `max-image-preview: large` y `max-snippet: -1` permite que Google muestre previsualizaciones ricas.
