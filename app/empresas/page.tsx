import type { Metadata } from "next";
import Link from "next/link";
import { Target, Settings, RefreshCw, User, HelpCircle, BarChart2, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "../service.module.css";

export const metadata: Metadata = {
    title: "Coaching y Consultoría para Empresas | Desarrollo Organizacional | Elevare Consulting",
    description:
        "Consultoría de desarrollo organizacional para PYMEs en Argentina. Coaching ontológico empresarial, optimización de procesos, liderazgo de equipos y reducción de rotación. Diagnóstico gratuito. 20+ años de experiencia.",
    openGraph: {
        title: "Coaching y Consultoría para Empresas | Elevare Consulting",
        description: "Analizamos cultura, procesos y dinámicas de liderazgo. Diseñamos e implementamos soluciones con cambios medibles y sostenibles. Diagnóstico gratuito.",
        url: "https://elevareconsultingmg.com/empresas",
    },
    alternates: {
        canonical: "https://elevareconsultingmg.com/empresas",
    },
};

const painPoints = [
    { Icon: Target, text: "Tu equipo gerencial no decide sin tu aprobación en todo y hay alta rotación" },
    { Icon: Settings, text: "Procesos que todo el mundo sabe que están rotos, pero nadie arregla" },
    { Icon: RefreshCw, text: "Reuniones que consumen tiempo pero no generan decisiones ni acciones" },
    { Icon: User, text: "La empresa depende de una sola persona para que las cosas funcionen" },
    { Icon: HelpCircle, text: "Todos saben que hay problemas, nadie toma la iniciativa y se repiten los errores" },
];

const process = [
    { step: "01", title: "Diagnóstico Profundo", desc: "Analizamos cultura, procesos y dinámicas de liderazgo para identificar los patrones que impulsan o limitan el desempeño. Partimos siempre de datos reales de tu organización." },
    { step: "02", title: "Diseño Estratégico", desc: "Diseñamos soluciones que alinean hábitos, prácticas de gestión y objetivos de negocio. El plan es 100% a medida: no hay plantillas genéricas." },
    { step: "03", title: "Implementación y Acompañamiento", desc: "Ejecutamos directamente junto a tu equipo. Optimizamos procesos, fortalecemos la responsabilidad ejecutiva y desarrollamos las conductas clave que elevan la performance." },
    { step: "04", title: "Resultados Medibles y Sostenibles", desc: "Aseguramos cambios que se mantienen en el tiempo. Convertimos el comportamiento organizacional en una ventaja competitiva concreta para tu empresa." },
];

const benefits = [
    { title: "Líderes autónomos y eficientes", desc: "Mandos medios capaces de tomar decisiones, gestionar equipos y resolver conflictos sin depender del fundador o CEO para todo." },
    { title: "Procesos que funcionan solos", desc: "Sistemas claros, documentados e implementados para que el negocio no dependa de personas específicas o de tu presencia constante." },
    { title: "Drástica reducción de rotación", desc: "Cuando las personas se sienten desarrolladas, escuchadas y tienen claridad en su rol, se quedan. Construimos cultura." },
    { title: "Decisiones basadas en datos", desc: "Tableros de gestión simples y útiles para que puedas tomar decisiones estratégicas con información confiable, no con intuición." },
];

const faqs = [
    { q: "¿Cuánto tiempo toma ver resultados?", a: "Los primeros cambios se notan en 4-8 semanas (claridad de roles, reuniones efectivas). Los resultados medibles y de fondo (rotación, KPIs consistentes) suelen evidenciarse entre los 3 y 6 meses." },
    { q: "¿El coaching funciona en PYMEs con cultura familiar?", a: "Es donde mejor funciona. No buscamos corporativizar tu empresa, sino potenciar lo mejor que ya tiene mientras resolvemos lo que frena el crecimiento y sistematizamos la gestión." },
    { q: "¿Qué diferencia este enfoque dual?", a: "Integramos el coaching ontológico (trabajando el 'ser' del líder) con la consultoría dura de procesos (optimizando el 'hacer'). El resultado es una transformación profunda que impacta directamente en la rentabilidad." },
    { q: "¿Pueden implementar mejoras sin interrumpir las operaciones?", a: "Sí, diseñamos los cambios para minimizar la disrupción operacional. Empezamos con los líderes clave y procesos de menor riesgo, escalando gradualmente." },
    { q: "¿Cuál es la inversión aproximada?", a: "Depende del tamaño de tu empresa y el alcance del programa. Ofrecemos una sesión exploratoria gratuita donde evaluamos tu situación y te presentamos una propuesta a medida. Agenda sin compromiso." },
];

const empresasSchemaLD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Coaching y Consultoría para Empresas",
            description: "Analizamos cultura, procesos y dinámicas de liderazgo para diseñar e implementar soluciones que alinean hábitos, prácticas de gestión y objetivos de negocio.",
            provider: {
                "@type": "ProfessionalService",
                name: "Elevare Consulting MG",
                url: "https://elevareconsultingmg.com",
            },
            areaServed: [
                { "@type": "Country", name: "Argentina" },
                { "@type": "Country", name: "Paraguay" },
                { "@type": "Country", name: "Uruguay" },
                { "@type": "Country", name: "Chile" },
            ],
            serviceType: "Desarrollo Organizacional",
            url: "https://elevareconsultingmg.com/empresas",
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://elevareconsultingmg.com" },
                { "@type": "ListItem", position: 2, name: "Empresas", item: "https://elevareconsultingmg.com/empresas" },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                { "@type": "Question", name: "¿Cuánto tiempo toma ver resultados?", acceptedAnswer: { "@type": "Answer", text: "Los primeros cambios se notan en 4-8 semanas. Los resultados medibles suelen evidenciarse entre los 3 y 6 meses." } },
                { "@type": "Question", name: "¿El coaching funciona en PYMEs con cultura familiar?", acceptedAnswer: { "@type": "Answer", text: "Es donde mejor funciona. No buscamos corporativizar tu empresa, sino potenciar lo mejor que ya tiene mientras resolvemos lo que frena el crecimiento." } },
                { "@type": "Question", name: "¿Qué diferencia este enfoque dual?", acceptedAnswer: { "@type": "Answer", text: "Integramos el coaching ontológico con la consultoría dura de procesos. El resultado es una transformación profunda que impacta directamente en la rentabilidad." } },
                { "@type": "Question", name: "¿Pueden implementar mejoras sin interrumpir las operaciones?", acceptedAnswer: { "@type": "Answer", text: "Sí, diseñamos los cambios para minimizar la disrupción operacional, empezando con los líderes clave y procesos de menor riesgo." } },
                { "@type": "Question", name: "¿Cuál es la inversión aproximada?", acceptedAnswer: { "@type": "Answer", text: "Depende del tamaño de tu empresa y el alcance del programa. Ofrecemos una sesión exploratoria gratuita donde evaluamos tu situación y te presentamos una propuesta a medida." } },
            ],
        },
    ],
};

export default function Empresas() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(empresasSchemaLD) }} />
            <Header />
            <main>
                {/* Hero */}
                <section className={styles.serviceHero} data-color="primary">
                    <div className="container">
                        <div className={styles.heroInner}>
                            <div className={styles.heroCopy}>
                                <nav className={styles.breadcrumb} aria-label="breadcrumb">
                                    <Link href="/">Inicio</Link> / <Link href="/servicios">Servicios</Link> / <span>Empresas</span>
                                </nav>
                                <span className={`section-label ${styles.labelWhite}`}>Para PYMEs y Empresas</span>
                                <h1 className={styles.heroTitle}>Desarrollo Organizacional para Empresas</h1>
                                <p className={styles.heroDesc}>
                                    Analizamos cultura, procesos y dinámicas de liderazgo para diseñar e implementar soluciones que alinean hábitos, prácticas de gestión y objetivos de negocio — con cambios medibles y sostenibles.
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

                <div className="divider-ornament" aria-hidden="true"><span></span></div>

                {/* Pain points */}
                <section className="section bg-cream">
                    <div className="container">
                        <div className={styles.twoCol}>
                            <div>
                                <span className="section-label">¿Te identificás?</span>
                                <h2 className="section-title">Señales de que tu empresa necesita intervención ahora</h2>
                                <p style={{ color: "var(--color-gray-500)", fontSize: "var(--text-lg)", marginBottom: "2rem" }}>
                                    Si alguna de estas situaciones te resulta familiar, estás dejando rentabilidad y talento sobre la mesa por problemas de liderazgo o de sistemas.
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
                                    Hablemos de la solución <ArrowRight size={15} style={{ marginLeft: 4 }} />
                                </Link>
                            </div>
                            <div className={styles.photoCol}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/coaching-equipo.png"
                                    alt="Sesión de coaching con equipo empresarial"
                                    className={styles.sectionPhoto}
                                />
                                <div className={styles.infoBox} style={{ borderTopColor: "var(--color-primary)", marginTop: "2rem", paddingTop: "2rem", borderTop: "4px solid var(--color-primary)" }}>
                                    <div className={styles.infoBoxIcon}><BarChart2 size={28} /></div>
                                    <h3 style={{ fontSize: "1.25rem", margin: "1rem 0" }}>Problemas de Sistemas vs Personas</h3>
                                    <p style={{ fontSize: "0.95rem", color: "var(--color-gray-600)" }}>
                                        La mayoría de los problemas operacionales no son de personas, son de <strong>sistemas</strong>. Nuestra consultoría busca construir sistemas claros y al mismo tiempo desarrollar el <strong>liderazgo</strong> necesario para sostenerlos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section id="proceso" className="section">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Proceso de Trabajo</span>
                            <h2 className="section-title">Cómo transformamos tu gestión empresarial</h2>
                        </div>
                        <div className={styles.processGrid}>
                            {process.map((step) => (
                                <div key={step.step} className={styles.processCard} data-step={step.step}>
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
                            <h2 className="section-title">Qué transformaciones garantiza el proceso conjunto</h2>
                        </div>
                        <div className="grid-2">
                            {benefits.map((b) => (
                                <div key={b.title} className={`card ${styles.benefitCard}`}>
                                    <span className={styles.benefitCheck}><CheckCircle size={18} /></span>
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
                        <h2>¿Listo para profesionalizar el liderazgo y operaciones de tu empresa?</h2>
                        <p>Agendá una sesión exploratoria gratuita de 30 minutos. Evaluamos juntos tu situación y te presentamos una propuesta concreta.</p>
                        <div className={styles.bottomCtaBtns}>
                            <Link href="/contacto" className="btn btn-primary btn-lg">Solicitar sesión exploratoria gratuita</Link>
                            <Link href="/testimonios" className="btn btn-outline-white">Ver casos de éxito</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
