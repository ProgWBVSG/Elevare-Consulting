import type { Metadata } from "next";
import Link from "next/link";
import { Microscope, Briefcase, Repeat, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import styles from "./sobre-nosotros.module.css";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Elevare Consulting",
  description:
    "Un equipo multidisciplinario de consultores en comportamiento organizacional, finanzas, procesos y liderazgo. Intervenciones basadas en evidencia, con experiencia de gestión real y foco en que el cambio se sostenga.",
  alternates: { canonical: "https://elevareconsultingmg.com/sobre-nosotros" },
};

const valores = [
  {
    Icon: Microscope,
    title: "Decisiones con evidencia",
    desc: "Medimos el punto de partida y el impacto de cada intervención. Cada decisión responde a datos concretos de tu organización.",
  },
  {
    Icon: Briefcase,
    title: "Experiencia de gestión real",
    desc: "Nuestro equipo dirigió operaciones, finanzas y equipos antes de asesorarlos. Hablamos desde la experiencia de haber estado en esa silla, bajo presión.",
  },
  {
    Icon: Repeat,
    title: "Cambio que se sostiene",
    desc: "Cerramos cuando el nuevo comportamiento quedó instalado en el equipo. Esa es la condición para que el resultado se sostenga en el tiempo.",
  },
];

const trackRecord = [
  { value: "20+", label: "Años de experiencia" },
  { value: "4", label: "Países con presencia" },
];

const sobreNosotrosSchemaLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "Sobre Nosotros — Elevare Consulting",
      description:
        "Equipo multidisciplinario de consultores en comportamiento organizacional, finanzas, procesos y liderazgo.",
      url: "https://elevareconsultingmg.com/sobre-nosotros",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://elevareconsultingmg.com" },
        { "@type": "ListItem", position: 2, name: "Sobre Nosotros", item: "https://elevareconsultingmg.com/sobre-nosotros" },
      ],
    },
  ],
};

export default async function SobreNosotros() {
  const supabase = await createClient();
  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sobreNosotrosSchemaLD) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOrb} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroInner}>
              <h1 className={styles.heroTitle}>Detrás de Elevare hay un equipo con experiencia de gestión</h1>
              <p className={styles.heroSubtitle}>
                Somos consultores en comportamiento organizacional, finanzas, procesos y liderazgo. Cada intervención combina evidencia, experiencia de gestión real y un objetivo claro: que el cambio quede instalado y se sostenga cuando ya no estamos.
              </p>
              <Link href="/contacto" className="btn btn-primary btn-lg">
                Solicitá tu Diagnóstico
              </Link>
            </div>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="section">
          <div className="container">
            <div className={styles.valoresGrid}>
              {valores.map((v, i) => (
                <ScrollReveal key={v.title} variant="fade-up" delay={80 + i * 120}>
                  <div className={styles.valorCard}>
                    <span className={styles.valorIcon}><v.Icon size={26} /></span>
                    <h2 className={styles.valorTitle}>{v.title}</h2>
                    <p className={styles.valorDesc}>{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Track record */}
        <section className={styles.statsSection}>
          <div className={styles.statsOrb} aria-hidden="true" />
          <div className="container">
            <ScrollReveal variant="fade-up">
              <div className={styles.statsGrid}>
                {trackRecord.map((t) => (
                  <div key={t.label} className={styles.statItem}>
                    <strong>{t.value}</strong>
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Casos de éxito */}
        {testimonials && testimonials.length > 0 && (
          <section className="section">
            <div className="container">
              <ScrollReveal variant="fade-up">
                <div className={styles.casosHead}>
                  <h2 className={styles.casosTitle}>Casos de éxito</h2>
                  <p className={styles.casosSub}>Organizaciones y líderes que ya trabajaron con nosotros.</p>
                </div>
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
                          <img src={t.image_url} alt={t.name} className={styles.testiAvatar} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
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
            </div>
          </section>
        )}

        {/* CTA */}
        <section className={styles.cta}>
          <div className="container">
            <ScrollReveal variant="fade-up">
              <div className={styles.ctaInner}>
                <h2 className={styles.ctaTitle}>¿Listo para transformar tu organización?</h2>
                <p className={styles.ctaText}>
                  Empezamos por un diagnóstico. Sin compromiso, con una devolución honesta sobre qué está frenando tu organización y por dónde conviene empezar.
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
