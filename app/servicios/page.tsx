import type { Metadata } from "next";
import Link from "next/link";
import {
  Coins, Building2, ShoppingBag, Cpu,
  CheckCircle, ArrowRight, Crown
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import styles from "./servicios.module.css";

export const metadata: Metadata = {
  title: "Servicios de Consultoría Organizacional | Elevare Consulting",
  description:
    "Desarrollo organizacional, academia de retail, estructuración de financiamiento y tecnología. Cuatro áreas integradas en una consultora de negocios.",
  alternates: { canonical: "https://elevareconsultingmg.com/servicios" },
};

const services = [
  {
    Icon: Building2,
    num: "01",
    title: "Desarrollo Organizacional",
    oneLiner: "La cultura sostiene lo que la estrategia promete.",
    desc: "Alineamos cultura, estructura y procesos para que la organización rinda hoy y evolucione con lo que viene. Trabajamos sobre el comportamiento que sostiene el resultado.",
    includes: ["Diagnóstico de cultura y clima", "Alineación de estructura y estrategia", "Gestión del cambio"],
  },
  {
    Icon: ShoppingBag,
    num: "02",
    title: "Academia de Retail",
    oneLiner: "El retail se gana en el detalle operativo, todos los días.",
    desc: "Formación y estándares de gestión diseñados para la realidad del punto de venta: equipos preparados, indicadores a la vista y una experiencia de cliente que se repite y escala.",
    includes: ["Estándares operativos de tienda", "Formación de líderes de piso", "Indicadores de venta y servicio"],
  },
  {
    Icon: Coins,
    num: "03",
    title: "Estructuración de Financiamiento",
    oneLiner: "El crecimiento se sostiene sobre números ordenados.",
    desc: "Ordenamos tus números, tu estructura de capital y tu proyección para que cada decisión de inversión y escalamiento se tome con información concreta.",
    includes: ["Diagnóstico financiero y de flujo de caja", "Estructura de capital y fuentes de financiamiento", "Proyección y tablero de indicadores"],
  },
  {
    Icon: Cpu,
    num: "04",
    title: "Tecnología",
    oneLiner: "La tecnología ordena la operación y acelera la decisión.",
    desc: "Incorporamos herramientas y sistemas que sostienen el día a día: información confiable, procesos digitalizados y datos disponibles en el momento de decidir.",
    includes: ["Relevamiento de sistemas y datos", "Digitalización de procesos clave", "Tableros de gestión e indicadores"],
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
                Consultora de Negocios
              </h1>
              <p className={styles.heroSubtitle}>
                Cuatro áreas que se combinan según lo que tu organización necesita primero. Empezamos por el diagnóstico y desde ahí definimos por dónde conviene intervenir.
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
                <h2 className={styles.umbrellaTitle}>Todo se integra en una Consultora de Negocios</h2>
                <p className={styles.umbrellaText}>
                  Las cuatro áreas se articulan en un mismo marco de trabajo: diagnosticamos por dónde empezar y combinamos las intervenciones según lo que tu organización necesita primero. El foco está puesto en instalar capacidad que quede en tu equipo.
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
