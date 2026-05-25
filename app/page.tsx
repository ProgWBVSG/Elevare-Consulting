import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target, RefreshCw, Settings, TrendingDown, HelpCircle,
  Eye, Users, Zap, Wrench, Compass,
  Building2, Crown, Trophy, Brain, Scale, Globe,
  Sparkles, Star, CheckCircle, ArrowRight, ChevronRight
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeadMagnetForm from "./components/LeadMagnetForm";
import CounterBadge from "./components/CounterBadge";
import LogoCarousel from "./components/LogoCarousel";
import ScrollReveal from "./components/ScrollReveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Consultora de Negocios · Management y Desarrollo Organizacional para PYMEs | Elevare Consulting",
  description:
    "Elevare Consulting: consultora de negocios especializada en management, desarrollo organizacional, liderazgo y estructuración financiera para PYMEs en Argentina y LATAM. Mentorías 1 a 1 para líderes. Diagnóstico de clima, cultura y procesos. 20+ años de experiencia.",
  openGraph: {
    title: "Elevare Consulting | Consultora de Negocios · Management · Desarrollo Organizacional",
    description:
      "Consultora especializada en management, cultura organizacional y liderazgo para PYMEs. Mentorías 1 a 1 para líderes. Diagnóstico de clima y procesos. Argentina y LATAM.",
    url: "https://elevareconsultingmg.com",
  },
  alternates: {
    canonical: "https://elevareconsultingmg.com",
  },
};

const trustBadges = [
  { value: "20+", label: "Años de Experiencia" },
  { value: "4", label: "Países con Alianzas" },
];

const pymesPainPoints = [
  { Icon: Target, title: "Tu equipo gerencial no lidera como esperabas", desc: "Invirtieron en capacitaciones, pero los mandos medios siguen sin tomar decisiones autónomas ni asumir accountability." },
  { Icon: RefreshCw, title: "Alta rotación y clima laboral deteriorado", desc: "El clima es tenso, personas valiosas renuncian y cada día es apagar un incendio. Falta diagnóstico real." },
  { Icon: Settings, title: "Procesos ineficientes sin roles claros", desc: "Todos lo saben, nadie actúa. Las reuniones no producen resultados. Falta estructura organizacional." },
  { Icon: TrendingDown, title: "Sin estructura financiera ni proyección", desc: "Tu PYME factura pero no tiene visibilidad financiera. Necesitás ordenar números para crecer sostenidamente." },
  { Icon: HelpCircle, title: "Cultura organizacional débil o inexistente", desc: "No hay valores claros, la comunicación falla y cada área trabaja aislada. Tu empresa necesita identidad." },
];

const lideresPainPoints = [
  { Icon: Eye, title: "Sentís que liderás en piloto automático", desc: "Cumplís con el rol, pero sabés que podrías tener más impacto. Te falta una mirada externa estratégica." },
  { Icon: Users, title: "No lográs que tu equipo funcione sin vos", desc: "Terminás haciendo todo porque es más rápido que delegar. Tu equipo no tiene autonomía real." },
  { Icon: Zap, title: "Desgaste por falta de procesos claros", desc: "Trabajás el doble porque no hay estructura. Las decisiones se concentran en vos y el burnout acecha." },
  { Icon: Wrench, title: "Necesitás herramientas de gestión concretas", desc: "Los cursos genéricos no alcanzan. Necesitás metodología aplicable a TU realidad y TU equipo." },
  { Icon: Compass, title: "Soledad en la toma de decisiones críticas", desc: "Tenés responsabilidades enormes sin un espacio profesional donde analizar opciones con claridad." },
];

const services = [
  {
    Icon: Building2,
    title: "Management & Desarrollo Organizacional para PYMEs",
    description: "Diagnosticamos cultura, clima, procesos y liderazgo en tu empresa. Diseñamos e implementamos soluciones de management que transforman la organización: roles claros, accountability real y estructura financiera sólida.",
    benefits: ["Diagnóstico de clima, cultura y procesos organizacionales", "Estructuración financiera y proyección de crecimiento", "Líderes internos con accountability y decisiones autónomas"],
    href: "/empresas",
    cta: "Conocé el programa completo",
    color: "primary",
  },
  {
    Icon: Crown,
    title: "Mentorías 1 a 1 para Líderes",
    description: "Acompañamiento estratégico personalizado para líderes que necesitan elevar su gestión. Trabajamos sobre toma de decisiones, delegación, management de equipos y desarrollo de competencias directivas.",
    benefits: ["Claridad en toma de decisiones estratégicas", "Herramientas de management aplicables a tu día a día", "Perspectiva externa profesional y confidencial"],
    href: "/mentoria-lideres",
    cta: "Comenzá tu mentoría",
    color: "secondary",
  },
];

const differentiators = [
  {
    Icon: Trophy,
    title: "Diagnóstico Organizacional",
    desc: "Evaluamos clima, cultura, procesos y estructura financiera para identificar exactamente qué frena tu crecimiento. Sin supuestos: datos reales de tu empresa.",
  },
  {
    Icon: Brain,
    title: "Diseño de Estructura y Procesos",
    desc: "Definimos roles, responsabilidades y mecanismos de accountability claros. Cada decisión tiene un dueño, cada proceso tiene un estándar.",
  },
  {
    Icon: Scale,
    title: "Desarrollo de Liderazgo Interno",
    desc: "Formamos líderes que habilitan a sus equipos en lugar de controlarlos. Autonomía, confianza y responsabilidad colectiva como estándar.",
  },
  {
    Icon: Globe,
    title: "Implementación Directa",
    desc: "No solo recomendamos: acompañamos la ejecución hasta ver cambios concretos. Diagnóstico, diseño y acción en un solo proceso integrado.",
  },
  {
    Icon: Zap,
    title: "Performance Sostenible",
    desc: "Alineamos los sistemas de gestión y cultura para que los resultados se mantengan. Tu organización opera mejor incluso después de que nos vamos.",
  },
];

const testimonials = [
  {
    name: "Roberto M.",
    role: "Director General",
    company: "PYME Industrial, Buenos Aires",
    text: "Después de 6 meses con Elevare, mi equipo gerencial tomó autonomía real. La rotación bajó un 40% y el clima laboral cambió completamente. María entiende el mundo de la empresa desde adentro.",
    result: "40% menos rotación de personal",
    type: "corporate",
  },
  {
    name: "Maria Eugenia Cano",
    role: "Consultoría de Liderazgo",
    company: "LinkedIn Review",
    text: "Muchas gracias ELEVARE Consulting, cada charla compartida fue inolvidable. Tus consejos ya sea en palabras, videos, todo fue un aprendizaje continuo y fructífero. Excelente profesional. Fue un semestre con muchas sorpresas y celebro poder haber contado con tu presencia, gracias.",
    result: "Aprendizaje continuo y fructífero",
    type: "executive",
  },
  {
    name: "Camila V.",
    role: "CEO",
    company: "Startup de Tecnología, Montevideo",
    text: "La mentoría con Elevare me cambió la perspectiva completa. No solo mejoré mi gestión, transformé cómo lidero mi equipo y cómo estructuramos el crecimiento.",
    result: "Expansión a 3 países en 18 meses",
    type: "executive",
  },
];

const blogPosts = [
  {
    title: "5 Señales de que tu PYME Necesita Consultoría Organizacional",
    excerpt: "Si tu equipo gerencial no decide de forma autónoma, los procesos fallan y el clima se deteriora, hay señales claras que no podés ignorar.",
    category: "Management",
    date: "Enero 2026",
    href: "/blog/senales-pyme-necesita-consultoria",
    readTime: "8 min",
  },
  {
    title: "Cómo Estructurar Financieramente tu PYME para Crecer",
    excerpt: "La mayoría de las PYMEs facturan pero no tienen visibilidad financiera real. Te mostramos cómo ordenar los números para escalar.",
    category: "Estructuración Financiera",
    date: "Febrero 2026",
    href: "/blog/estructurar-financieramente-pyme",
    readTime: "10 min",
  },
  {
    title: "Liderazgo Efectivo: De Controlar a Habilitar a tu Equipo",
    excerpt: "Los mejores líderes no dirigen cada movimiento — habilitan a sus equipos para operar con autonomía, confianza y accountability.",
    category: "Liderazgo",
    date: "Febrero 2026",
    href: "/blog/liderazgo-efectivo-habilitar-equipo",
    readTime: "12 min",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ============ HERO ============ */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <Sparkles size={14} />
                Consultora de Negocios · Management & Desarrollo Organizacional
              </div>
              <h1 className={styles.heroTitle}>
                Potenciá tu <span className={styles.highlightText}>Empresa</span><br />
                <em>con Management Estratégico</em>
              </h1>
              <p className={styles.heroSubtitle}>
                Consultora especializada en management, desarrollo organizacional y estructuración financiera para PYMEs. Diagnosticamos cultura, clima, procesos y liderazgo para convertirlos en ventajas competitivas concretas.
              </p>

              {/* Trust badges */}


              <div className={styles.heroCtas}>
                <Link href="/contacto" className="btn btn-primary btn-lg">
                  Agenda tu sesión exploratoria gratuita
                </Link>
                <Link href="/sobre-maria" className={`btn btn-outline-white ${styles.heroSecondaryBtn}`}>
                  Conocé cómo trabajamos
                </Link>
              </div>
            </div>

            <div className={styles.heroImageWrapper}>
              <Image
                src="/maria-hero.jpg"
                alt="María Gómez - Consultora de negocios y desarrollo organizacional"
                className={styles.heroImage}
                width={800}
                height={1000}
                priority
              />
              <div className={styles.heroImageBackdrop}></div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={styles.scrollIndicator}>
            <span>Scrolleá para descubrir</span>
            <div className={styles.scrollArrow}>↓</div>
          </div>

          {/* Círculo decorativo */}
          <div className={styles.heroDecorCircle} aria-hidden="true" />

        </section>

        {/* ============ LOGO CAROUSEL — CONFIANZA ============ */}
        <LogoCarousel />

        {/* ============ PAIN POINTS — DOS AUDIENCIAS ============ */}
        <section className={`section bg-cream`}>
          <div className="container">
            <ScrollReveal variant="fade-up">
            <div className="text-center" style={{ marginBottom: "4rem" }}>
              <span className="section-label">¿Te identificás con esto?</span>
              <h2 className="section-title">¿Tu empresa o tu gestión no está dando los resultados que esperabas?</h2>
              <p className="section-subtitle">
                Trabajamos con dos tipos de desafíos — pero con la misma raíz: la necesidad de management profesional, estructura clara y liderazgo efectivo.
              </p>
            </div>
            </ScrollReveal>

            <div className={styles.painPointsGrid}>
              {/* PYMEs */}
              <ScrollReveal variant="fade-right" delay={100}>
              <div className={`card ${styles.painCard}`}>
                <div className={styles.painCardHeader}>
                  <span className={styles.painCardIcon}><Building2 size={22} /></span>
                  <h3 className={styles.painCardTitle}>Para PYMEs que necesitan estructura</h3>
                </div>
                <ul className={styles.painList}>
                  {pymesPainPoints.map((p) => (
                    <li key={p.title} className={styles.painItem}>
                      <span className={styles.painEmoji}><p.Icon size={18} /></span>
                      <div>
                        <strong>{p.title}</strong>
                        <p>{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/empresas" className="btn btn-secondary" style={{ marginTop: "2rem", width: "100%" }}>
                  Ver solución para tu empresa →
                </Link>
              </div>
              </ScrollReveal>

              {/* Líderes */}
              <ScrollReveal variant="fade-left" delay={250}>
              <div className={`card ${styles.painCard} ${styles.painCardSecondary}`}>
                <div className={styles.painCardHeader}>
                  <span className={styles.painCardIcon}><Crown size={22} /></span>
                  <h3 className={styles.painCardTitle}>Para líderes que necesitan acompañamiento</h3>
                </div>
                <ul className={styles.painList}>
                  {lideresPainPoints.map((p) => (
                    <li key={p.title} className={styles.painItem}>
                      <span className={styles.painEmoji}><p.Icon size={18} /></span>
                      <div>
                        <strong>{p.title}</strong>
                        <p>{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/mentoria-lideres" className={`btn ${styles.btnGreen}`} style={{ marginTop: "2rem", width: "100%" }}>
                  Ver mentorías para líderes →
                </Link>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ============ SERVICIOS ============ */}
        <section className="section">
          <div className="container">
            <ScrollReveal variant="fade-up">
            <div className="text-center" style={{ marginBottom: "4rem" }}>
              <span className="section-label">Nuestros Servicios</span>
              <h2 className="section-title">Cómo transformamos organizaciones y líderes</h2>
            </div>
            </ScrollReveal>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <ScrollReveal key={service.title} variant="zoom-in" delay={index * 200}>
                <div className={`${styles.serviceCard} ${styles[`serviceCard--${service.color}`]}`}>
                  <div className={styles.serviceImageContainer}>
                    <div className={styles.serviceImagePlaceholder}>
                      <service.Icon size={48} strokeWidth={1.2} />
                    </div>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className={styles.serviceIcon}><service.Icon size={26} /></span>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDesc}>{service.description}</p>
                    <ul className={styles.serviceBenefits}>
                      {service.benefits.map((b) => (
                        <li key={b}>
                          <CheckCircle size={15} style={{ flexShrink: 0, marginTop: 2 }} /> {b}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className={`btn btn-outline ${styles.serviceBtn}`}>
                      {service.cta} <ArrowRight size={15} style={{ marginLeft: 4 }} />
                    </Link>
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ POR QUÉ ELEVARE ============ */}
        <section className={styles.diffSection}>
          {/* Elemento decorativo de fondo */}
          <div className={styles.diffBgOrb} aria-hidden="true" />
          <div className={styles.diffBgOrbTwo} aria-hidden="true" />

          <div className="container">
            <ScrollReveal variant="fade-right">
            <div className={styles.diffHeader}>
              <div className={styles.diffHeaderLeft}>
                <span className={`section-label ${styles.labelLight}`}>¿Por qué Elevare?</span>
                <h2 className={styles.diffSectionTitle}>
                  Líderes más efectivos.<br />
                  <em>Equipos más rentables.</em>
                </h2>
              </div>
              <p className={styles.diffHeaderDesc}>
                Mientras otros facilitan talleres, nosotros diagnosticamos, diseñamos e implementamos hasta ver el cambio real. Management concreto, ejecución directa, resultados medibles.
              </p>
            </div>
            </ScrollReveal>

            <div className={styles.diffLayout}>
              {/* Tarjeta destacada — primera */}
              {differentiators.slice(0, 1).map(({ Icon: FIcon, title, desc }) => (
                <ScrollReveal key={title} variant="fade-up" delay={100}>
                <div className={styles.diffCardFeatured}>
                  <span className={styles.diffNum}>01</span>
                  <div className={styles.diffIconLg}><FIcon size={28} /></div>
                  <h3 className={styles.diffTitleFeatured}>{title}</h3>
                  <p className={styles.diffDescFeatured}>{desc}</p>
                  <div className={styles.diffAccentLine} />
                </div>
                </ScrollReveal>
              ))}

              {/* Grid 2×2 con el resto */}
              <div className={styles.diffSubGrid}>
                {differentiators.slice(1).map(({ Icon: DIcon, title, desc }, i) => (
                  <ScrollReveal key={title} variant="fade-up" delay={200 + i * 120} stagger={0} index={0}>
                  <div className={styles.diffCardSmall}>
                    <span className={styles.diffNumSm}>0{i + 2}</span>
                    <div className={styles.diffIconSm}><DIcon size={18} /></div>
                    <h4 className={styles.diffTitleSm}>{title}</h4>
                    <p className={styles.diffDescSm}>{desc}</p>
                  </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className={styles.diffFooter}>
              <Link href="/sobre-maria" className="btn btn-outline-white btn-lg">
                Conocé la historia de Elevare →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIOS ============ */}
        <section className="section bg-cream">
          <div className="container">
            <ScrollReveal variant="fade-up">
            <div className="text-center" style={{ marginBottom: "4rem" }}>
              <span className="section-label">Testimonios</span>
              <h2 className="section-title">Lo que dicen quienes ya transformaron su liderazgo</h2>
            </div>
            </ScrollReveal>

            <div className="grid-3">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.name} variant="zoom-in" delay={i * 150}>
                <div className={styles.testimonialCard}>
                  <div className={styles.testimonialStars} aria-label="5 estrellas">★★★★★</div>
                  <p className={styles.testimonialText}>{t.text}</p>
                  <div className={styles.testimonialResult}>
                    <CheckCircle size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} aria-hidden="true" />
                    {t.result}
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <strong className={styles.testimonialName}>{t.name}</strong>
                      <p className={styles.testimonialRole}>{t.role}</p>
                      <p className={styles.testimonialCompany}>{t.company}</p>
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center" style={{ marginTop: "3rem" }}>
              <Link href="/testimonios" className="btn btn-outline">
                Ver más casos de éxito en video →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ NEWSLETTER CAPTURE ============ */}
        <section className="section bg-cream">
          <div className="container">
            <ScrollReveal variant="flip-up">
            <div className={styles.newsletterBox}>
              <span className="section-label">Newsletter de Liderazgo</span>
              <h2 className={styles.newsletterTitle}>
                Insights de liderazgo directo a tu inbox
              </h2>
              <p className={styles.newsletterDesc}>
                Estrategias concretas, casos reales y herramientas de coaching ejecutivo. Sin ruido, solo contenido que transforma. Una vez por semana.
              </p>
              <LeadMagnetForm />
              <p className={styles.newsletterDisclaimer}>
                Sin spam. Podés desuscribirte cuando quieras.
              </p>
            </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <ScrollReveal variant="fade-right">
              <div className={styles.ctaContent}>
                <span className={`section-label ${styles.labelLight}`}>Siguiente Paso</span>
                <h2 className={styles.ctaTitle}>
                  ¿Listo para profesionalizar la gestión de tu empresa?
                </h2>
                <p className={styles.ctaDesc}>
                  Agendá una sesión exploratoria gratuita de 30 minutos. Sin compromiso. Conversamos sobre tus desafíos específicos y evaluamos juntos cómo nuestra consultoría puede transformar tu organización.
                </p>
                <div className={styles.ctaBtns}>
                  <Link href="/contacto" className="btn btn-primary btn-lg">
                    Agendar mi sesión gratuita ahora
                  </Link>
                  <Link href="/servicios" className="btn btn-outline-white">
                    Ver todos los servicios
                  </Link>
                </div>
              </div>
              </ScrollReveal>
              <div className={styles.ctaVisual}>
                <div className={styles.ctaImageWrapper}>
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
                    alt="Coaching profesional de equipos y management empresarial"
                    width={800}
                    height={1000}
                    className={styles.ctaImage}
                  />
                  <div className={styles.ctaFloatingCard}>
                    <span className={styles.ctaFloatingIcon} aria-hidden="true">
                      <Target size={22} strokeWidth={1.5} />
                    </span>
                    <div>
                      <strong>Sesión Exploratoria</strong>
                      <span>30 min · Gratuita</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
