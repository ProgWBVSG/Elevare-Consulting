import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eye, Users, Zap, Wrench, Compass, Crown, CheckCircle, ArrowRight, Target, Brain, Search, MessageSquare, TrendingUp } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import styles from "../service.module.css";

export const metadata: Metadata = {
    title: "Mentorías 1 a 1 para Líderes | Coaching Ejecutivo Estratégico | Elevare Consulting",
    description:
        "Mentoría estratégica personalizada para CEOs, gerentes y directivos que necesitan elevar su gestión. Toma de decisiones, delegación efectiva, management de equipos y desarrollo de competencias directivas. 20+ años de experiencia. Sesión exploratoria gratuita.",
    openGraph: {
        title: "Mentorías 1 a 1 para Líderes | Elevare Consulting",
        description: "Acompañamiento ejecutivo personalizado para líderes que quieren resultados medibles. Coaching estratégico + herramientas de management concretas. 20+ años.",
        url: "https://elevareconsultingmg.com/mentoria-lideres",
    },
    alternates: {
        canonical: "https://elevareconsultingmg.com/mentoria-lideres",
    },
};

const painPoints = [
    { Icon: Eye, text: "Sentís que liderás en piloto automático — cumplís el rol, pero sabés que podrías tener más impacto" },
    { Icon: Users, text: "No lográs que tu equipo funcione sin vos — terminás haciendo todo porque es más rápido que delegar" },
    { Icon: Zap, text: "Desgaste por falta de procesos claros — las decisiones se concentran en vos y el burnout acecha" },
    { Icon: Wrench, text: "Los cursos genéricos no alcanzan — necesitás metodología aplicable a TU realidad y TU equipo" },
    { Icon: Compass, text: "Soledad en la toma de decisiones críticas — responsabilidades enormes sin un espacio profesional donde analizar opciones" },
];

const process = [
    { step: "01", Icon: Search, title: "Diagnóstico de tu Liderazgo", desc: "Evaluamos tu estilo de gestión actual, desafíos específicos, contexto organizacional y objetivos. Identificamos los patrones que potencian tu liderazgo y los que lo están frenando." },
    { step: "02", Icon: Compass, title: "Plan Estratégico Personalizado", desc: "Diseñamos tu ruta de desarrollo a medida — no hay programas genéricos. Trabajamos desde tu industria, tu organización, tu equipo y tus metas concretas de gestión." },
    { step: "03", Icon: MessageSquare, title: "Sesiones de Mentoría Estratégica", desc: "Encuentros de trabajo profundo donde combinamos coaching ejecutivo con herramientas concretas de management. Abordamos toma de decisiones, delegación, gestión de conflictos y liderazgo de equipos." },
    { step: "04", Icon: TrendingUp, title: "Resultados y Autonomía", desc: "Nos aseguramos de que los cambios sean duraderos. Desarrollamos tu autonomía como líder para que cada decisión tenga más claridad, cada equipo más estructura y cada resultado más consistencia." },
];

const benefits = [
    { title: "Claridad en la toma de decisiones", desc: "Dejás de decidir desde la urgencia y empezás a decidir desde la estrategia. Cada decisión crítica pasa por un marco profesional que reduce riesgos y maximiza impacto." },
    { title: "Delegación efectiva y equipo autónomo", desc: "Tu equipo empieza a funcionar sin que estés encima. Construimos los mecanismos de accountability y confianza para que la delegación deje de ser una apuesta y sea un sistema." },
    { title: "Herramientas de management aplicables", desc: "No es teoría — son herramientas que aplicás el día siguiente de la sesión. Comunicación asertiva, gestión de conflictos, reuniones productivas, feedback constructivo." },
    { title: "Perspectiva externa y confidencial", desc: "Tenés un espacio seguro donde procesar decisiones difíciles, pensar en voz alta y recibir perspectiva sin el filtro político de tu organización." },
];

const whoIsFor = [
    { Icon: Crown, title: "CEOs y Fundadores", desc: "Que sienten que el negocio depende demasiado de ellos y necesitan construir estructura gerencial para escalar." },
    { Icon: Target, title: "Gerentes y Directivos", desc: "Que fueron promovidos por sus habilidades técnicas pero necesitan desarrollar competencias de liderazgo y gestión de personas." },
    { Icon: Users, title: "Mandos Medios en Transición", desc: "Que están asumiendo más responsabilidad y necesitan herramientas para liderar equipos de forma efectiva desde el primer día." },
    { Icon: Brain, title: "Líderes de Alto Impacto", desc: "Que ya son efectivos pero quieren elevar su gestión al siguiente nivel con acompañamiento estratégico personalizado." },
];

const faqs = [
    { q: "¿En qué se diferencia esto de un coaching grupal o un curso?", a: "Un curso te da contenido genérico para todos. La mentoría 1 a 1 trabaja exclusivamente TU situación, TUS desafíos, TUS bloqueos. Es como la diferencia entre ver un documental de gestión y tener un consultor senior dedicado a resolver tu caso específico." },
    { q: "¿Cuánto tiempo requiere el proceso de mentoría?", a: "Los programas más cortos son de 3 meses (para desafíos puntuales como una promoción o una reestructuración). Los programas de transformación más profunda son de 6-12 meses. Siempre empezamos con una sesión exploratoria gratuita donde evaluamos qué propuesta tiene más sentido para tu situación." },
    { q: "¿Puede hacerse de forma virtual?", a: "Sí. Trabajamos tanto de forma presencial (en Argentina) como virtual con líderes de toda LATAM. El proceso online es igualmente efectivo si hay compromiso real de las dos partes." },
    { q: "¿Mi empresa puede financiar el proceso?", a: "Sí. Muchas empresas invierten en procesos de desarrollo para sus líderes clave como parte de su estrategia de retención y performance. Podemos ayudarte a armar la propuesta interna para presentarle a tu organización." },
    { q: "¿Cuál es la inversión aproximada?", a: "Depende del alcance, la frecuencia de sesiones y la duración del programa. Ofrecemos una sesión exploratoria gratuita donde evaluamos tu situación y te presentamos una propuesta a medida, sin compromiso." },
];

const mentoriaLideresSchemaLD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Mentorías 1 a 1 para Líderes",
            description: "Acompañamiento estratégico personalizado para líderes que necesitan elevar su gestión. Trabajamos sobre toma de decisiones, delegación, management de equipos y desarrollo de competencias directivas.",
            provider: {
                "@type": "ProfessionalService",
                name: "Elevare Consulting MG",
                url: "https://elevareconsultingmg.com",
            },
            areaServed: [
                { "@type": "Country", name: "Argentina" },
                { "@type": "Country", name: "Paraguay" },
                { "@type": "Country", name: "Chile" },
                { "@type": "Country", name: "United States" },
            ],
            serviceType: "Mentoría Ejecutiva",
            audience: { "@type": "Audience", audienceType: "CEOs, gerentes, directivos y mandos medios" },
            url: "https://elevareconsultingmg.com/mentoria-lideres",
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://elevareconsultingmg.com" },
                { "@type": "ListItem", position: 2, name: "Mentorías 1 a 1 para Líderes", item: "https://elevareconsultingmg.com/mentoria-lideres" },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                { "@type": "Question", name: "¿En qué se diferencia esto de un coaching grupal o un curso?", acceptedAnswer: { "@type": "Answer", text: "Un curso te da contenido genérico para todos. La mentoría 1 a 1 trabaja exclusivamente TU situación, TUS desafíos, TUS bloqueos." } },
                { "@type": "Question", name: "¿Cuánto tiempo requiere el proceso de mentoría?", acceptedAnswer: { "@type": "Answer", text: "Los programas más cortos son de 3 meses. Los programas de transformación más profunda son de 6-12 meses." } },
                { "@type": "Question", name: "¿Puede hacerse de forma virtual?", acceptedAnswer: { "@type": "Answer", text: "Sí. Trabajamos tanto de forma presencial como virtual con líderes de toda LATAM." } },
                { "@type": "Question", name: "¿Mi empresa puede financiar el proceso?", acceptedAnswer: { "@type": "Answer", text: "Sí. Muchas empresas invierten en procesos de desarrollo para sus líderes clave como parte de su estrategia de retención." } },
                { "@type": "Question", name: "¿Cuál es la inversión aproximada?", acceptedAnswer: { "@type": "Answer", text: "Depende del alcance y duración del programa. Ofrecemos una sesión exploratoria gratuita donde evaluamos tu situación." } },
            ],
        },
    ],
};

export default function MentoriaLideres() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mentoriaLideresSchemaLD) }} />
            <Header />
            <main>
                {/* Hero */}
                <section className={`${styles.serviceHero} ${styles.hasWave}`} data-color="accent">
                    <div className="container">
                        <div className={styles.heroCentered}>
                            <div className={styles.heroCopy}>
                                <nav className={styles.breadcrumb} aria-label="breadcrumb">
                                    <Link href="/">Inicio</Link> / <Link href="/servicios">Servicios</Link> / <span>Mentorías para Líderes</span>
                                </nav>
                                <span className={`section-label ${styles.labelWhite}`}>Para CEOs, Gerentes y Directivos</span>
                                <h1 className={styles.heroTitle}>Mentoría Estratégica que Eleva tu Gestión al Siguiente Nivel</h1>
                                <p className={styles.heroDesc}>
                                    Acompañamiento ejecutivo personalizado para líderes que necesitan más claridad en sus decisiones, más estructura en sus equipos y más impacto en sus resultados — sin cargar todo solos.
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
                        </div>
                    </div>
                    {/* Wave — inside hero, cream-colored, cuts into the gradient */}
                    <div className={styles.heroWave} aria-hidden="true">
                        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0,120 L0,60 C120,100 240,110 360,90 C480,70 600,30 720,25 C840,20 960,55 1080,75 C1200,95 1320,100 1440,80 L1440,120 Z"
                                fill="var(--color-cream, #F7F5F2)"
                            />
                        </svg>
                    </div>
                </section>

                {/* Pain points */}
                <section className={`section ${styles.lightSection}`}>
                    <div className="container">
                        <div className={styles.twoCol}>
                            <ScrollReveal variant="fade-right">
                            <div>
                                <span className="section-label">¿Te identificás con esto?</span>
                                <h2 className="section-title">Señales de que necesitás mentoría estratégica</h2>
                                <p style={{ color: "var(--color-gray-500)", fontSize: "var(--text-lg)", marginBottom: "2rem" }}>
                                    Si alguna de estas situaciones te resulta familiar, no es falta de capacidad — es falta de acompañamiento profesional.
                                </p>
                                <ul className={styles.checkList} style={{ marginTop: "2rem" }}>
                                    {painPoints.map((p) => (
                                        <li key={p.text} className={styles.checkItem}>
                                            <span><p.Icon size={18} /></span>
                                            <span>{p.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contacto" className="btn btn-primary" style={{ marginTop: "2rem" }}>
                                    Hablemos de tu situación <ArrowRight size={15} style={{ marginLeft: 4 }} />
                                </Link>
                            </div>
                            </ScrollReveal>
                            <ScrollReveal variant="fade-left" delay={200}>
                            <div className={styles.photoCol}>
                                <Image
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
                                    alt="Sesión de mentoría estratégica para líderes ejecutivos"
                                    width={600}
                                    height={400}
                                    className={styles.sectionPhoto}
                                />
                                <div className={styles.infoBox} style={{ borderTopColor: "var(--color-accent)", marginTop: "2rem", paddingTop: "2rem", borderTop: "4px solid var(--color-accent)" }}>
                                    <div className={styles.infoBoxIcon}><Crown size={28} /></div>
                                    <h3 style={{ fontSize: "1.25rem", margin: "1rem 0" }}>¿Por qué mentoría 1 a 1 y no un programa grupal?</h3>
                                    <p style={{ fontSize: "0.95rem", color: "var(--color-gray-700)" }}>
                                        Porque tus desafíos son <strong>únicos</strong>. Un programa grupal aborda temas generales; la mentoría 1 a 1 trabaja sobre <strong>tu realidad específica</strong>, tus conflictos reales, tus decisiones pendientes. Es un espacio privado y confidencial donde podés ser completamente honesto sobre lo que está pasando.
                                    </p>
                                </div>
                            </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* ¿Para quién es? */}
                <section className="section">
                    <div className="container">
                        <ScrollReveal variant="fade-up">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">¿Para quién es?</span>
                            <h2 className="section-title">Líderes que eligen acompañamiento estratégico</h2>
                            <p className="section-subtitle">
                                La mentoría no es para quienes buscan motivación — es para quienes buscan resultados concretos en su gestión.
                            </p>
                        </div>
                        </ScrollReveal>
                        <div className="grid-2">
                            {whoIsFor.map((w, i) => (
                                <ScrollReveal key={w.title} variant="zoom-in" delay={i * 120}>
                                <div className={`card ${styles.benefitCard}`}>
                                    <span className={styles.benefitCheck} style={{ background: "rgba(214, 90, 32, 0.1)", color: "var(--color-accent-dark)" }}><w.Icon size={18} /></span>
                                    <div>
                                        <h4 className={styles.benefitTitle}>{w.title}</h4>
                                        <p className={styles.benefitDesc}>{w.desc}</p>
                                    </div>
                                </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section id="proceso" className={`section ${styles.lightSection}`}>
                    <div className="container">
                        <ScrollReveal variant="fade-up">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Proceso de Mentoría</span>
                            <h2 className="section-title">Cómo funciona el acompañamiento estratégico</h2>
                        </div>
                        </ScrollReveal>
                        <div className={styles.processGrid}>
                            {process.map((step, i) => (
                                <ScrollReveal key={step.step} variant="fade-up" delay={i * 150}>
                                <div className={styles.processCard} data-step={step.step}>
                                    <div className={styles.processHead}>
                                        <span className={styles.processIconBadge}><step.Icon size={20} /></span>
                                        <span className={styles.stepNumber}>{step.step}</span>
                                    </div>
                                    <h3 className={styles.processTitle}>{step.title}</h3>
                                    <p className={styles.processDesc}>{step.desc}</p>
                                </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="section">
                    <div className="container">
                        <ScrollReveal variant="fade-up">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Transformaciones</span>
                            <h2 className="section-title">Lo que cambia después del proceso de mentoría</h2>
                        </div>
                        </ScrollReveal>
                        <div className="grid-2">
                            {benefits.map((b, i) => (
                                <ScrollReveal key={b.title} variant="zoom-in" delay={i * 120}>
                                <div className={`card ${styles.benefitCard}`}>
                                    <span className={styles.benefitCheck} style={{ background: "rgba(214, 90, 32, 0.1)", color: "var(--color-accent-dark)" }}><CheckCircle size={18} /></span>
                                    <div>
                                        <h4 className={styles.benefitTitle}>{b.title}</h4>
                                        <p className={styles.benefitDesc}>{b.desc}</p>
                                    </div>
                                </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="section">
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <ScrollReveal variant="fade-up">
                        <div className="text-center" style={{ marginBottom: "3rem" }}>
                            <span className="section-label">Preguntas Frecuentes</span>
                            <h2 className="section-title">Todo lo que querés saber antes de comenzar</h2>
                        </div>
                        </ScrollReveal>
                        <div className={styles.faqList}>
                            {faqs.map((faq) => (
                                <ScrollReveal key={faq.q} variant="fade-up" delay={100}>
                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQ}>{faq.q}</summary>
                                    <p className={styles.faqA}>{faq.a}</p>
                                </details>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={`${styles.bottomCta} ${styles.bottomCtaHasWave}`} style={{ background: "linear-gradient(135deg, #2E1A0E 0%, var(--color-accent-dark) 100%)" }}>
                    {/* Wave — filled with the color of the section above (body dark), same technique as the hero */}
                    <div className={styles.bottomCtaWave} aria-hidden="true">
                        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0,0 L0,60 C120,20 240,10 360,30 C480,50 600,90 720,95 C840,100 960,65 1080,45 C1200,25 1320,20 1440,40 L1440,0 Z"
                                fill="#0B1320"
                            />
                        </svg>
                    </div>
                    <div className="container">
                        <ScrollReveal variant="fade-up">
                            <div className={styles.bottomCtaInner}>
                                <h2>¿Listo para elevar tu liderazgo con acompañamiento estratégico?</h2>
                                <p>Agendá una sesión exploratoria gratuita de 30 minutos. Sin compromiso. Conversamos sobre tu situación y evaluamos juntos cómo la mentoría puede transformar tu gestión.</p>
                                <div className={styles.bottomCtaBtns}>
                                    <Link href="/contacto" className="btn btn-primary btn-lg">Agendar mi sesión exploratoria gratuita</Link>
                                    <Link href="/testimonios" className="btn btn-outline-white">Ver casos de éxito</Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
