import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "../service.module.css";

export const metadata: Metadata = {
    title: "Coaching Interno para Empresas | Elevare Consulting MG",
    description:
        "Implementá un sistema de coaching interno profesional en tu PYME. Desarrollamos líderes efectivos, reducimos la rotación y construimos cultura de alto rendimiento. 20+ años de experiencia. Consultá gratis.",
    openGraph: {
        title: "Coaching Interno para Empresas | Elevare Consulting MG",
        url: "https://elevareconsultingmg.com/coaching-interno-empresas",
    },
};

const painPoints = [
    { icon: "🎯", text: "Tu equipo gerencial no decide sin tu aprobación en todo" },
    { icon: "🔄", text: "Alta rotación: personas clave renuncian sin aviso" },
    { icon: "⚙️", text: "Reuniones que no producen resultados ni compromisos" },
    { icon: "📉", text: "Cultura de 'cumplir el horario', sin proactividad" },
    { icon: "🤷", text: "Todos saben que hay problemas, nadie toma la iniciativa" },
];

const process = [
    { step: "01", title: "Diagnóstico Organizacional", desc: "Analizamos la situación actual de tu empresa: estructura de liderazgo, clima organizacional, procesos clave y cultura. Identificamos los puntos críticos con datos, no suposiciones." },
    { step: "02", title: "Diseño del Sistema a Medida", desc: "Creamos un plan de implementación personalizado para tu organización. No usamos fórmulas genéricas: cada empresa es diferente y merece un enfoque específico." },
    { step: "03", title: "Implementación con Acompañamiento", desc: "Trabajamos junto a vos y tu equipo en la implementación. Formamos a los líderes internos, desarrollamos capacidades y creamos sistemas sostenibles." },
    { step: "04", title: "Medición y Ajuste Continuo", desc: "Monitoreamos el progreso con indicadores concretos. Ajustamos el proceso según los resultados reales. El coaching ontológico genera transformación profunda — y medible." },
];

const benefits = [
    { title: "Líderes que lideran de verdad", desc: "Mandos medios capaces de tomar decisiones autónomas, gestionar equipos y resolver conflictos sin depender del fundador o CEO para todo." },
    { title: "Drástica reducción de rotación", desc: "Cuando las personas se sienten desarrolladas y escuchadas, se quedan. Construimos el tipo de cultura que retiene el talento de calidad." },
    { title: "Procesos que funcionan solos", desc: "Sistematizamos la gestión para que los resultados no dependan de personas específicas. La empresa opera bien incluso cuando el dueño está ausente." },
    { title: "Cultura de alto rendimiento", desc: "Equipos proactivos, comprometidos y que piensan como dueños. No solo cumplen su tarea: buscan mejorar continuamente." },
];

const faqs = [
    { q: "¿Cuánto tiempo toma ver resultados?", a: "Los primeros cambios de actitud y comportamiento se notan en las primeras 4-8 semanas. Los resultados medibles (rotación, clima, productividad) suelen evidenciarse entre los 3 y 6 meses. La transformación profunda es un proceso, no un evento." },
    { q: "¿El coaching funciona en PYMEs con cultura familiar?", a: "Es donde mejor funciona. El coaching ontológico se adapta a la cultura existente: no buscamos corporativizar tu empresa, sino potenciar lo mejor que ya tiene mientras resolvemos lo que frena el crecimiento." },
    { q: "¿Qué diferencia al coaching ontológico del coaching tradicional?", a: "El coaching tradicional trabaja principalmente en el 'hacer' (técnicas, estrategias, acciones). El coaching ontológico trabaja en el 'ser' (quién es el líder, sus creencias, sus conversaciones internas). El resultado es una transformación más profunda y duradera." },
    { q: "¿Necesito que todo el equipo participe?", a: "Empezamos con los líderes clave. Podemos después expandir a más niveles. El foco inicial son las personas que mayor impacto tienen sobre el resto del equipo y los resultados de la empresa." },
    { q: "¿Cuál es la inversión aproximada?", a: "Depende del tamaño de tu empresa y el alcance del programa. Ofrecemos una sesión exploratoria gratuita donde evaluamos tu situación y te presentamos una propuesta a medida. Agenda sin compromiso." },
];

export default function CoachingInternoPYME() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className={styles.serviceHero} data-color="primary">
                    <div className="container">
                        <div className={styles.heroInner}>
                            <div className={styles.heroCopy}>
                                <nav className={styles.breadcrumb} aria-label="breadcrumb">
                                    <Link href="/">Inicio</Link> / <Link href="/servicios">Servicios</Link> / <span>Coaching Interno</span>
                                </nav>
                                <span className={`section-label ${styles.labelWhite}`}>Para PYMEs y Empresas</span>
                                <h1 className={styles.heroTitle}>Coaching Interno para Empresas que Quieren Crecer</h1>
                                <p className={styles.heroDesc}>
                                    Desarrollamos líderes auténticos, reducimos la rotación y construimos cultura de alto rendimiento. 20+ años de experiencia respaldando cada paso.
                                </p>
                                <div className={styles.heroCtas}>
                                    <Link href="/contacto" className="btn btn-primary btn-lg">
                                        Solicitar diagnóstico gratuito
                                    </Link>
                                    <a href="#proceso" className="btn btn-outline-white">
                                        Ver cómo funciona ↓
                                    </a>
                                </div>
                            </div>
                            <div className={styles.heroStats}>
                                {[
                                    { val: "20+", label: "Años de experiencia" },
                                    { val: "4", label: "Países con presencia" },
                                    { val: "★★★★★", label: "Satisfacción clientes" },
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
                                <span className="section-label">¿Te identificás?</span>
                                <h2 className="section-title">Señales de que tu empresa necesita coaching interno ahora</h2>
                                <p style={{ color: "var(--color-gray-500)", fontSize: "var(--text-lg)", marginBottom: "2rem" }}>
                                    Si alguna de estas situaciones te resulta familiar, estás dejando rentabilidad y talento sobre la mesa.
                                </p>
                                <ul className={styles.checkList}>
                                    {painPoints.map((p) => (
                                        <li key={p.text} className={styles.checkItem}>
                                            <span>{p.icon}</span>
                                            <span>{p.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contacto" className="btn btn-primary" style={{ marginTop: "2rem" }}>
                                    Hablemos de la solución →
                                </Link>
                            </div>
                            <div className={styles.photoCol}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/coaching-equipo.png"
                                    alt="Sesión de coaching con equipo empresarial"
                                    className={styles.sectionPhoto}
                                />
                                <p className={styles.photoCaption}>Sesión de coaching con equipo de empresa cliente</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section id="proceso" className="section">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Proceso de Trabajo</span>
                            <h2 className="section-title">Cómo implementamos el coaching interno en tu empresa</h2>
                        </div>
                        <div className={styles.processGrid}>
                            {process.map((step) => (
                                <div key={step.step} className={styles.processCard}>
                                    <div className={styles.stepNumber}>{step.step}</div>
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
                            <span className="section-label">Resultados</span>
                            <h2 className="section-title">Qué transformaciones garantiza el proceso</h2>
                        </div>
                        <div className="grid-2">
                            {benefits.map((b) => (
                                <div key={b.title} className={`card ${styles.benefitCard}`}>
                                    <span className={styles.benefitCheck}>✓</span>
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
                    <div className="container">
                        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
                            <div className="text-center" style={{ marginBottom: "3rem" }}>
                                <span className="section-label">Preguntas Frecuentes</span>
                                <h2 className="section-title">Respuestas a tus dudas más comunes</h2>
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
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.bottomCta}>
                    <div className="container">
                        <h2>¿Listo para profesionalizar el liderazgo de tu empresa?</h2>
                        <p>Agendá una sesión exploratoria gratuita de 30 minutos. Evaluamos juntos tu situación y te presentamos una propuesta concreta.</p>
                        <div className={styles.bottomCtaBtns}>
                            <Link href="/contacto" className="btn btn-primary btn-lg">Solicitar sesión exploratoria gratuita</Link>
                            <Link href="/casos-de-exito" className="btn btn-outline-white">Ver casos de éxito</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
