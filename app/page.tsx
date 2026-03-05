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
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Coaching Ontológico Empresarial | 20 Años Transformando Líderes | Elevare",
  description:
    "Desarrollá líderes conscientes y equipos de alto rendimiento con coaching ontológico. Mentoría especializada para mujeres ejecutivas en Argentina y LATAM. Agenda tu sesión exploratoria gratuita.",
  openGraph: {
    title: "Elevare Consulting MG | Coaching Ontológico y Mentoría Ejecutiva en LATAM",
    description:
      "20+ años transformando líderes y PYMEs. Mentoría especializada para mujeres ejecutivas. Agenda tu sesión gratuita.",
    url: "https://elevareconsultingmg.com",
  },
};

const trustBadges = [
  { value: "20+", label: "Años de Experiencia" },
  { value: "4", label: "Países con Alianzas" },
];

const pymesPainPoints = [
  { Icon: Target, title: "Tu equipo gerencial no lidera como esperabas", desc: "Invirtieron en capacitaciones, pero los mandos medios siguen sin tomar decisiones autónomas." },
  { Icon: RefreshCw, title: "Alta rotación y conflictos internos constantes", desc: "El clima laboral es tenso. Personas valiosas renuncian y cada día es apagar un incendio." },
  { Icon: Settings, title: "Procesos ineficientes que nadie soluciona", desc: "Todos lo saben, nadie actúa. Las reuniones no producen resultados concretos." },
  { Icon: TrendingDown, title: "Falta de cultura de alto rendimiento", desc: "Tu empresa sobrevive, pero no prospera. Buscás un equipo que piense como dueños." },
  { Icon: HelpCircle, title: "No sabés cómo implementar coaching interno efectivo", desc: "Sabés que el coaching puede ayudar, pero no tenés claridad sobre cómo hacerlo bien." },
];

const ejecutivasPainPoints = [
  { Icon: Eye, title: "Síndrome del impostor en tu rol de liderazgo", desc: "Lográs resultados, pero seguís sintiendo que no sos suficiente para el puesto." },
  { Icon: Users, title: "Dificultad para delegar y gestionar equipos", desc: "Terminás haciendo todo vos misma porque es más rápido que explicarle a otros." },
  { Icon: Zap, title: "Desgaste por doble carga profesional y personal", desc: "Trabajás el doble que tus pares para probar tu valor. El burnout está cerca." },
  { Icon: Wrench, title: "Falta de herramientas concretas para el día a día", desc: "Los cursos de liderazgo son genéricos. Necesitás soluciones para TU situación específica." },
  { Icon: Compass, title: "Soledad en la toma de decisiones estratégicas", desc: "Tenés responsabilidades enormes sin un espacio seguro donde pensar en voz alta." },
];

const services = [
  {
    Icon: Building2,
    title: "Coaching y Consultoría para Empresas",
    description: "Implementá un sistema profesional de coaching interno junto con la optimización de tus procesos. Desarrollamos líderes efectivos, reducimos conflictos y construimos organizaciones más eficientes y sostenibles.",
    benefits: ["Líderes internos que toman decisiones con autonomía", "Procesos eficientes que no dependen constantemente de vos", "Drástica reducción de la rotación y conflictos de equipo"],
    href: "/empresas",
    cta: "Conocé el programa completo",
    color: "primary",
  },
  {
    Icon: Crown,
    title: "Mentoría Ejecutiva para Mujeres",
    description: "Acompañamiento especializado para mujeres en posiciones de liderazgo. Desarrollá tu estilo de gestión auténtico, superá obstáculos y consolidá tu autoridad sin sacrificar tu bienestar.",
    benefits: ["Superación del síndrome del impostor", "Herramientas concretas para gestión diaria", "Red de apoyo y perspectiva externa calificada"],
    href: "/mentoria-mujeres-ejecutivas",
    cta: "Comenzá tu transformación",
    color: "secondary",
  },
];

const differentiators = [
  {
    Icon: Trophy,
    title: "20+ Años de Experiencia Comprobada",
    desc: "No somos coaches junior. Décadas de resultados reales en gestión empresarial y desarrollo de liderazgo en Argentina y LATAM.",
  },
  {
    Icon: Brain,
    title: "Coaching Ontológico Profundo",
    desc: "Transformación desde el SER, no solo técnicas superficiales. Los cambios que generamos son duraderos, no parches temporales.",
  },
  {
    Icon: Scale,
    title: "Especialización Dual Única",
    desc: "Expertos tanto en gestión empresarial como en desarrollo de mujeres ejecutivas. Entendemos ambos mundos a profundidad.",
  },
  {
    Icon: Globe,
    title: "Red Internacional de Alianzas",
    desc: "Perspectivas y recursos de consultorías en Argentina, Paraguay, Uruguay y Chile. Una visión regional que pocos pueden ofrecer.",
  },
  {
    Icon: Zap,
    title: "Enfoque en Problemas del Día a Día",
    desc: "No solo teoría abstracta. Trabajamos con los desafíos reales que enfrentás hoy, con herramientas aplicables mañana mismo.",
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
    text: "El proceso de coaching ontológico me cambió la perspectiva completa. No solo aprendí técnicas de gestión, transformé cómo veo mi rol como líder y el impacto que quiero tener.",
    result: "Expansión a 3 países en 18 meses",
    type: "executive",
  },
];

const blogPosts = [
  {
    title: "5 Señales de que tu PYME Necesita Coaching Interno Ahora",
    excerpt: "Si tu equipo gerencial no decide de forma autónoma, hay conflictos constantes y la rotación no para, hay señales claras que no podés ignorar.",
    category: "Liderazgo Empresarial",
    date: "Enero 2026",
    href: "/blog/senales-pyme-necesita-coaching-interno",
    readTime: "8 min",
  },
  {
    title: "Coaching Ontológico vs. Coaching Tradicional: ¿Cuál Funciona Mejor?",
    excerpt: "No todos los coaching son iguales. La diferencia entre transformación profunda y un cambio superficial está en el enfoque desde el SER.",
    category: "Coaching Ontológico",
    date: "Febrero 2026",
    href: "/blog/coaching-ontologico-vs-tradicional",
    readTime: "10 min",
  },
  {
    title: "Síndrome del Impostor en Mujeres Ejecutivas: 7 Estrategias Reales",
    excerpt: "El 70% de las mujeres en posiciones de liderazgo lo experimentan. Acá van estrategias concretas —no frases motivacionales— para superarlo.",
    category: "Liderazgo Femenino",
    date: "Febrero 2026",
    href: "/blog/sindrome-impostor-mujeres-ejecutivas",
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
                Coaching Ontológico · 20+ Años de Experiencia · LATAM
              </div>
              <h1 className={styles.heroTitle}>
                Transformá tu <span className={styles.highlightText}>Liderazgo</span><br />
                <em>y el de tu Organización</em>
              </h1>
              <p className={styles.heroSubtitle}>
                Acompañamos a PYMEs y mujeres ejecutivas en Argentina y LATAM a alcanzar su máximo potencial con coaching ontológico profundo — no soluciones superficiales.
              </p>

              {/* Trust badges */}
              <div className={styles.trustBadges}>
                {trustBadges.map((b) => (
                  <div key={b.label} className={styles.trustBadge}>
                    <span className={styles.trustValue}>{b.value}</span>
                    <span className={styles.trustLabel}>{b.label}</span>
                  </div>
                ))}
                {/* Contador animado */}
                <div className={styles.trustBadge}>
                  <CounterBadge
                    target={500}
                    prefix="+"
                    label="Líderes Transformados"
                    duration={1400}
                    valueClassName={styles.trustValue}
                    labelClassName={styles.trustLabel}
                  />
                </div>
              </div>

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
                alt="María Gómez - Coach ontológica y mentora ejecutiva"
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
        </section>

        {/* ============ PAIN POINTS — DOS AUDIENCIAS ============ */}
        <section className={`section bg-cream`}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: "4rem" }}>
              <span className="section-label">¿Te identificás con esto?</span>
              <h2 className="section-title">¿Tu liderazgo o el de tu equipo no está dando los resultados que esperabas?</h2>
              <p className="section-subtitle">
                Trabajamos con dos tipos de desafíos muy diferentes — pero con la misma raíz: la necesidad de un liderazgo más consciente y efectivo.
              </p>
            </div>

            <div className={styles.painPointsGrid}>
              {/* PYMEs */}
              <div className={`card ${styles.painCard}`}>
                <div className={styles.painCardHeader}>
                  <span className={styles.painCardIcon}><Building2 size={22} /></span>
                  <h3 className={styles.painCardTitle}>Para líderes y directivos de PYMEs</h3>
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

              {/* Mujeres Ejecutivas */}
              <div className={`card ${styles.painCard} ${styles.painCardSecondary}`}>
                <div className={styles.painCardHeader}>
                  <span className={styles.painCardIcon}><Crown size={22} /></span>
                  <h3 className={styles.painCardTitle}>Para mujeres ejecutivas y líderes</h3>
                </div>
                <ul className={styles.painList}>
                  {ejecutivasPainPoints.map((p) => (
                    <li key={p.title} className={styles.painItem}>
                      <span className={styles.painEmoji}><p.Icon size={18} /></span>
                      <div>
                        <strong>{p.title}</strong>
                        <p>{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/mentoria-mujeres-ejecutivas" className={`btn ${styles.btnGreen}`} style={{ marginTop: "2rem", width: "100%" }}>
                  Ver mentoría especializada →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SERVICIOS ============ */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: "4rem" }}>
              <span className="section-label">Nuestros Servicios</span>
              <h2 className="section-title">Cómo te ayudamos a alcanzar tu máximo potencial</h2>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={service.title} className={`${styles.serviceCard} ${styles[`serviceCard--${service.color}`]}`}>
                  <div className={styles.serviceImageContainer}>
                    <img
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1542744173-8e7e53415bb0' : index === 1 ? '1573496359142-b8d87734a5a2' : '1552664730-d307ca884978'}?auto=format&fit=crop&q=80&w=600&h=400`}
                      alt={service.title}
                      className={styles.serviceImage}
                    />
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
              ))}
            </div>
          </div>
        </section>

        {/* ============ POR QUÉ ELEVARE ============ */}
        <section className={`section bg-gradient-primary`}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: "4rem" }}>
              <span className={`section-label ${styles.labelLight}`}>Nuestros Diferenciadores</span>
              <h2 className="section-title" style={{ color: "#fff" }}>
                Por qué líderes y empresas eligen Elevare
              </h2>
            </div>

            <div className={`grid-${Math.ceil(differentiators.length / 1)} ${styles.diffGrid}`}>
              {differentiators.map((d) => (
                <div key={d.title} className={styles.diffCard}>
                  <span className={styles.diffIcon}><d.Icon size={24} /></span>
                  <h4 className={styles.diffTitle}>{d.title}</h4>
                  <p className={styles.diffDesc}>{d.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center" style={{ marginTop: "3rem" }}>
              <Link href="/sobre-maria" className="btn btn-outline-white btn-lg">
                Conocé la historia de Elevare →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIOS ============ */}
        <section className="section bg-cream">
          <div className="container">
            <div className="text-center" style={{ marginBottom: "4rem" }}>
              <span className="section-label">Testimonios</span>
              <h2 className="section-title">Lo que dicen quienes ya transformaron su liderazgo</h2>
            </div>

            <div className="grid-3">
              {testimonials.map((t) => (
                <div key={t.name} className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>&ldquo;</div>
                  <p className={styles.testimonialText}>{t.text}</p>
                  <div className={styles.testimonialResult}>
                    <span>★</span> {t.result}
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
              ))}
            </div>

            <div className="text-center" style={{ marginTop: "3rem" }}>
              <Link href="/testimonios" className="btn btn-outline">
                Ver más casos de éxito en video →
              </Link>
            </div>
          </div>
        </section>

        {/* ============ LEAD MAGNET CAPTURE ============ */}
        <section className="section bg-cream">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <span className="section-label" style={{ display: 'inline-block', marginBottom: '1rem' }}>Recurso Gratuito Exclusivo</span>
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                Checklist: 10 señales de que tu empresa necesita coaching interno profesional
              </h2>
              <p style={{ marginBottom: '2rem', color: '#555' }}>
                Realizá este autodiagnóstico rápido para descubrir si los conflictos internos y la ineficiencia están frenando el crecimiento de tu PYME.
              </p>

              <LeadMagnetForm />
              <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '1rem' }}>
                Tu información es confidencial y no será compartida con terceros.
              </p>
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <span className={`section-label ${styles.labelLight}`}>Siguiente Paso</span>
                <h2 className={styles.ctaTitle}>
                  ¿Listo para transformar tu liderazgo o el de tu organización?
                </h2>
                <p className={styles.ctaDesc}>
                  Agendá una sesión exploratoria gratuita de 30 minutos. Sin compromiso. Conversamos sobre tus desafíos específicos y evaluamos juntos si el coaching ontológico es la solución que necesitás.
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
              <div className={styles.ctaVisual}>
                <div className={styles.ctaImageWrapper}>
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=1000"
                    alt="Oficina moderna y profesional"
                    className={styles.ctaImage}
                  />
                  <div className={styles.ctaFloatingCard}>
                    <span className={styles.ctaFloatingIcon}>🎯</span>
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
