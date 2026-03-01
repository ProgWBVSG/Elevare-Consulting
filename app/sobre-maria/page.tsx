import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "./sobreMaria.module.css";

export const metadata: Metadata = {
    title: "Sobre María Gómez | Coaching Ontológico 20+ Años | Elevare Consulting MG",
    description:
        "Conocé la trayectoria de María Gómez: 20+ años en coaching ontológico y desarrollo de liderazgo empresarial. Presencia en Argentina, Paraguay, Uruguay y Chile. Metodología y filosofía de trabajo.",
    openGraph: {
        title: "María Gómez | Fundadora Elevare Consulting MG",
        url: "https://elevareconsultingmg.com/sobre-maria",
    },
};

const timeline = [
    { year: "2004", title: "Inicio de la trayectoria en coaching", desc: "Primeras certificaciones en coaching ejecutivo y comienzo del trabajo con líderes empresariales en el ámbito corporativo de Argentina." },
    { year: "2008", title: "Especialización en Coaching Ontológico", desc: "Profundización en la metodología ontológica como herramienta de transformación profunda. Diferenciación del trabajo técnico al trabajo desde el SER del líder." },
    { year: "2012", title: "Foco en mujeres ejecutivas", desc: "Identificación de la necesidad específica de acompañamiento para mujeres en posiciones de liderazgo. Desarrollo de metodología integrada técnico-emocional." },
    { year: "2016", title: "Expansión regional y alianzas LATAM", desc: "Construcción de la red de alianzas con consultorías en Paraguay, Uruguay y Chile. Perspectiva regional para clientes con operaciones en múltiples países." },
    { year: "2020", title: "Pandemia: adaptación al coaching virtual", desc: "Transición exitosa al formato virtual sin pérdida de profundidad en el proceso. Expansión de la capacidad de atención a clientes de toda la región." },
    { year: "2024", title: "Fundación de Elevare Consulting MG", desc: "Consolidación de 20 años de experiencia en una estructura formal de consultoría, integrando todos los servicios bajo una propuesta de valor clara y diferenciada." },
];

const values = [
    { icon: "🧠", title: "Transformación desde el SER", desc: "El coaching ontológico trabaja en la raíz de los comportamientos — las creencias, el lenguaje y la emocionalidad que los generan. Sin esto, los cambios son superficiales." },
    { icon: "🤝", title: "Acompañamiento, no imposición", desc: "No llegamos con respuestas prediseñadas. Trabajamos desde las preguntas, la escucha y la co-creación. La solución está siempre en el cliente, nosotros ayudamos a encontrarla." },
    { icon: "⚡", title: "Herramientas concretas para el día a día", desc: "La transformación debe verse en el lunes siguiente, no solo en los retiros de liderazgo. Combinamos profundidad ontológica con aplicabilidad inmediata." },
    { icon: "🌎", title: "Perspectiva regional e inter-cultural", desc: "La red de alianzas en 4 países nos permite aportar perspectivas culturales diferentes y conectar a clientes con recursos y redes que trascienden sus mercados locales." },
];

const certifications = [
    "Certificación en Coaching Ontológico Profesional",
    "Formación en Coaching Ejecutivo y Organizacional",
    "Especialización en Liderazgo y Management Empresarial",
    "Formación en Gestión del Cambio Organizacional",
    "Miembro de la red de Coaching Ontológico Profesional LATAM",
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
                                <span className={`section-label ${styles.labelGreen}`}>Fundadora de Elevare Consulting MG</span>
                                <h1 className={styles.heroTitle}>María Gómez</h1>
                                <p className={styles.heroTagline}>Coach Ontológica · Consultora de Liderazgo · Mentora de Mujeres Ejecutivas</p>
                                <div className={styles.heroBadges}>
                                    <span className={styles.heroBadge}>🏆 20+ años de experiencia</span>
                                    <span className={styles.heroBadge}>🌎 4 países con alianzas</span>
                                    <span className={styles.heroBadge}>👩‍💼 Especialista en mujeres líderes</span>
                                </div>
                                <blockquote className={styles.heroQuote}>
                                    <p>"El liderazgo efectivo no empieza en las técnicas de gestión. Empieza en quién sos como persona y líder. Todo lo demás viene después."</p>
                                    <cite>— María Gómez</cite>
                                </blockquote>
                                <Link href="/contacto" className="btn btn-primary btn-lg">
                                    Agendar sesión exploratoria gratuita
                                </Link>
                            </div>
                            <div className={styles.heroImageWrapper}>
                                <div className={styles.heroImagePlaceholder}>
                                    <span className={styles.heroInitials}>MG</span>
                                    <p className={styles.heroImageNote}>Foto profesional de María</p>
                                </div>
                                <div className={styles.statsFloat}>
                                    <div className={styles.statItem}><strong>20+</strong><span>Años</span></div>
                                    <div className={styles.statItem}><strong>4</strong><span>Países</span></div>
                                    <div className={styles.statItem}><strong>★★★★★</strong><span>Clientes</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Historia */}
                <section className="section">
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <div className="text-center" style={{ marginBottom: "3rem" }}>
                            <span className="section-label">Mi Historia</span>
                            <h2 className="section-title">Dos décadas aprendiendo lo que realmente transforma líderes</h2>
                        </div>
                        <div className={styles.storyText}>
                            <p>
                                Empecé mi carrera creyendo que el liderazgo era principalmente una cuestión de <strong>habilidades técnicas y metodologías</strong>. Que si un líder aprendía las herramientas correctas, los resultados seguirían naturalmente.
                            </p>
                            <p>
                                Veinte años después, tengo una certeza diferente: <strong>el liderazgo es, antes que nada, una cuestión del SER</strong>. Las creencias que un líder tiene sobre sí mismo, sobre su equipo y sobre lo que es posible son los determinantes reales de sus resultados.
                            </p>
                            <p>
                                El coaching ontológico me dio el marco para trabajar en esa profundidad. No en el comportamiento observable, sino en la estructura de observación que lo genera. Eso es lo que hace que los cambios sean duraderos y no meros parches temporales.
                            </p>
                            <p>
                                A lo largo de los años, fui construyendo dos especializaciones que, a primera vista, parecen separadas pero están profundamente conectadas: el <strong>desarrollo de sistemas de coaching en organizaciones</strong> y el <strong>acompañamiento a mujeres en posiciones ejecutivas</strong>. En ambos casos, la transformación profunda del liderazgo es el elemento central.
                            </p>
                            <p>
                                Fundé Elevare Consulting MG para integrar 20 años de experiencia en una propuesta clara: acompañar a líderes y organizaciones a alcanzar su máximo potencial, con profundidad ontológica y enfoque práctico.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="section bg-cream">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Trayectoria</span>
                            <h2 className="section-title">20+ años de camino recorrido</h2>
                        </div>
                        <div className={styles.timeline}>
                            {timeline.map((item, i) => (
                                <div key={item.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                                    <div className={styles.timelineYear}>{item.year}</div>
                                    <div className={styles.timelineCard}>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
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
                                    <span className={styles.valueIcon}>{v.icon}</span>
                                    <div>
                                        <h4 className={styles.valueTitle}>{v.title}</h4>
                                        <p className={styles.valueDesc}>{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="section bg-cream">
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <div className="text-center" style={{ marginBottom: "3rem" }}>
                            <span className="section-label">Formación y Credenciales</span>
                            <h2 className="section-title">Experiencia respaldada por formación continua</h2>
                        </div>
                        <div className={styles.certList}>
                            {certifications.map((cert) => (
                                <div key={cert} className={styles.certItem}>
                                    <span className={styles.certIcon}>✓</span>
                                    <span>{cert}</span>
                                </div>
                            ))}
                        </div>
                        <p className={styles.certNote}>
                            * Las certificaciones específicas e instituciones se actualizarán con la información real de María.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.bottomCta}>
                    <div className="container">
                        <h2>¿Querés conocer más sobre cómo trabajo?</h2>
                        <p>La mejor forma de entender el proceso es conversando directamente. Agendá una sesión exploratoria gratuita de 30 minutos.</p>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                            <Link href="/contacto" className="btn btn-primary btn-lg">Agendar sesión exploratoria</Link>
                            <Link href="/casos-de-exito" className="btn btn-outline-white">Ver resultados de clientes</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
