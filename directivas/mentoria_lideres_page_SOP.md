# Directiva: Página Mentorías 1 a 1 para Líderes

## Objetivo
Crear la página `/mentoria-lideres` que actualmente no existe (404). Es la segunda vertical de servicios de Elevare Consulting.

## Contexto
- La primera vertical es **Management & Desarrollo Organizacional para PYMEs** → `/empresas`
- La tercera es **Mentoría para Mujeres Ejecutivas** → `/mentoria-mujeres-ejecutivas`
- La ruta `/mentoria-lideres` está referenciada desde:
  - `Header.tsx` → dropdown "Servicios"
  - `page.tsx` (homepage) → pain points de líderes + servicios cards
  - `Footer.tsx` (indirectamente)

## Audiencia
Líderes individuales (CEOs, gerentes, directivos, mandos medios) que necesitan acompañamiento estratégico personalizado para elevar su gestión. No es exclusivo de mujeres — es para cualquier líder.

## Estructura (basada en patrón `empresas` y `mentoria-mujeres-ejecutivas`)
1. **Schema LD+JSON** (SEO) — Service + BreadcrumbList + FAQPage
2. **Hero** — `data-color="accent"` (naranja) para diferenciarse de primary (azul/empresas) y secondary (verde/mujeres)
3. **Pain Points** — Problemas reales del líder individual (ya definidos en homepage `lideresPainPoints`)
4. **Proceso** — 4 pasos del acompañamiento 1 a 1
5. **Beneficios** — 4 transformaciones concretas
6. **FAQ** — 5 preguntas frecuentes
7. **CTA final** — Agendar sesión exploratoria

## Restricciones/Casos Borde
- Usar `../service.module.css` (CSS compartido entre servicios)
- El color del hero debe usar `data-color="accent"` para diferenciarse visualmente
- Los `stepNumber` del proceso deben usar gradient accent
- Incluir `ScrollReveal` para animaciones consistentes
- Canonical URL: `https://elevareconsultingmg.com/mentoria-lideres`
- Agregar entrada en `sitemap.ts`
- No olvidar SEO metadata completo
