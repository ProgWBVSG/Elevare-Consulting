# DIRECTIVA: [UI_UX_PRO_MAX_SOP] — MYB Digitals Web

> **ID:** 2026-04-10_UIUX_PROMAX
> **Skill Origen:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
> **Última Actualización:** 2026-04-10
> **Estado:** ACTIVO — Aplicado al proyecto MYB Digitals Web

---

## 1. Objetivo

Este SOP define las reglas de diseño UI/UX que deben aplicarse a **TODOS** los cambios visuales del sitio de MYB Digitals. Es la fuente de verdad de calidad de interfaz: si una tarea cambia cómo se ve, se siente o se interactúa con algo, **esta directiva debe consultarse primero**.

---

## 2. Design System — MYB Digitals

### Stack
- **Framework:** Next.js 15 (App Router)
- **CSS:** TailwindCSS v4 + módulo `globals.css`
- **Animaciones:** Framer Motion (durations: 0.6–0.8s entrada, 0.15–0.3s micro-interacciones)
- **Iconos:** Lucide React únicamente (stroke 1.5px) — NO emojis como iconos

### Identidad Visual
| Token | Valor |
|---|---|
| Color Primario | `#C3D809` (lima/lime) |
| Fondo | `#07080c` |
| Texto principal | `#ffffff` |
| Texto secundario | `gray-300` (mínimo de contraste OK) |
| Texto muted | `gray-400` — solo para elementos no críticos |
| Font | Geist Sans (display: swap) |
| Border radius | `rounded-2xl` (cards), `rounded-full` (botones CTA), `rounded-[2rem]+` (secciones) |

### Estilo: Dark Mode Glassmorphism + Futuristic
- Fondos de card: `bg-white/[0.02–0.05]` con `border-white/[0.07–0.10]`
- Glow effects: `rgba(195,216,9,0.X)` blur en radial-gradient
- Backdrop blur: `backdrop-blur-xl` en navbar/modales

---

## 3. Reglas Críticas por Prioridad (Quick Reference)

### §1 — CRITICAL: Accesibilidad
- **Contraste mínimo:** 4.5:1 texto normal, 3:1 texto grande (h1, h2 en blanco sobre #07080c = ✅ 15:1)
- **Focus visible:** Siempre presente — definido en `globals.css` con `outline: 2px solid var(--color-primary)`
- **Skip-link:** Instalado en `layout.tsx` → `<a href="#main-content" className="skip-link">`
- **Alt text:** Obligatorio en todas las imágenes — descriptivo, no genérico ("logo MYB Digitals" no "logo")
- **Aria-labels:** En botones icon-only y links externos; `aria-hidden="true"` en iconos decorativos
- **Jerarquía de headings:** h1 → h2 → h3 sin saltarse niveles
- **Keyboard nav:** Todos los dropdowns deben cerrarse con `Escape`

### §2 — CRITICAL: Touch & Interacción
- **Tamaño mínimo:** `min-h-[44px]` en todos los botones CTA (ya aplicado)
- **tap-delay:** `touch-action: manipulation` definido en `globals.css` para `a` y `button`
- **Loading states:** Deshabilitar botón + mostrar spinner durante operaciones async
- **Hover-only:** Nunca depender solo de hover — el dropdown de Web usa click (accesible en mobile)

### §3 — HIGH: Performance
- **Imágenes:** Usar `next/image` con `alt`, `fill` o dimensiones declaradas
- **Font loading:** `display: "swap"` en Geist Sans y Geist Mono (aplicado en `layout.tsx`)
- **Lazy loading:** Componentes below-fold con `whileInView` de Framer Motion (ya implementado)
- **Animaciones:** Solo `transform` y `opacity` — nunca animar `width`, `height`, `top`, `left`

### §4 — HIGH: Style Consistency
- Iconos: Un solo estilo → Lucide React (stroke 1.5px, sin mezclar filled/outline)
- Sombras: Solo `shadow-[0_0_Xpx_rgba(195,216,9,Y)]` para glow en elementos primary
- No mezclar estilos de cards: glassmorphism consistente en todo el sitio

### §5 — HIGH: Layout & Responsive
- Mobile first con breakpoints: `sm:` (640) → `md:` (768) → `lg:` (1024)
- Max container: `max-w-6xl` para contenido, `max-w-7xl` para hero
- No horizontal scroll → verificar en 375px
- `min-h-dvh` preferido sobre `100vh` donde aplique

### §6 — MEDIUM: Tipografía
- Body text: mínimo 16px (definido en `globals.css`)
- Line-height: `leading-relaxed` (1.625) en párrafos — `leading-tight` solo en headings grandes
- Texto secundario mínimo: `text-gray-300` (no `gray-500` en texto cuerpo importante)
- Escala tipográfica: 12 → 14 → 16 → 18 → 24 → 32 → 48 → 64 → 96px

### §7 — MEDIUM: Animaciones
- **Entrada:** `ease-out`, duración 0.6–0.8s
- **Exit:** `ease-in`, ~60% de la duración de entrada (~0.18s)
- **Micro-interacciones:** 150–200ms
- **prefers-reduced-motion:** Definido en `globals.css` — todas las animations se deshabilitan
- NO animar decorativamente — cada animación debe comunicar causa-efecto
- Stagger children: 0.15s entre items de listas/grids

### §8 — MEDIUM: Formularios y Feedback
- Labels visibles (no solo placeholders)
- Error state near field (no solo al tope)
- Submit: estado loading → success/error visible
- Toast duration: 3–5 segundos

### §9 — HIGH: Navegación
- Navbar fija con `z-50`; contenido reserva espacio `pt-32`
- Mobile: hamburger accesible con `aria-expanded` + `aria-controls`
- Dropdown: cierre por `Escape`, click fuera, y al seleccionar link
- Links externos: `rel="noopener noreferrer"` siempre

---

## 4. Restricciones y Casos Borde (Memoria Viva)

| Fecha | Restricción Aprendida |
|---|---|
| 2026-04-10 | `gray-400` tiene contraste borderline en textos de cuerpo sobre `#07080c`. Usar `gray-300` para texto body importante. |
| 2026-04-10 | El dropdown de Web en Navbar era hover-only → roto en mobile. Migrar siempre dropdowns a click+keyboard. |
| 2026-04-10 | `target="_blank"` sin `rel="noopener noreferrer"` es un riesgo de seguridad (tabnabbing). Siempre incluir. |
| 2026-04-10 | Animaciones decorativas (scroll indicator) deben llevar `aria-hidden="true"` para screen readers. |
| 2026-04-10 | El CSS `@media (prefers-reduced-motion: reduce)` debe estar en `globals.css` — Framer Motion no lo maneja automáticamente. |
| 2026-04-10 | Framer Motion requiere `useReducedMotion()` hook (importado de `framer-motion`) para animaciones JS. El CSS solo afecta CSS animations/transitions, no Framer Motion. Aplicar en todo componente con animaciones continuas (`animate={{ y: [...] }}`). |
| 2026-04-10 | El `min-h-[52px]` y `aria-label` son obligatorios en CTAs de páginas de servicios, no solo en la página principal. Verificar TODAS las páginas de servicio. |
| 2026-04-10 | **CRÍTICO**: `position: sticky` + `overflow: hidden` en el mismo elemento rompe el sticky y causa pantallas negras. Usar `overflow: clip` o eliminar overflow. Para secciones de features scroll-based, preferir layout vertical con `whileInView` en lugar de sticky scroll con height `N*100vh`. |
| 2026-04-11 | **Invitaciones page**: precio definitivo $68.999 pago único ó 3 x $23.666 con tarjeta. Features extraídas de competidoras (latarjetadigital.com.ar, invitacionescreativas.com.ar): RSVP propio integrado, album QR ilimitado, personalización por invitado con nombre, trivia interactiva, GPS, cuenta regresiva, dress code, padrinos, música de fondo, lista de regalos, save the date, hospedajes. WhatsApp CTA: wa.me/543515555123. |

---

## 5. Checklist Pre-Entrega (Web)

- [x] Contraste texto: `gray-300`+ sobre `#07080c`, negro sobre `#C3D809`
- [x] Alt text descriptivo en todas las imágenes de `next/image`
- [x] Focus rings visibles (probar Tab key en browser)
- [x] Touch targets ≥ 44px de height (botones CTA)
- [x] Sin horizontal scroll en 375px
- [x] Links externos con `rel="noopener noreferrer"`
- [x] Iconos decorativos con `aria-hidden="true"`
- [x] Headings en jerarquía correcta (h1→h2→h3)
- [x] `font-display: swap` en fuentes (ya en layout.tsx)
- [x] Animaciones solo en `transform`/`opacity`
- [x] `prefers-reduced-motion` implementado: CSS global + `useReducedMotion()` en FloatingWidgets.tsx
