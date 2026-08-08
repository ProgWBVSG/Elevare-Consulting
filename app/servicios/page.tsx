import type { Metadata } from "next";
import Link from "next/link";
import {
  Coins, Building2, ShoppingBag, Compass, Workflow, Network,
  CheckCircle, ArrowRight, Crown
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import styles from "./servicios.module.css";

export const metadata: Metadata = {
  title: "Servicios de Consultoría Organizacional | Elevare Consulting",
  description:
    "Estructura de financiamiento, desarrollo organizacional, academia de retail, desarrollo de liderazgo, gestión de procesos y diseño organizacional. Seis capacidades integradas en nuestro Coaching Ejecutivo.",
  alternates: { canonical: "https://elevareconsultingmg.com/servicios" },
};

const services = [
  {
    Icon: Coins,
    num: "01",
    title: "Estructura de Financiamiento",
    oneLiner: "El crecimiento no se financia con intuición.",
    desc: "Ordenamos tus números, tu estructura de capital y tu proyección para que cada decisión de inversión y escalamiento se tome con información, no con corazonadas.",
    includes: ["Diagnóstico financiero y de flujo de caja", "Estructura de capital y fuentes de financiamiento", "Proyección y tablero de indicadores"],
  },
  {
    Icon: Building2,
    num: "02",
    title: "Desarrollo Organizacional",
    oneLiner: "La cultura decide lo que la estrategia promete.",
    desc: "Alineamos cultura, estructura y procesos para que la organización rinda hoy y evolucione para lo que viene. Trabajamos el comportamiento que sostiene, o frena, el resultado.",
    includes: ["Diagnóstico de cultura y clima", "Alineación de estructura y estrategia", "Gestión del cambio"],
  },
  {
    Icon: ShoppingBag,
    num: "03",
    title: "Academia de Retail",
    oneLiner: "El retail se gana en el detalle, todos los días.",
    desc: "Formación y estándares de gestión diseñados para la realidad del punto de venta: equipos, indicadores y experiencia de cliente que se pueden repetir y escalar.",
    includes: ["Estándares operativos de tienda", "Formación de líderes de piso", "Indicadores de venta y servicio"],
  },
  {
    Icon: Compass,
    num: "04",
    title: "Desarrollo de Liderazgo",
    oneLiner: "Esto no es un curso. Es reingeniería de cómo tu gente decide.",
    desc: "Formamos líderes que habilitan equipos autónomos, con criterio propio y accountability real. El foco no es motivar, es cambiar cómo se decide y se delega.",
    includes: ["Diagnóstico de estilo de liderazgo", "Toma de decisiones y delegación", "Gestión de equipos y conflictos"],
  },
  {
    Icon: Workflow,
    num: "05",
    title: "Gestión de Procesos",
    oneLiner: "Cuando el proceso es claro, el resultado deja de depender de la suerte.",
    desc: "Diseñamos y estandarizamos procesos para que cada decisión tenga un dueño y cada resultado, una causa que se puede repetir.",
    includes: ["Mapeo de procesos reales", "Estandarización y roles claros", "Seguimiento y mejora continua"],
  },
  {
    Icon: Network,
    num: "06",
    title: "Diseño Organizacional",
    oneLiner: "La estructura sigue al propósito, no al organigrama heredado.",
    desc: "Rediseñamos roles, responsabilidades y estructura para que la organización sostenga su performance a medida que crece.",
    includes: ["Rediseño de roles y responsabilidades", "Modelo de gobierno y decisiones", "Escalabilidad de la estructura"],
  },
];

const serviciosSchemaLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Servicios de Elevare Consulting",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Service", name: s.title, description: s.desc },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://elevareconsultingmg.com" },
        { "@type": "ListItem", position: 2, name: "Servicios", item: "https://elevareconsultingmg.com/servicios" },
      ],
    },
  ],
};

export default function Servicios() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosSchemaLD) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOrb} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroInner}>
              <h1 className={styles.heroTitle}>
                Un sistema integral de consultoría, no servicios sueltos
              </h1>
              <p className={styles.heroSubtitle}>
                Seis capacidades que se combinan según lo que tu organización necesita primero. Todas se integran en nuestro Coaching Ejecutivo, el marco desde el cual definimos por dónde intervenir.
              </p>
              <Link href="/contacto" className="btn btn-primary btn-lg">
                Solicitá tu Diagnóstico
              </Link>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.grid}>
              {services.map((s, i) => (
                <ScrollReveal key={s.title} variant="fade-up" delay={80 + (i % 2) * 100}>
                  <div className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardIcon}><s.Icon size={26} /></span>
                      <span className={styles.cardNum}>{s.num}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{s.title}</h2>
                    <p className={styles.cardOneLiner}>{s.oneLiner}</p>
                    <p className={styles.cardDesc}>{s.desc}</p>
                    <ul className={styles.includes}>
                      {s.includes.map((it) => (
                        <li key={it}><CheckCircle size={15} /> {it}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Ejecutivo — paraguas */}
        <section className={styles.umbrella}>
          <div className={styles.umbrellaOrb} aria-hidden="true" />
          <div className="container">
            <ScrollReveal variant="fade-up">
              <div className={styles.umbrellaInner}>
                <span className={styles.umbrellaIcon}><Crown size={30} /></span>
                <h2 className={styles.umbrellaTitle}>Todo se integra en el Coaching Ejecutivo</h2>
                <p className={styles.umbrellaText}>
                  Los seis servicios no funcionan como piezas aisladas. Se articulan en un Coaching Ejecutivo: el marco desde el cual diagnosticamos por dónde empezar y combinamos las intervenciones según lo que tu organización necesita primero. No vendemos horas, instalamos capacidad.
                </p>
                <Link href="/contacto" className="btn btn-primary btn-lg">
                  Solicitá tu Diagnóstico <ArrowRight size={16} style={{ marginLeft: 6 }} />
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
