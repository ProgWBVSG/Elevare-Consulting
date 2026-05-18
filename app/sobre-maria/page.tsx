import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Brain, Users, Zap, Globe, Trophy, UserCheck } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import styles from "./sobreMaria.module.css";

export const metadata: Metadata = {
    title: "María Gómez | Coach Ejecutiva · Consultora de Liderazgo · 20+ Años",
    description:
        "Conocé a María Gómez: 20+ años liderando equipos de +470 personas, gestión multinacional en LATAM y coaching ontológico ejecutivo. Fundadora de Elevare Consulting. Directora Asociada de la Cámara de Comercio de Mujeres de EE.UU. Especialista en Inteligencia Relacional.",
    openGraph: {
        title: "María Gómez | Coach Ejecutiva & Desarrollo Organizacional",
        description: "20+ años transformando líderes y organizaciones. Fundadora de Elevare Consulting. Especialista en Inteligencia Relacional y coaching ontológico.",
        url: "https://elevareconsultingmg.com/sobre-maria",
    },
    alternates: {
        canonical: "https://elevareconsultingmg.com/sobre-maria",
    },
};

const timeline = [
    { year: "2000+", title: "Inicio de trayectoria en liderazgo", desc: "Comienzo de una carrera sólida en gestión de equipos y operaciones de alto impacto, desarrollando habilidades de liderazgo humano y estratégico que marcarían más de dos décadas de trabajo." },
    { year: "2008", title: "Gestión de equipos a gran escala", desc: "Dirección de equipos de más de 470 personas, coordinando proyectos multinacionales que integraron visión estratégica, liderazgo humano y capacidad de ejecución sostenida." },
    { year: "2013", title: "Expansión multinacional en Latinoamérica", desc: "Gestión de operaciones complejas en diversos países de Latinoamérica, acompañando procesos de crecimiento y transformación organizacional en múltiples contextos culturales." },
    { year: "2018", title: "Especialización en Coaching Ejecutivo", desc: "Profundización en coaching ejecutivo y organizacional, desarrollando la metodología propia de Inteligencia Relacional como herramienta para la toma de decisiones clave y el desarrollo de líderes." },
    { year: "2022", title: "Directora Asociada – Cámara de Comercio de Mujeres de EE.UU.", desc: "Nombramiento como Directora Asociada del Miami Chapter de la Cámara de Comercio de Mujeres de EE.UU., consolidando presencia internacional y redes de alto nivel." },
    { year: "2024", title: "Fundación de Elevare Consulting", desc: "Consolidación de más de 20 años de experiencia en una estructura formal de consultoría, integrando coaching ejecutivo, inteligencia relacional y optimización de procesos bajo una propuesta diferencial." },
];

const values = [
    { Icon: Brain, title: "Inteligencia Relacional", desc: "Mi metodología trabaja sobre las relaciones humanas que sostienen cada organización. Cuando mejorás cómo las personas se conectan, decidís y colaboran, los resultados llegan solos." },
    { Icon: Users, title: "Personas y sistemas, en equilibrio", desc: "Ordeno, alineo y potencio equipos entendiendo que el resultado no está solo en las personas ni solo en los procesos: está en la intersección de ambos." },
    { Icon: Zap, title: "Acompañamiento en la toma de decisiones", desc: "Más de 20 años tomando y facilitando decisiones clave me dieron la capacidad de acompañar a líderes en momentos críticos con precisión, foco y escucha genuina." },
    { Icon: Globe, title: "Mirada estratégica + ejecución real", desc: "No separo la visión de la acción. He coordinado proyectos multinacionales integrando pensamiento estratégico con la capacidad de hacer. Eso es lo que ofrezco a cada cliente." },
];

const certifications = [
    "Coach Ejecutiva & Organizacional certificada",
    "Especialista en Inteligencia Relacional y Comunicación Efectiva",
    "Facilitadora de espacios de trabajo colaborativo y liderazgo consciente",
    "Directora Asociada – Cámara de Comercio de Mujeres de EE.UU. (Miami Chapter)",
    "Mentora para emprendedores y profesionales en expansión internacional",
    "Fundadora de Elevare Consulting – Consultoría de Liderazgo y Desarrollo Organizacional",
];

const sobreMariaSchemaLD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            name: "María Gómez",
            jobTitle: "Coach Ejecutiva & Consultora en Desarrollo de Líderes",
            description: "Fundadora de Elevare Consulting. 20+ años liderando equipos de +470 personas y facilitando procesos de transformación organizacional en Argentina y LATAM. Directora Asociada de la Cámara de Comercio de Mujeres de EE.UU. (Miami Chapter).",
            url: "https://elevareconsultingmg.com/sobre-maria",
            image: "https://elevareconsultingmg.com/maria-hero.png",
            worksFor: {
                "@type": "ProfessionalService",
                name: "Elevare Consulting MG",
                url: "https://elevareconsultingmg.com",
            },
            alumniOf: [],
            knowsAbout: [
                "Coaching ontológico",
                "Inteligencia relacional",
                "Desarrollo organizacional",
                "Liderazgo ejecutivo",
                "Gestión de equipos multinacionales",
            ],
            memberOf: {
                "@type": "Organization",
                name: "Cámara de Comercio de Mujeres de EE.UU. (Miami Chapter)",
                roleName: "Directora Asociada",
            },
            sameAs: [
                "https://www.linkedin.com/in/elevare-consulting-729079200?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                "https://www.instagram.com/elevareconsultingmg",
            ],
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://elevareconsultingmg.com" },
                { "@type": "ListItem", position: 2, name: "Sobre María", item: "https://elevareconsultingmg.com/sobre-maria" },
            ],
        },
    ],
};

export default function SobreMaria() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sobreMariaSchemaLD) }} />
            <Header />
            <main>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <nav className={styles.breadcrumb}>
                                    <Link href="/">Inicio</Link> / <span>Sobre María</span>
                                </nav>
                                <span className={`section-label ${styles.labelGreen}`}>Fundadora de Elevare Consulting</span>
                                <h1 className={styles.heroTitle}>María Gómez</h1>
                                <p className={styles.heroTagline}>Consultora de Negocios · Desarrollo de líderes · Coach Ejecutiva</p>
                                <div className={styles.heroBadges}>
                                    <span className={styles.heroBadge}><Trophy size={14} /> 20+ años liderando equipos</span>
                                    <span className={styles.heroBadge}><Users size={14} /> +470 personas dirigidas</span>
                                    <span className={styles.heroBadge}><Globe size={14} /> Presencia internacional</span>
                                </div>
                                <blockquote className={styles.heroQuote}>
                                    <p>&ldquo;Para que una organización sea exitosa, no alcanza con habilidades técnicas: necesita líderes capaces de desarrollar equipos altamente comprometidos.&rdquo;</p>
                                    <cite>— María Gómez</cite>
                                </blockquote>
                                <Link href="/contacto" className="btn btn-primary btn-lg">
                                    Agendar sesión exploratoria gratuita
                                </Link>
                            </div>
                            <div className={styles.heroImageWrapper}>
                                <div className={styles.heroImagePlaceholder}>
                                    <Image
                                        src="/maria-hero.png"
                                        alt="María Gómez - Hero"
                                        width={400}
                                        height={480}
                                        priority
                                    />
                                </div>
                                <div className={styles.statsFloat}>
                                    <div className={styles.statItem}><strong>20+</strong><span>Años</span></div>
                                    <div className={styles.statItem}><strong>470+</strong><span>Personas</span></div>
                                    <div className={styles.statItem}><strong>LATAM</strong><span>Alcance</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Historia */}
                <section className="section">
                    <div className="container" style={{ maxWidth: "1000px" }}>
                        <ScrollReveal variant="fade-up">
                        <div className="text-center" style={{ marginBottom: "3rem" }}>
                            <span className="section-label">Mi Historia</span>
                            <h2 className="section-title">Más de 20 años construyendo líderes que transforman organizaciones</h2>
                        </div>
                        </ScrollReveal>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                            <div className={styles.storyText}>
                                <p>
                                    <strong>No nací consultora, me forjé en la línea de fuego corporativa.</strong> A lo largo de mi carrera he dirigido <strong>equipos de más de 470 personas</strong> y coordinado proyectos multinacionales en LATAM, donde aprendí a integrar visión estratégica con ejecución implacable.
                                </p>
                                <p>
                                    Esa experiencia me enseñó una verdad innegociable: <strong>los resultados no los dan los procesos, los dan los líderes.</strong> Si el management falla, cualquier sistema colapsa.
                                </p>
                                <p>
                                    Por eso creé Elevare Consulting. Mi enfoque combina la <strong>Inteligencia Relacional</strong> con la optimización operativa dura. Ordeno, alineo y acompaño a CEOs y dueños de empresas en la toma de decisiones críticas para lograr <strong>transformaciones reales y rentables</strong>.
                                </p>
                                <p>
                                    Además, como <strong>Directora Asociada de la Cámara de Comercio de Mujeres de EE.UU. (Miami Chapter)</strong>, mantengo una visión global para ayudar a tu organización a escalar con bases sólidas.
                                </p>
                            </div>
                            <div>
                                <Image
                                    src="/maria-sobre-mi.jpeg"
                                    alt="María Gómez - Elevare Consulting"
                                    width={800}
                                    height={600}
                                    style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className={styles.timelineSection}>
                    <div className={styles.timelineSectionInner}>
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className={`section-label ${styles.labelOnDark}`}>Trayectoria</span>
                            <h2 className="section-title" style={{ color: "#fff" }}>20+ años de camino recorrido</h2>
                        </div>
                        <div className={styles.timeline}>
                            {timeline.map((item, i) => (
                                <ScrollReveal key={item.year} variant={i % 2 === 0 ? "fade-right" : "fade-left"} delay={i * 100}>
                                <div className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                                    <div className={styles.timelineYear}>{item.year}</div>
                                    <div className={styles.timelineCard}>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className={styles.timelineDecor}>
                                        <span className={styles.timelineDecorYear}>{item.year}</span>
                                        <span className={styles.timelineDecorLine} />
                                    </div>
                                </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Values */}
                <section className="section">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Filosofía de Trabajo</span>
                            <h2 className="section-title">Los principios que guían cada proceso de acompañamiento</h2>
                        </div>
                        <div className="grid-2">
                            {values.map((v, i) => (
                                <ScrollReveal key={v.title} variant="zoom-in" delay={i * 120}>
                                <div className={`card ${styles.valueCard}`}>
                                    <div className={styles.valueIcon}><v.Icon size={24} /></div>
                                    <div>
                                        <h4 className={styles.valueTitle}>{v.title}</h4>
                                        <p className={styles.valueDesc}>{v.desc}</p>
                                    </div>
                                </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="divider-ornament" aria-hidden="true"><span></span></div>

                {/* Certifications */}
                <section className="section bg-cream">
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <div className="text-center" style={{ marginBottom: "3rem" }}>
                            <span className="section-label">Credenciales y Roles</span>
                            <h2 className="section-title">Una trayectoria que habla por sí sola</h2>
                        </div>
                        <div className={styles.certList}>
                            {certifications.map((cert) => (
                                <div key={cert} className={styles.certItem}>
                                    <span className={styles.certIcon}>✓</span>
                                    <span>{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.bottomCta}>
                    <div className="container">
                        <h2>¿Querés conocer más sobre cómo trabajo?</h2>
                        <p>La mejor forma de entender el proceso es conversando directamente. Agendá una sesión exploratoria gratuita de 30 minutos.</p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/contacto" className="btn btn-primary btn-lg" style={{ marginRight: '1rem' }}>Escribile a María</Link>
                            <Link href="/testimonios" className="btn btn-outline-white">Ver resultados de clientes</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
