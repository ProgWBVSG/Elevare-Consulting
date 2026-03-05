import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Users, Zap, Puzzle, Battery, Crown, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "../service.module.css";

export const metadata: Metadata = {
    title: "Mentoría Ejecutiva para Mujeres Líderes | Elevare Consulting MG",
    description:
        "Mentoría especializada para mujeres ejecutivas y líderes. Superá el síndrome del impostor, consolidá tu autoridad y desarrollá un estilo de gestión auténtico. 20+ años de experiencia. Sesión exploratoria gratuita.",
    openGraph: {
        title: "Mentoría Ejecutiva para Mujeres | Elevare Consulting MG",
        url: "https://elevareconsultingmg.com/mentoria-mujeres-ejecutivas",
    },
};

const painPoints = [
    { Icon: Eye, text: "Sentís que no merecés el puesto aunque tengas los resultados" },
    { Icon: Users, text: "Tu equipo no te toma en serio o te costó años ganarte su respeto" },
    { Icon: Zap, text: "Trabajás el doble que tus pares masculinos para probar tu valor" },
    { Icon: Puzzle, text: "No sabés cómo tener conversaciones difíciles sin que te consideren 'agresiva'" },
    { Icon: Battery, text: "Llegás agotada a casa después de cargarlo todo: trabajo y hogar" },
];

const process = [
    { step: "01", title: "Session de Diagnóstico Inicial", desc: "Entendemos tu situación actual, desafíos específicos, contexto organizacional y lo que querés lograr. Mapeamos tus fortalezas reales y los bloqueos que están frenando tu desarrollo." },
    { step: "02", title: "Plan de Mentoría Personalizado", desc: "Diseñamos tu ruta de desarrollo a medida. No hay programas genéricos: trabajamos desde TU contexto, industria, organización y objetivos profesionales específicos." },
    { step: "03", title: "Sesiones de Acompañamiento", desc: "Encuentros de trabajo profundo donde combinamos coaching ontológico (desde el SER) con herramientas concretas de gestión. Abordamos tanto los aspectos técnicos como los emocionales del liderazgo." },
    { step: "04", title: "Integración y Sostenibilidad", desc: "Nos aseguramos de que los cambios sean duraderos. Desarrollamos tu autonomía como líder para que no dependas del proceso de mentoría para seguir creciendo." },
];

const benefits = [
    { title: "Liderazgo desde tu autenticidad", desc: "No necesitás imitar el estilo de otro para liderar bien. Desarrollamos TU manera de liderar — efectiva, genuina, y que te dé energía en lugar de quitártela." },
    { title: "Superación del síndrome del impostor", desc: "Dejás de cuestionar tu lugar en la mesa y empezás a ocupar el espacio que merecés, con la solidez interna para sostenerlo bajo presión." },
    { title: "Herramientas concretas para el día a día", desc: "Comunicación asertiva, delegación efectiva, gestión de conflictos, toma de decisiones bajo incertidumbre — habilidades que aplicás el día siguiente de la sesión." },
    { title: "Red y perspectiva externa calificada", desc: "Tenés un espacio seguro donde procesar decisiones difíciles, pensar en voz alta y recibir perspectiva sin el filtro político de tu organización." },
];

const faqs = [
    { q: "¿Es este programa solo para mujeres en posiciones muy altas?", a: "No. Trabajamos con mujeres en transición a un primer rol de liderazgo, mandos medias consolidadas, ejecutivas C-level y emprendedoras. Lo que importa es que querés desarrollarte como líder." },
    { q: "¿Cuánto tiempo requiere el proceso?", a: "Los programas más cortos son de 3 meses (para objetivos específicos). Los programas de transformación más profunda son de 6-12 meses. Siempre empezamos con una sesión exploratoria gratuita donde evaluamos qué propuesta tiene más sentido para tu situación." },
    { q: "¿Puede hacerse de forma virtual?", a: "Sí. Trabajamos tanto de forma presencial (en Argentina) como virtual con mujeres de toda LATAM. El proceso online es igualmente efectivo si hay compromiso real de las dos partes." },
    { q: "¿Qué hace diferente esta mentoría de un curso de liderazgo?", a: "Un curso te da contenido genérico. La mentoría trabaja TU situación específica, TUS desafíos reales, TUS bloqueos concretos. La diferencia es como ver un documental de cocina versus tener una chef enseñándote en tu propia cocina." },
    { q: "¿Mi empresa puede financiar el proceso?", a: "Sí. Muchas empresas financian procesos de desarrollo para líderes clave. Podemos ayudarte a armar la propuesta interna para presentarle a tu organización." },
];

export default function MentoriaMujeres() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className={styles.serviceHero} data-color="secondary">
                    <div className="container">
                        <div className={styles.heroInner}>
                            <div className={styles.heroCopy}>
                                <nav className={styles.breadcrumb} aria-label="breadcrumb">
                                    <Link href="/">Inicio</Link> / <Link href="/servicios">Servicios</Link> / <span>Mentoría para Mujeres</span>
                                </nav>
                                <span className={`section-label ${styles.labelWhite}`}>Para Mujeres Ejecutivas y Líderes</span>
                                <h1 className={styles.heroTitle}>Mentoría que Transforma tu Liderazgo desde Adentro</h1>
                                <p className={styles.heroDesc}>
                                    Acompañamiento especializado para mujeres que quieren liderar con autenticidad, superar obstáculos reales y consolidar su lugar en la mesa — sin sacrificar su bienestar ni su identidad.
                                </p>
                                <div className={styles.heroCtas}>
                                    <Link href="/contacto" className="btn btn-primary btn-lg">
                                        Agenda tu sesión exploratoria gratuita
                                    </Link>
                                    <a href="#proceso" className="btn btn-outline-white">
                                        Cómo funciona la mentoría ↓
                                    </a>
                                </div>
                            </div>
                            <div className={styles.heroStats}>
                                {[
                                    { val: "20+", label: "Años acompañando líderes" },
                                    { val: "4", label: "Países con presencia" },
                                    { val: "★★★★★", label: "Satisfacción de participantes" },
                                ].map((s) => (
                                    <div key={s.label} className={styles.statCard}>
                                        <span className={styles.statVal}>{s.val}</span>
                                        <span className={styles.statLabel}>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pain points */}
                <section className="section bg-cream">
                    <div className="container">
                        <div className={styles.twoCol}>
                            <div>
                                <span className="section-label">¿Te reconocés en esto?</span>
                                <h2 className="section-title">Desafíos reales que enfrentan las mujeres en liderazgo</h2>
                                <p style={{ color: "var(--color-gray-500)", fontSize: "var(--text-lg)", marginBottom: "2rem" }}>
                                    No estás sola. El 70% de las mujeres ejecutivas experimenta estas situaciones — y tienen solución.
                                </p>
                                <ul className={styles.checkList}>
                                    {painPoints.map((p) => (
                                        <li key={p.text} className={styles.checkItem}>
                                            <span><p.Icon size={18} /></span>
                                            <span>{p.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contacto" className="btn btn-primary" style={{ marginTop: "2rem" }}>
                                    Hablemos sobre tu situación <ArrowRight size={15} style={{ marginLeft: 4 }} />
                                </Link>
                            </div>
                            <div className={styles.infoBox} style={{ borderTopColor: "var(--color-secondary)" }}>
                                <div className={styles.infoBoxIcon}><Crown size={28} /></div>
                                <h3>¿Por qué las mujeres líderes necesitan mentoría diferente?</h3>
                                <p>
                                    Las mujeres en posiciones de liderazgo enfrentan desafíos específicos que los programas genéricos de management no contemplan: el síndrome del impostor bajo presión, la doble carga de expectativas, la comunicación asertiva en entornos mayormente masculinos.
                                </p>
                                <p>
                                    El proceso de mentoría con coaching ontológico aborda estas particularidades de forma directa, con profundidad y sin romanticismos. No somos un club de autoayuda — somos un espacio de trabajo serio con resultados concretos.
                                </p>
                                <Link href="/sobre-maria" className={styles.infoLink}>→ Conocer la metodología y la trayectoria de María</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section id="proceso" className="section">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Proceso de Mentoría</span>
                            <h2 className="section-title">Cómo funciona el proceso de acompañamiento</h2>
                        </div>
                        <div className={styles.processGrid}>
                            {process.map((step) => (
                                <div key={step.step} className={styles.processCard}>
                                    <div className={styles.stepNumber} style={{ background: "linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))" }}>{step.step}</div>
                                    <h3 className={styles.processTitle}>{step.title}</h3>
                                    <p className={styles.processDesc}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section bg-cream">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Transformaciones</span>
                            <h2 className="section-title">Lo que cambia después del proceso</h2>
                        </div>
                        <div className="grid-2">
                            {benefits.map((b) => (
                                <div key={b.title} className={`card ${styles.benefitCard}`}>
                                    <span className={styles.benefitCheck} style={{ background: "rgba(92, 160, 132, 0.1)", color: "var(--color-secondary-dark)" }}><CheckCircle size={18} /></span>
                                    <div>
                                        <h4 className={styles.benefitTitle}>{b.title}</h4>
                                        <p className={styles.benefitDesc}>{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="section">
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <div className="text-center" style={{ marginBottom: "3rem" }}>
                            <span className="section-label">Preguntas Frecuentes</span>
                            <h2 className="section-title">Todo lo que querés saber antes de decidir</h2>
                        </div>
                        <div className={styles.faqList}>
                            {faqs.map((faq) => (
                                <details key={faq.q} className={styles.faqItem}>
                                    <summary className={styles.faqQ}>{faq.q}</summary>
                                    <p className={styles.faqA}>{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.bottomCta} style={{ background: "linear-gradient(135deg, #1A2E1A, var(--color-secondary-dark))" }}>
                    <div className="container">
                        <h2>¿Listo para desarrollar tu liderazgo auténtico?</h2>
                        <p>Agendá una sesión exploratoria gratuita de 30 minutos. Hablamos sobre tu situación específica y evaluamos juntas cómo el proceso puede ayudarte.</p>
                        <div className={styles.bottomCtaBtns}>
                            <Link href="/contacto" className="btn btn-primary btn-lg">Agenda tu sesión exploratoria gratuita</Link>
                            <Link href="/testimonios" className="btn btn-outline-white">Ver casos de mujeres líderes</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
