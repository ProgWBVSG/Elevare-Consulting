# DIRECTIVA: ELEVARE_WEB_SOP

> **ID:** 2026-02-26-ELEVARE-WEB
> **Script Asociado:** `scripts/elevare_web_builder.py` *(futuro)*
> **Última Actualización:** 2026-02-26
> **Estado:** ACTIVO

---

## 1. Objetivos y Alcance

*Construir el sitio web profesional de Elevare Consulting MG que genere leads calificados de forma orgánica, sin depender de redes sociales.*

- **Objetivo Principal:** Diseñar, desarrollar y lanzar el sitio web completo de Elevare Consulting MG — optimizado para SEO local LATAM, conversión de leads (formularios, Calendly), y Core Web Vitals >90/100.
- **Criterio de Éxito:** El sitio está live, indexado en Google, con GSC conectado, GA4 funcionando, todos los formularios operativos, y al menos 3 posts de blog + 1 lead magnet publicados al lanzamiento. Objetivo: 20-50 consultas/mes orgánicas a los 12 meses.

---

## 2. Especificaciones de Entrada/Salida (I/O)

### Entradas (Inputs)

- **Información del Negocio (COMPLETAR ANTES DE DESARROLLAR):**
  - `UBICACION_EXACTA`: Ciudad/Provincia real de María (Argentina) — *A completar*
  - `CERTIFICACIONES`: Certif. específicas de coaching ontológico — *A completar*
  - `TESTIMONIOS_REALES`: Mínimo 5 (nombre, cargo, empresa, resultado medible) — *A completar*
  - `CASOS_DE_EXITO`: Mínimo 2 (1 corporativo, 1 mujer ejecutiva) con resultados cuantificables — *A completar*
  - `FOTOS_PROFESIONALES`: Set de fotos de María (sesiones, eventos, retrato) — *A completar*
  - `LOGO_Y_PALETA`: Logo existente o preferencias de color — *A completar*
  - `PRECIOS_O_RANGOS`: Rangos de inversión por servicio — *A completar*
  - `NUMEROS_CLAVE`: Clientes atendidos, empresas asesoradas, horas de coaching — *A completar*

- **Variables de Entorno (.env):**
  - `CALENDLY_URL`: URL del perfil Calendly de María para integración
  - `GOOGLE_ANALYTICS_ID`: ID del GA4 (formato G-XXXXXXX)
  - `GOOGLE_SEARCH_CONSOLE`: Verificar vía archivo HTML o meta tag
  - `RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY`: Para formularios anti-spam
  - `SMTP_EMAIL` / `SMTP_PASS`: Para autoresponder de formularios
  - `CRM_ENDPOINT`: HubSpot, ActiveCampaign u otro (a definir con María)

- **Archivos Fuente:**
  - `assets/fotos/`: Fotos de María y su trabajo (WebP, <100KB)
  - `assets/logo/`: Logo en SVG y PNG
  - `assets/lead-magnets/`: PDFs descargables
  - `content/testimonios.json`: Datos de testimonios estructurados
  - `content/casos.json`: Casos de éxito estructurados

### Salidas (Outputs)

- **Artefactos Generados:**
  - Sitio web completo — desplegado en dominio de producción (WordPress/Webflow/Next.js)
  - `sitemap.xml` — generado automáticamente
  - `robots.txt` — configurado manualmente
  - `.tmp/seo_audit_pre_launch.pdf` — reporte de Lighthouse pre-lanzamiento
  - `.tmp/keyword_mapping.csv` — keywords asignadas por página
- **Retorno de Consola (si se usa script de build):** `✅ Build completo. Core Web Vitals: LCP X.Xs | INP Xms | CLS X.XX`

---

## 3. Flujo Lógico (Algoritmo)

*Proceso de desarrollo en fases secuenciales:*

1. **Auditoría Previa:** Completar información faltante (ubicación, logotipo, testimonios, certificaciones, precios). No lanzar sin estos elementos.
2. **Investigación de Keywords:** Usar Google Keyword Planner. Mapear keywords transaccionales (70%) e informacionales (30%) por página. Generar `keyword_mapping.csv`.
3. **Arquitectura de Información:** Definir sitemap completo (ver Sección 5 — Estructura de URLs). Crear wireframes textuales de cada página.
4. **Diseño Visual:** Aplicar paleta de colores, tipografías y sistema de diseño. Mobile-first. Crear componentes reutilizables.
5. **Desarrollo:** Construir páginas según wireframes. Implementar Schema Markup JSON-LD. Integrar Calendly, formularios (con reCAPTCHA), GA4, GSC, Hotjar/Clarity.
6. **Contenido:** Redactar textos con tono sugestivo + cálido, tuteo ("vos"), keywords al 1-2% de densidad natural. CTA cada ~300 palabras.
7. **Optimización de Performance:** Comprimir imágenes a WebP <100KB. CDN (Cloudflare). Lazy loading. Minificación CSS/JS. Objetivo: Lighthouse >90/100.
8. **SEO Técnico:** Generar sitemap.xml, configurar robots.txt, canonical tags, Open Graph, Twitter Cards. Implementar Schema en todas las páginas.
9. **Testing:** Probar formularios, CTAs, links, velocidad, responsive en Chrome/Firefox/Safari/Edge, iOS/Android.
10. **Lanzamiento:** Publicar, enviar sitemap a GSC, activar Google Business Profile, ejecutar plan de link building Mes 1.
11. **Post-Lanzamiento:** Monitorear GSC diariamente (primeros 7 días). Publicar blog según calendario. Reportes mensuales.

---

## 4. Herramientas y Librerías

- **Plataforma Recomendada (en orden de preferencia):**
  - **Opción A — WordPress + Elementor Pro:** Gestión autónoma por María. Theme: Astra Pro o GeneratePress. Hosting: SiteGround LATAM o Kinsta.
  - **Opción B — Webflow:** Diseño superior, \CoreWeb Vitals excelentes, menor flexibilidad para María.
  - **Opción C — Next.js 14 + Sanity.io:** Máxima performance y escalabilidad. Requiere desarrollador para cambios. Hosting: Vercel.

- **Plugins SEO (WordPress):** Rank Math Pro o Yoast SEO Premium, Schema Pro.
- **Performance (WordPress):** WP Rocket (cache), Imagify (compresión imágenes), Cloudflare (CDN).
- **Formularios:** WPForms o Gravity Forms. Integración con CRM vía Zapier.
- **Analytics:** Google Analytics 4, Google Search Console, Microsoft Clarity (gratis, heatmaps), Google Business Profile.
- **Agendamiento:** Calendly (integrar embed directo en CTAs y página de contacto).
- **Monitoreo SEO:** Google Search Console (gratuito), Ahrefs o SEMrush (para research y link building).
- **Testing Performance:** Google PageSpeed Insights, Lighthouse CLI, GTmetrix.
- **Schema Markup:** Google Structured Data Testing Tool para validar.

---

## 5. Restricciones y Casos Borde (Edge Cases)

- **Información Incompleta:** No redactar textos finales hasta tener testimonioss reales, ubicación exacta y certificaciones. Los placeholders generan copy genérico que daña el E-E-A-T.
- **Doble Audiencia:** El menú y el home deben segmentar claramente (Corporativos vs. Mujeres Ejecutivas) sin confundir. Evitar mezclar ambos públicos en una misma sección sin diferenciador visual.
- **Competidores con DA alto:** Primeros 3-6 meses de SEO son lentos. El plan de link building es crítico para acelerar autoridad. No prometer top 1 en Google antes de 6-12 meses.
- **Sin logo definido:** Si no existe logo, crear identidad visual mínima antes de desarrollar el sitio (colores, tipografías, logo texto). No lanzar con identidad improvisada.
- **Formularios sin CRM:** Si no hay CRM, configurar notificaciones por email a María + Google Sheets como repositorio temporal de leads.
- **Imágenes de stock:** Evitar fotos de stock genéricas. Si faltan fotos reales, coordinar sesión fotográfica profesional antes del lanzamiento.
- **URLs en español con caracteres especiales:** Usar URLs en español pero sin tildes ni eñes. `mentoria-mujeres-ejecutivas` correcto. `mentoría-mujeres-ejecutivas` incorrecto.
- **Contenido duplicado:** Cada página de servicio debe tener contenido único. No copiar/pegar secciones entre páginas (genera penalización de Google).

---

## 6. Protocolo de Errores y Aprendizajes (Memoria Viva)

*CRÍTICO: Esta sección se actualiza automáticamente tras fallos. Aquí reside la inteligencia acumulada.*

| Fecha | Error Detectado | Causa Raíz | Solución/Parche Aplicado |
|-------|-----------------|------------|--------------------------|
| — | — | — | — |

> **Nota de Implementación:** Si encuentras un nuevo error, **primero** arréglalo en el script o configuración, y **luego** documenta la regla aquí para evitar regresiones futuras.

---

## 7. Ejemplos de Uso

```bash
# Ejecutar auditoría SEO pre-lanzamiento con Lighthouse CLI
npx lighthouse https://elevareconsultingmg.com --output=json --output-path=.tmp/seo_audit_pre_launch.json

# Generar sitemap (si se usa script Python personalizado)
python scripts/elevare_web_builder.py --action generate_sitemap

# Comprobar keywords posicionadas (requiere integración GSC o Ahrefs)
python scripts/elevare_web_builder.py --action keyword_report --month 2026-03
```

---

## 8. Checklist de Pre-Ejecución (Antes de Desarrollar)

### Información Completa del Negocio
- [ ] Ubicación exacta (ciudad/provincia) confirmada por María
- [ ] Logo en SVG o PNG de alta resolución
- [ ] Paleta de colores definida (primario, secundario, acento CTA)
- [ ] Mínimo 5 testimonios reales (nombre + cargo + empresa + resultado)
- [ ] Mínimo 2 casos de éxito cuantificables (corporativo + mujer ejecutiva)
- [ ] Certificaciones de coaching ontológico (institución + año)
- [ ] Fotos profesionales de María (retrato, sesiones, eventos)
- [ ] Números clave: clientes, empresas, horas de coaching, países
- [ ] Precios o rangos de inversión por servicio (a mostrar o no)
- [ ] Cuenta de Calendly activa con disponibilidad configurada
- [ ] Dominio registrado y hosting contratado

### Keywords y Research
- [ ] Keyword research completado en Google Keyword Planner
- [ ] `keyword_mapping.csv` generado y aprobado
- [ ] 3-5 competidores directos analizados (web, posicionamiento, oferta)
- [ ] Keywords transaccionales identificadas (70% del foco de contenido)

### Cuentas y Herramientas
- [ ] Google Analytics 4 creado y ID disponible
- [ ] Google Search Console verificado
- [ ] Google Business Profile creado (o reclamado)
- [ ] Calendly configurado con sesión exploratoria de 30 min
- [ ] reCAPTCHA v3 configurado (Site Key + Secret Key)
- [ ] Cloudflare o CDN configurado en el dominio

---

## 9. Checklist Post-Ejecución (Antes de Lanzar)

### Contenido
- [ ] Todas las páginas principales tienen contenido completo (mín. 800 palabras)
- [ ] 3 posts de blog publicados (ToFu + MoFu + BoFu)
- [ ] 1 lead magnet descargable operativo (PDF con form de captura)
- [ ] Testimonios y casos de éxito publicados con fotos reales

### SEO On-Page
- [ ] Meta title (<60 chars) y description (150-160 chars) en TODAS las páginas
- [ ] H1 único por página con keyword principal
- [ ] Alt text en todas las imágenes
- [ ] URLs SEO-friendly (lowercase, guiones, sin tildes)
- [ ] 2-5 enlaces internos por página con anchor text descriptivo
- [ ] Breadcrumbs implementados

### SEO Técnico
- [ ] `sitemap.xml` enviado a Google Search Console
- [ ] `robots.txt` configurado (noindex en /gracias, /admin)
- [ ] HTTPS (SSL) activo
- [ ] Canonical tags en todas las páginas
- [ ] Open Graph + Twitter Cards configurados
- [ ] Schema JSON-LD implementado: LocalBusiness, Person, Service, FAQPage, Review, BreadcrumbList
- [ ] Página 404 personalizada con CTA

### Performance
- [ ] Core Web Vitals >90/100 Lighthouse (desktop y mobile)
- [ ] LCP <2.5s | INP <200ms | CLS <0.1
- [ ] Imágenes en WebP <100KB con lazy loading
- [ ] CSS/JS minificados + Gzip/Brotli habilitado
- [ ] CDN activo

### Conversión y Analítica
- [ ] Formularios probados (envío + notificación + autoresponder)
- [ ] Calendly integrado y funcional
- [ ] Lead magnet descargable funcional (form → email → PDF)
- [ ] GA4 con eventos personalizados (clicks CTA, form submit, scroll depth, descargas)
- [ ] Microsoft Clarity instalado para heatmaps
- [ ] Google Business Profile 100% completo con fotos

### Legal
- [ ] Política de Privacidad publicada
- [ ] Términos y Condiciones publicados
- [ ] reCAPTCHA activo en formularios
- [ ] Backup automático configurado

### Testing Final
- [ ] Todos los formularios funcionan (submit + notificaciones)
- [ ] Todos los CTAs redirigen correctamente
- [ ] Responsive verificado en 320px, 768px, 1024px, 1440px
- [ ] Probado en Chrome, Firefox, Safari, Edge
- [ ] Probado en iOS Safari y Android Chrome

---

## 10. Notas Adicionales

### Arquitectura de URLs (Sitemap)

| Página | URL | Prioridad |
|--------|-----|-----------|
| Home | `/` | Alta |
| Servicios (overview) | `/servicios` | Alta |
| Coaching Interno Empresas | `/coaching-interno-empresas` | Alta |
| Mentoría Mujeres Ejecutivas | `/mentoria-mujeres-ejecutivas` | Alta |
| Consultoría de Procesos | `/consultoria-procesos-gestion` | Alta |
| Sobre María | `/sobre-maria` | Media |
| Casos de Éxito | `/casos-de-exito` | Media |
| Blog | `/blog` | Media |
| Contacto | `/contacto` | Alta |
| FAQ | `/faq` | Media |
| Recursos Gratuitos | `/recursos` | Media |
| Agradecimiento (noindex) | `/gracias` | Baja |
| Política de Privacidad | `/privacidad` | Baja |
| Términos y Condiciones | `/terminos` | Baja |

### Keyword Mapping por Página (Completar con volúmenes reales)

| Página | Keyword Principal | Keywords Secundarias | Intención |
|--------|------------------|-----------------------|-----------|
| Home | `coaching empresarial [ciudad]` | `consultoría liderazgo`, `desarrollo organizacional` | Transaccional |
| Coaching Interno | `coaching interno empresas [ciudad]` | `implementar coaching pymes`, `sistema coaching organizacional` | Transaccional |
| Mentoría Mujeres | `mentoría ejecutiva mujeres [ciudad]` | `coach mujeres líderes`, `desarrollo liderazgo femenino` | Transaccional |
| Consultoría Procesos | `consultoría gestión empresarial [ciudad]` | `optimización procesos pymes`, `consultor management` | Transaccional |
| Sobre María | `María Gómez coaching ontológico` | `coach empresarial [ciudad]`, `consultora liderazgo` | Informacional |
| FAQ | `qué es coaching ontológico` | `coaching ontológico vs tradicional` | Informacional |
| Blog Post 1 | `coaching interno para empresas` | `implementar coaching pymes`, `coaching empresarial ROI` | MoFu |
| Blog Post 2 | `coaching ontológico qué es` | `diferencia coaching ontológico`, `beneficios coaching ontológico` | MoFu |
| Blog Post 3 | `síndrome del impostor mujeres ejecutivas` | `superar síndrome impostor liderazgo` | ToFu |

### Paleta de Colores Sugerida (Validar con María)
- **Primario:** `#2C5F9F` — Azul profesional (confianza, expertise)
- **Secundario:** `#5CA084` — Verde cálido (crecimiento, transformación)
- **Acento CTA:** `#E87D3E` — Naranja energético (acción, conversión)
- **Fondo claro:** `#F7F5F2` — Crema cálido (accesible, no frío)
- **Texto:** `#1A1A2E` — Casi negro (legibilidad máxima)

### Tipografía Sugerida
- **Headings:** Playfair Display (elegante, autoridad) o Montserrat (moderna, profesional)
- **Body:** Inter o Open Sans (máxima legibilidad)
- **Tamaños:** H1 36-48px → H2 28-36px → Body 16-18px — Line-height 1.7

### Plan de Blog (Año 1 — 12 Posts)

| Mes | Título | Keyword | Persona | Intención |
|-----|--------|---------|---------|-----------|
| 1 | "5 Señales de que tu PYME Necesita Coaching Interno" | `coaching interno para empresas` | Corporativo | MoFu |
| 2 | "Coaching Ontológico vs. Coaching Tradicional: ¿Cuál necesita tu empresa?" | `coaching ontológico qué es` | Ambos | MoFu |
| 3 | "Síndrome del Impostor en Mujeres Ejecutivas: 7 Estrategias" | `síndrome del impostor mujeres ejecutivas` | Mujer Ejecutiva | ToFu |
| 4 | "Cómo Desarrollar Líderes Internos en tu PYME sin Contratar Más" | `desarrollo líderes internos pymes` | Corporativo | MoFu |
| 5 | "Guía Completa: Implementar Coaching Interno en 90 Días" | `implementar coaching interno empresa` | Corporativo | BoFu |
| 6 | "Por Qué las Mujeres Ejecutivas Necesitan un Tipo Diferente de Mentoría" | `mentoría mujeres ejecutivas` | Mujer Ejecutiva | MoFu |
| 7 | "Cómo Medir el ROI del Coaching en tu Empresa" | `ROI coaching empresarial` | Corporativo | MoFu |
| 8 | "Liderazgo Consciente: Qué es y Por Qué las PYMEs lo Necesitan" | `liderazgo consciente empresas` | Corporativo | ToFu |
| 9 | "Delegación Efectiva: La Habilidad que Más Necesitan las Mujeres Líderes" | `delegar efectivamente mujer lider` | Mujer Ejecutiva | MoFu |
| 10 | "Cómo Optimizar Procesos en tu PYME sin Consultoras Costosas" | `optimizar procesos pymes` | Corporativo | ToFu |
| 11 | "De Técnica a Liderazgo: La Transición Más Difícil en la Carrera de una Mujer" | `transición liderazgo mujer ejecutiva` | Mujer Ejecutiva | ToFu |
| 12 | "[Resumen Anual] Estado del Liderazgo Empresarial en LATAM" | `liderazgo empresarial LATAM 2027` | Ambos | ToFu |

### Proyecciones de Resultados

| Hito | Mes 3 | Mes 6 | Mes 12 |
|------|-------|-------|--------|
| Visitas orgánicas/mes | 200-400 | 500-800 | 1,000-1,500 |
| Keywords Top 10 | 5-10 | 15-25 | 30-50 |
| Consultas/leads | 3-8 | 10-20 | 20-50 |
| Tasa de conversión | 2-3% | 3-4% | 4-5% |
| Domain Authority | ~5 | ~10 | ~20+ |
| Reviews Google | 1-3 | 5-8 | 15+ |

### Schema Markup Requerido por Página

```json
// LocalBusiness (todas las páginas — footer)
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Elevare Consulting MG",
  "description": "Consultoría de coaching ontológico empresarial y mentoría ejecutiva para mujeres con 20+ años de experiencia",
  "founder": { "@type": "Person", "name": "María Gómez" },
  "areaServed": ["Argentina", "Paraguay", "Uruguay", "Chile"],
  "serviceType": ["Executive Coaching", "Business Consulting", "Leadership Development"]
}
```

Tipos adicionales: `Person` (sobre-maria), `Service` (cada servicio), `FAQPage` (/faq), `Review` + `AggregateRating` (testimonios), `BreadcrumbList` (navegación).

### Información Pendiente de María (Bloquea Desarrollo)
- 🔴 **Crítico:** Ubicación exacta, testimonios reales, certificaciones, fotos profesionales
- 🟡 **Importante:** Logo definitivo, precios/rangos, video de presentación
- 🟢 **Opcional:** Reconocimientos, menciones en medios, números exactos de clientes

---

*Directiva creada el 2026-02-26 | Próxima actualización: al completar información pendiente de María o al detectar nuevos casos borde durante el desarrollo.*
