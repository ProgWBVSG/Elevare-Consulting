import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target, Zap,
  Building2, Crown, Trophy, Brain, Scale, Globe,
  CheckCircle, ArrowRight
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogoCarousel from "./components/LogoCarousel";
import ScrollReveal from "./components/ScrollReveal";
import HeroFloatingImages from "./components/HeroFloatingImages";
import styles from "./page.module.css";
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: "Consultoría de Liderazgo y Desarrollo Organizacional para PYMEs | Elevare Consulting",
  description:
    "Diagnosticamos qué frena a tu empresa y te acompañamos hasta el resultado. Consultoría de liderazgo y desarrollo organizacional para PYMEs en Argentina y LATAM.",
  openGraph: {
    title: "Consultoría de Liderazgo y Desarrollo Organizacional | Elevare Consulting",
    description:
      "Diagnosticamos qué frena a tu empresa, diseñamos la estructura que falta y acompañamos la ejecución. Consultoría de liderazgo para PYMEs en Argentina y LATAM.",
    url: "https://elevareconsultingmg.com",
  },
  alternates: {
    canonical: "https://elevareconsultingmg.com",
  },
};

const audiences = [
  {
    Icon: Building2,
    color: "primary",
    title: "Para tu Empresa",
    subtitle: "PYMEs que facturan, pero operan en el desorden",
    pains: [
      "Tu equipo gerencial no decide sin vos y la rotación es alta",
      "Procesos rotos que todos ven, pero nadie arregla",
      "Facturás, pero sin visibilidad financiera para crecer",
    ],
    solution: "Diagnosticamos clima, cultura, procesos y números — y construimos con vos la estructura que falta.",
    benefits: [
      "Sabés qué frena tu empresa, con datos y no supuestos",
      "Roles y procesos claros: cada decisión tiene un dueño",
      "Un equipo gerencial que decide sin depender de vos",
    ],
    href: "/empresas",
    cta: "Ver el programa para empresas",
  },
  {
    Icon: Crown,
    color: "secondary",
    title: "Para tu Liderazgo",
    subtitle: "Líderes que cargan todo sobre sus hombros",
    pains: [
      "Liderás en piloto automático y todo depende de vos",
      "Trabajás el doble porque no hay estructura ni delegación",
      "Enfrentás las decisiones críticas en soledad",
    ],
    solution: "Un espacio estratégico y confidencial para ordenar tu gestión: decisiones, delegación y manejo de equipos.",
    benefits: [
      "Decidís con claridad, no desde la urgencia",
      "Delegás con confianza y tu equipo gana autonomía",
      "Herramientas concretas que aplicás al día siguiente",
    ],
    href: "/mentoria-lideres",
    cta: "Conocer la mentoría",
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



export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.from('site_content').select('section_key, text_value');
  const content = new Map();
  data?.forEach(item => content.set(item.section_key, item.text_value));

  const heroBadge = content.get('hero_badge') || "Consultoría de Liderazgo y Desarrollo Organizacional";
  const heroTitleMain = content.get('hero_title_main') || "Potenciá tu Empresa con";
  const heroTitleSub = content.get('hero_title_sub') || "Management Estratégico";
  const heroSubtitle = content.get('hero_subtitle') || "Diagnosticamos qué está frenando tu organización, diseñamos la estructura que falta y acompañamos la ejecución hasta que los resultados se sostienen solos.";

  const painIntroBadge = content.get('pain_intro_badge') || "¿Te suena familiar?";
  const painIntroTitle = content.get('pain_intro_title') || "El problema no es la falta de esfuerzo. Es la falta de estructura.";
  const painIntroDesc = content.get('pain_intro_desc') || "Trabajamos dos frentes con la misma raíz. Encontrá el que más se parece a tu situación y mirá cómo lo resolvemos.";
  
  const heroImage = content.get('hero_image') || "/hero-home.jpg";

  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(3);
  
  const getText = (key: string, fallback: string) => content.get(key) || fallback;

  return (
    <>
      <Header />

      <main>
        {/* ============ HERO ============ */}
        <section className={styles.hero}>
          <HeroFloatingImages />
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroContent}>
              <ScrollReveal variant="fade-up">
                <div className={styles.heroBadge}>
                  {heroBadge}
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={150}>
                <h1 className={styles.heroTitle}>
                  {heroTitleMain}<br />
                  <span className={styles.highlightText}>{heroTitleSub}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={300}>
                <p className={styles.heroSubtitle}>
                  {heroSubtitle}
                </p>
              </ScrollReveal>
              
              <div className={styles.heroCtas}>
                <Link href="/contacto" className="btn btn-primary btn-lg">
                  Reservar mi sesión gratuita
                </Link>
                <a href="#servicios" className={`btn btn-outline-white ${styles.heroSecondaryBtn}`}>
                  Ver cómo trabajamos ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ LOGO CAROUSEL — CONFIANZA ============ */}
        <LogoCarousel />

        {/* ============ PROBLEMA → SOLUCIÓN POR AUDIENCIA ============ */}
        <section id="servicios" className={`section bg-cream`}>
          <div className="container">
            <div className={styles.painHeader}>
              <ScrollReveal variant="fade-up">
                <div className="section-label">{painIntroBadge}</div>
                <h2 className="section-title">{painIntroTitle}</h2>
                <p className="section-desc">{painIntroDesc}</p>
              </ScrollReveal>
            </div>

            <div className={styles.painPointsGrid}>
              {audiences.map((a, i) => (
                <ScrollReveal key={a.title} variant={i === 0 ? "fade-right" : "fade-left"} delay={100 + i * 150}>
                  <div className={`card ${styles.solutionCard} ${a.color === "secondary" ? styles.solutionCardSecondary : ""}`}>
                    <div className={styles.solutionHeader}>
                      <span className={styles.solutionIcon}><a.Icon size={26} /></span>
                      <div>
                        <h3 className={styles.solutionTitle}>{a.title}</h3>
                        <p className={styles.solutionSubtitle}>{a.subtitle}</p>
                      </div>
                    </div>

                    <div>
                      <span className={styles.blockLabel}>Si esto te suena</span>
                      <ul className={styles.painListSimple}>
                        {a.pains.map((p) => (
                          <li key={p} className={styles.painItemSimple}>
                            <span className={styles.painDot} aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.solutionDivider} aria-hidden="true" />

                    <div>
                      <span className={styles.blockLabel}>Lo que hacemos por vos</span>
                      <p className={styles.solutionDesc}>{a.solution}</p>
                      <ul className={styles.benefitList}>
                        {a.benefits.map((b) => (
                          <li key={b}>
                            <CheckCircle size={15} /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={a.href} className={`btn ${a.color === "secondary" ? "btn-secondary" : "btn-primary"} ${styles.painCta}`}>
                      {a.cta} <ArrowRight size={15} style={{ marginLeft: 4 }} />
                    </Link>
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
                <span className={`section-label ${styles.labelLight}`}>{getText('why_intro_badge', 'Cómo Trabajamos')}</span>
                <h2 className={styles.diffSectionTitle}>
                  {getText('why_intro_title', 'Un método que termina en resultados, no en un informe')}
                </h2>
              </div>
              <p className={styles.diffHeaderDesc}>
                {getText('why_intro_desc', 'Diagnóstico con datos reales, diseño de estructura y acompañamiento en la ejecución. Nos quedamos hasta ver el cambio funcionando en tu operación — y que se sostenga cuando ya no estemos.')}
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
              <Link href="/contacto" className="btn btn-outline-white btn-lg">
                Empezar con un diagnóstico gratuito →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ AUTORIDAD — MARÍA ============ */}
        <section className="section">
          <div className="container">
            <div className={styles.authorityGrid}>
              <ScrollReveal variant="fade-right">
                <div className={styles.authorityImageWrap}>
                  <Image
                    src="/maria-hero.png"
                    alt="María Gómez, fundadora de Elevare Consulting"
                    width={420}
                    height={500}
                    className={styles.authorityImage}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={150}>
                <div>
                  <span className="section-label">Quién te acompaña</span>
                  <h2 className="section-title">María Gómez — la experiencia detrás de Elevare</h2>
                  <p className={styles.authorityText}>
                    Antes de fundar Elevare, María dirigió equipos de más de <strong>470 personas</strong> y coordinó operaciones multinacionales en LATAM. No aprendió liderazgo en un libro: <strong>lo ejerció bajo presión durante más de 20 años.</strong>
                  </p>
                  <ul className={styles.authorityList}>
                    <li><CheckCircle size={16} /> 20+ años liderando equipos y operaciones reales</li>
                    <li><CheckCircle size={16} /> Directora Asociada — Cámara de Comercio de Mujeres de EE.UU. (Miami)</li>
                    <li><CheckCircle size={16} /> Creadora de la metodología de Inteligencia Relacional</li>
                  </ul>
                  <p className={styles.authorityText}>
                    Por eso cada recomendación que recibís no sale de un manual: viene de alguien que ya estuvo en tu silla.
                  </p>
                  <Link href="/sobre-maria" className="btn btn-outline">
                    Conocé su historia completa →
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIOS ============ */}
        <section className="section bg-cream">
          <div className="container">
            <ScrollReveal variant="fade-up">
            <div className="text-center" style={{ marginBottom: "4rem" }}>
              <span className="section-label">Resultados</span>
              <h2 className="section-title">Líderes y empresas que ya pasaron por el proceso</h2>
            </div>
            </ScrollReveal>

            <div className="grid-3">
              {testimonials?.map((t, idx) => (
              <ScrollReveal key={t.id || idx} variant="zoom-in" delay={idx * 150}>
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

            <div className="text-center" style={{ marginTop: "3rem" }}>
              <Link href="/testimonios" className="btn btn-outline">
                Ver más casos de éxito en video →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <ScrollReveal variant="fade-right">
              <div className={styles.ctaContent}>
                <span className={`section-label ${styles.labelLight}`}>{getText('cta_intro_badge', 'Empezá Hoy')}</span>
                <h2 className={styles.ctaTitle}>
                  {getText('cta_title', 'El primer paso son 30 minutos. Y no cuesta nada.')}
                </h2>
                <p className={styles.ctaDesc}>
                  {getText('cta_desc', 'En la sesión exploratoria gratuita escuchamos tu situación y te damos una devolución honesta: qué está pasando en tu organización y por dónde empezar. Sin compromiso y sin presión de venta.')}
                </p>
                <div className={styles.ctaBtns}>
                  <Link href="/contacto" className="btn btn-primary btn-lg">
                    Reservar mi sesión gratuita
                  </Link>
                  <Link href="/testimonios" className="btn btn-outline-white">
                    Ver casos de éxito
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
