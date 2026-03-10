import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Users, Zap, Globe, Trophy, UserCheck } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "./sobreMaria.module.css";

export const metadata: Metadata = {
    title: "Sobre María Gómez | Coach Ejecutiva & Consultora de Liderazgo | Elevare Consulting",
    description:
        "Conocé la trayectoria de María Gómez: 20+ años liderando equipos de más de 470 personas, gestión multinacional y coaching ejecutivo. Fundadora de Elevare Consulting y Directora Asociada de la Cámara de Comercio de Mujeres de EE.UU.",
    openGraph: {
        title: "María Gómez | Fundadora Elevare Consulting",
        url: "https://elevareconsultingmg.com/sobre-maria",
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

export default function SobreMaria() {
    return (
        <>
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
                                <p className={styles.heroTagline}>Coach Ejecutiva & Organizacional · Consultora en Desarrollo de Líderes · Especialista en Inteligencia Relacional</p>
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
                                    <img
                                        src="/maria-hero.png"
                                        alt="María Gómez - Hero"
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
                        <div className="text-center" style={{ marginBottom: "3rem" }}>
                            <span className="section-label">Mi Historia</span>
                            <h2 className="section-title">Más de 20 años construyendo líderes que transforman organizaciones</h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                            <div className={styles.storyText}>
                                <p>
                                    A lo largo de mi carrera he tenido el privilegio de <strong>dirigir equipos de más de 470 personas</strong>, coordinando proyectos multinacionales que demandaron integrar visión estratégica, liderazgo humano y capacidad de ejecución en simultáneo.
                                </p>
                                <p>
                                    Ese recorrido me llevó a gestionar operaciones complejas y acompañar procesos de crecimiento y transformación organizacional en <strong>diversos países de Latinoamérica</strong>. Aprendí que los resultados sostenibles no nacen de los procesos solos: nacen de los líderes que los impulsan.
                                </p>
                                <p>
                                    Mi valor diferencial está en la combinación de tres elementos que rara vez conviven: <strong>Inteligencia Relacional</strong>, optimización de procesos y acompañamiento genuino en la toma de decisiones clave. Trabajo sobre las personas y los sistemas — ordeno, alineo y potencio para lograr transformaciones reales.
                                </p>
                                <p>
                                    Hoy, desde Elevare Consulting y como <strong>Directora Asociada de la Cámara de Comercio de Mujeres de EE.UU. (Miami Chapter)</strong>, acompaño a líderes y organizaciones a alcanzar su máximo potencial con un enfoque profundamente humano y orientado a resultados.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="/assets/fotos/historia_maria.jpeg"
                                    alt="María Gómez en su oficina"
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
                                <div key={item.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
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
                            {values.map((v) => (
                                <div key={v.title} className={`card ${styles.valueCard}`}>
                                    <div className={styles.valueIcon}><v.Icon size={24} /></div>
                                    <div>
                                        <h4 className={styles.valueTitle}>{v.title}</h4>
                                        <p className={styles.valueDesc}>{v.desc}</p>
                                    </div>
                                </div>
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
