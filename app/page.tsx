import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Coins, Building2, ShoppingBag, Cpu,
  Search, Target, Rocket, LineChart, ArrowRight
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogoCarousel from "./components/LogoCarousel";
import ScrollReveal from "./components/ScrollReveal";
import { ShaderBackground } from "./components/ShaderBackground";
import styles from "./page.module.css";
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: "Consultoría Organizacional basada en Ciencias del Comportamiento | Elevare Consulting",
  description:
    "Consultora de negocios en Argentina y LATAM: desarrollo organizacional, academia de retail, estructuración de financiamiento y tecnología. Diagnóstico basado en ciencias del comportamiento, sin costo.",
  openGraph: {
    title: "Elevare Consulting | Transformación organizacional con base científica",
    description:
      "Cuatro áreas integradas y un método con diagnóstico, ejecución y medición de resultados. Para empresas que ya facturan y necesitan estructura.",
    url: "https://elevareconsultingmg.com",
      images: [{ url: "/og-elevare.png", width: 1200, height: 630, alt: "Elevare Consulting — Consultora de Negocios" }],
},
  alternates: {
    canonical: "https://elevareconsultingmg.com",
  },
};


// Grid shown in the hero: the four service areas, each linking to /servicios.
const heroServices = [
  { title: "Desarrollo Organizacional", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", href: "/servicios" },
  { title: "Academia de Retail", image: "/servicio-retail.jpg", href: "/servicios" },
  { title: "Estructuración de Financiamiento", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop", href: "/servicios" },
  { title: "Tecnología", image: "/servicio-tecnologia.jpg", href: "/servicios" },
];

// Consultora de Negocios — las cuatro áreas en las que trabajamos
const services = [
  {
    Icon: Building2,
    title: "Desarrollo Organizacional",
    desc: "Alineamos cultura, estructura y procesos para que la organización rinda hoy y evolucione con lo que viene. Roles claros, decisiones con dueño y equipos que sostienen el resultado.",
  },
  {
    Icon: ShoppingBag,
    title: "Academia de Retail",
    desc: "Formación y estándares de gestión para la realidad del punto de venta: equipos preparados, indicadores a la vista y una experiencia de cliente que se repite y escala.",
  },
  {
    Icon: Coins,
    title: "Estructuración de Financiamiento",
    desc: "Ordenamos tus números, tu estructura de capital y tu proyección para que cada decisión de inversión y crecimiento se tome con información concreta.",
  },
  {
    Icon: Cpu,
    title: "Tecnología",
    desc: "Incorporamos herramientas y sistemas que sostienen la operación: información confiable, procesos digitalizados y datos disponibles en el momento de decidir.",
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


export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.from('site_content').select('section_key, text_value');
  const content = new Map();
  data?.forEach(item => content.set(item.section_key, item.text_value));

  const heroTitleMain = content.get('hero_title_main') || "Transformamos organizaciones a través de las";
  const heroTitleSub = content.get('hero_title_sub') || "ciencias del comportamiento";

  return (
    <>
      <Header />

      <main>
        {/* ============ HERO ============ */}
        <section className={styles.hero}>
          <ShaderBackground className={styles.heroShader} />
          <div className={`container ${styles.heroContainer}`}>
            <ScrollReveal variant="fade-up" delay={80}>
              <h1 className={styles.heroTitle}>
                {heroTitleMain}{" "}
                <span className={styles.highlightText}>{heroTitleSub}</span>
              </h1>
            </ScrollReveal>

            <div className={styles.heroGrid}>
              {heroServices.map((s, i) => (
                <ScrollReveal key={s.title} variant="fade-up" delay={140 + i * 70}>
                  <Link href={s.href} className={styles.heroCard} aria-label={s.title}>
                    <div className={styles.heroCardImgWrap}>
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 520px) 90vw, (max-width: 900px) 45vw, 25vw"
                        className={styles.heroCardImg}
                      />
                    </div>
                    <div className={styles.heroCardBody}>
                      <h3 className={styles.heroCardTitle}>{s.title}</h3>
                      <span className={styles.heroCardArrow} aria-hidden="true">
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

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

        {/* ============ SERVICIOS ============ */}
        <section id="servicios" className="section bg-cream">
          <div className="container">
            <ScrollReveal variant="fade-up">
              <div className={styles.centeredHead}>
                <h2 className="section-title">Consultora de Negocios</h2>
                <p className="section-desc">
                  Cuatro áreas que se combinan según lo que tu organización necesita primero. Empezamos por el diagnóstico y desde ahí definimos por dónde conviene intervenir.
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
                <h2 className="section-title">Detrás de Elevare hay un equipo con experiencia de gestión</h2>
                <p className="section-desc">
                  Somos un equipo multidisciplinario de consultores en comportamiento organizacional, finanzas, procesos y liderazgo. Cada intervención combina evidencia, más de veinte años de experiencia dirigiendo equipos y el compromiso de que el cambio quede instalado y se sostenga.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className={styles.ctaSection}>
          <div className={`container ${styles.ctaGrid}`}>
            <ScrollReveal variant="fade-right">
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

            <div className={styles.ctaPhotoCol}>
              <Image
                src="/maria-cutout.png"
                alt="María Gómez, fundadora de Elevare Consulting"
                width={408}
                height={612}
                quality={95}
                className={styles.ctaPhoto}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
