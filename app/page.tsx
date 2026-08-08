import type { Metadata } from "next";
import Link from "next/link";
import {
  Coins, Compass, Workflow, Building2, ShoppingBag, Network,
  Search, Target, Rocket, LineChart, CheckCircle, ArrowRight
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogoCarousel from "./components/LogoCarousel";
import ScrollReveal from "./components/ScrollReveal";
import ServiceCarousel from "./components/ServiceCarousel";
import styles from "./page.module.css";
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: "Consultoría Organizacional basada en Ciencias del Comportamiento | Elevare Consulting",
  description:
    "Transformamos organizaciones a través de las ciencias del comportamiento. Estructura de financiamiento, liderazgo, procesos y diseño organizacional para empresas que buscan crecer. Solicitá tu diagnóstico.",
  openGraph: {
    title: "Elevare Consulting | Transformación organizacional con base científica",
    description:
      "Diagnóstico, intervención y resultados de gestión basados en ciencias del comportamiento. Consultoría integral para organizaciones que quieren crecer.",
    url: "https://elevareconsultingmg.com",
  },
  alternates: {
    canonical: "https://elevareconsultingmg.com",
  },
};

// Tres ejes principales — las puertas de entrada
const ejes = [
  {
    Icon: Coins,
    title: "Estructura de Financiamiento",
    line: "El crecimiento no se financia con intuición. Ordenamos tus números y tu estructura de capital para que escalar deje de ser una apuesta.",
  },
  {
    Icon: Compass,
    title: "Desarrollo de Liderazgo",
    line: "Esto no es un curso. Es reingeniería de cómo tu gente decide, delega y lidera, con criterio propio y accountability real.",
  },
  {
    Icon: Workflow,
    title: "Gestión de Procesos",
    line: "Cuando el proceso es claro, el resultado deja de depender de la suerte. Cada decisión con un dueño, cada resultado con un porqué.",
  },
];

// Los 6 servicios, bajo el paraguas de Coaching Ejecutivo
const services = [
  {
    Icon: Coins,
    title: "Estructura de Financiamiento",
    desc: "Ordenamos tus números, tu estructura de capital y tu proyección para que escalar sea una decisión informada y no una apuesta.",
  },
  {
    Icon: Building2,
    title: "Desarrollo Organizacional",
    desc: "La cultura decide lo que la estrategia promete. Alineamos cultura, estructura y procesos para rendir hoy y evolucionar para lo que viene.",
  },
  {
    Icon: ShoppingBag,
    title: "Academia de Retail",
    desc: "El retail se gana en el detalle operativo, todos los días. Formación y estándares de gestión diseñados para la realidad del punto de venta.",
  },
  {
    Icon: Compass,
    title: "Desarrollo de Liderazgo",
    desc: "Formamos líderes que habilitan equipos autónomos, con criterio propio y responsabilidad colectiva como estándar operativo.",
  },
  {
    Icon: Workflow,
    title: "Gestión de Procesos",
    desc: "Diseñamos y estandarizamos procesos para que cada decisión tenga un dueño y cada resultado, una causa que se puede repetir.",
  },
  {
    Icon: Network,
    title: "Diseño Organizacional",
    desc: "La estructura sigue al propósito, no al organigrama heredado. Rediseñamos roles para sostener la performance mientras la empresa crece.",
  },
];

// Método Elevare — texto verbatim provisto por la clienta (no modificar)
const metodo = [
  {
    Icon: Search,
    num: "1",
    title: "DIAGNÓSTICO",
    subtitle: "Medición del punto de partida",
    desc: "Relevamiento multinivel de la organización: indicadores de gestión existentes, estructura y procesos, y patrones de comportamiento individual, relacional y organizacional que sostienen — o frenan — el resultado actual. Se establece una línea base cuantitativa (KPIs) y cualitativa (conductual) contra la cual se medirá el avance.",
  },
  {
    Icon: Target,
    num: "2",
    title: "PROPUESTA A MEDIDA",
    subtitle: "",
    desc: "A partir del diagnóstico, se definen objetivos de intervención en términos de KPIs concretos, se identifica en qué nivel se interviene primero — individual, relacional u organizacional — y se evalúa la viabilidad de la intervención antes de proponerla. Cada propuesta responde a una hipótesis explícita: qué comportamiento sostiene el resultado que se busca cambiar.",
  },
  {
    Icon: Rocket,
    num: "3",
    title: "EJECUCIÓN",
    subtitle: "",
    desc: "Implementación de la estrategia de cambio acordada, con planificación de hitos y seguimiento activo del comportamiento durante el proceso — no solo al cierre. Si el patrón que sostenía el problema no está cambiando, el enfoque se ajusta en el camino.",
  },
  {
    Icon: LineChart,
    num: "4",
    title: "MEDICIÓN DE RESULTADOS",
    subtitle: "",
    desc: "Evaluación de impacto contra los KPIs definidos en la Fase 2 y contra la línea base de la Fase 1. El cierre no se limita a verificar si se cumplió el objetivo, sino si el cambio de comportamiento quedó instalado — condición necesaria para que el resultado sea sostenible en el tiempo.",
  },
];

const trackRecord = [
  { value: "20+", label: "Años de experiencia" },
  { value: "470+", label: "Personas gestionadas" },
  { value: "4", label: "Países con alianzas" },
];

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.from('site_content').select('section_key, text_value');
  const content = new Map();
  data?.forEach(item => content.set(item.section_key, item.text_value));

  const heroTitleMain = content.get('hero_title_main') || "Transformamos organizaciones a través de las";
  const heroTitleSub = content.get('hero_title_sub') || "ciencias del comportamiento";

  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(3);

  return (
    <>
      <Header />

      <main>
        {/* ============ HERO ============ */}
        <section className={styles.hero}>
          <div className={styles.heroOrb} aria-hidden="true" />
          <div className={`container ${styles.heroContainer}`}>
            <ScrollReveal variant="fade-up" delay={80}>
              <h1 className={styles.heroTitle}>
                {heroTitleMain}{" "}
                <span className={styles.highlightText}>{heroTitleSub}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200} className={styles.heroCarouselWrap}>
              <ServiceCarousel />
            </ScrollReveal>

            <div className={styles.heroCtas}>
              <Link href="/contacto" className="btn btn-primary btn-lg">
                Solicitá tu Diagnóstico
              </Link>
              <a href="#metodo" className={`btn btn-outline-white ${styles.heroSecondaryBtn}`}>
                Conocé el método ↓
              </a>
            </div>
          </div>
        </section>

        {/* ============ TRUST STRIP ============ */}
        <LogoCarousel />

        {/* ============ TRES EJES ============ */}
        <section className="section">
          <div className="container">
            <ScrollReveal variant="fade-up">
              <div className={styles.centeredHead}>
                <h2 className="section-title">Tres frentes donde se define el resultado</h2>
                <p className="section-desc">
                  La mayoría de los problemas de una organización no son de talento, sino de dinero mal estructurado, liderazgo sin método y procesos que dependen de las personas correctas.
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.ejesGrid}>
              {ejes.map((e, i) => (
                <ScrollReveal key={e.title} variant="fade-up" delay={100 + i * 120}>
                  <div className={styles.ejeCard}>
                    <span className={styles.ejeIcon}><e.Icon size={26} /></span>
                    <h3 className={styles.ejeTitle}>{e.title}</h3>
                    <p className={styles.ejeLine}>{e.line}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICIOS ============ */}
        <section id="servicios" className="section bg-cream">
          <div className="container">
            <ScrollReveal variant="fade-up">
              <div className={styles.centeredHead}>
                <h2 className="section-title">Un sistema integral de consultoría</h2>
                <p className="section-desc">
                  Seis capacidades que se combinan según lo que tu organización necesita primero. Todas se integran en nuestro Coaching Ejecutivo, el marco desde el cual definimos por dónde intervenir.
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.svcGrid}>
              {services.map((s, i) => (
                <ScrollReveal key={s.title} variant="fade-up" delay={80 + i * 80}>
                  <div className={styles.svcCard}>
                    <span className={styles.svcIcon}><s.Icon size={24} /></span>
                    <h3 className={styles.svcTitle}>{s.title}</h3>
                    <p className={styles.svcDesc}>{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="fade-up">
              <div className={styles.svcCta}>
                <Link href="/contacto" className="btn btn-primary btn-lg">
                  Solicitá tu Diagnóstico <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============ MÉTODO ELEVARE ============ */}
        <section id="metodo" className={styles.metodoSection}>
          <div className={styles.metodoOrb} aria-hidden="true" />
          <div className="container">
            <ScrollReveal variant="fade-up">
              <div className={styles.centeredHead}>
                <h2 className={styles.metodoTitle}>Método Elevare</h2>
                <p className={styles.metodoLead}>
                  Diagnóstico, intervención y resultados de gestión basados en ciencias del comportamiento.
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.metodoGrid}>
              {metodo.map((m, i) => (
                <ScrollReveal key={m.num} variant="fade-up" delay={100 + i * 120}>
                  <div className={styles.metodoCard}>
                    <div className={styles.metodoCardTop}>
                      <span className={styles.metodoNum}>{m.num}</span>
                      <span className={styles.metodoIcon}><m.Icon size={22} /></span>
                    </div>
                    <h3 className={styles.metodoCardTitle}>{m.title}</h3>
                    {m.subtitle && <p className={styles.metodoCardSubtitle}>{m.subtitle}</p>}
                    <p className={styles.metodoCardDesc}>{m.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SOBRE NOSOTROS ============ */}
        <section id="sobre-nosotros" className="section">
          <div className="container">
            <ScrollReveal variant="fade-up">
              <div className={styles.centeredHead}>
                <h2 className="section-title">Detrás de Elevare hay un equipo, no una fórmula</h2>
                <p className="section-desc">
                  Somos un equipo multidisciplinario de consultores en comportamiento organizacional, finanzas, procesos y liderazgo. No trabajamos desde la teoría: cada intervención combina evidencia, experiencia de gestión real y la obsesión por que el cambio quede instalado y se sostenga.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={120}>
              <div className={styles.trackRecord}>
                {trackRecord.map((t) => (
                  <div key={t.label} className={styles.trackItem}>
                    <strong>{t.value}</strong>
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {testimonials && testimonials.length > 0 && (
              <>
                <ScrollReveal variant="fade-up">
                  <h3 className={styles.casosTitle}>Casos de éxito</h3>
                </ScrollReveal>
                <div className="grid-3">
                  {testimonials.map((t, idx) => (
                    <ScrollReveal key={t.id || idx} variant="fade-up" delay={idx * 120}>
                      <div className={`card ${styles.testiCard}`}>
                        <div className={styles.testiStars}>★★★★★</div>
                        <p className={styles.testiText}>&ldquo;{t.text}&rdquo;</p>
                        {t.highlight && (
                          <div className={styles.testiResult}>
                            <CheckCircle size={14} style={{ color: "var(--color-secondary)", marginTop: 2, flexShrink: 0 }} />
                            <span>{t.highlight}</span>
                          </div>
                        )}
                        <div className={styles.testiAuthor}>
                          {t.image_url ? (
                            <img src={t.image_url} alt={t.name} className={styles.testiAvatar} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                          ) : (
                            <div className={styles.testiAvatar}>{t.name[0]}</div>
                          )}
                          <div className={styles.testiAuthorInfo}>
                            <strong>{t.name}</strong>
                            <span>{t.role}</span>
                            <span className={styles.testiCompany}>{t.company}</span>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className={styles.ctaSection}>
          <div className="container">
            <ScrollReveal variant="fade-up">
              <div className={styles.ctaInner}>
                <h2 className={styles.ctaFinalTitle}>¿Listo para transformar tu organización?</h2>
                <p className={styles.ctaFinalDesc}>
                  Empezamos siempre por el diagnóstico. Medimos el punto de partida y te mostramos, con datos, qué está sosteniendo tus resultados actuales y por dónde conviene intervenir.
                </p>
                <Link href="/contacto" className="btn btn-primary btn-lg">
                  Solicitá tu Diagnóstico
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
