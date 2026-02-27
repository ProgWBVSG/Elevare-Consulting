import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "../service.module.css";

export const metadata: Metadata = {
    title: "Consultoría de Procesos y Gestión Empresarial | Elevare Consulting MG",
    description:
        "Análisis y optimización de procesos de gestión para PYMEs. Co-creamos soluciones prácticas para mejorar eficiencia, productividad y resultados. Diagnóstico gratuito. 20+ años de experiencia.",
    openGraph: {
        title: "Consultoría de Procesos y Gestión | Elevare Consulting MG",
        url: "https://elevareconsultingmg.com/consultoria-procesos-gestion",
    },
};

const painPoints = [
    { icon: "⚙️", text: "Procesos que todo el mundo sabe que están rotos, pero nadie arregla" },
    { icon: "📋", text: "Reuniones que consumen tiempo pero no generan decisiones ni acciones" },
    { icon: "👤", text: "La empresa depende de una sola persona para que las cosas funcionen" },
    { icon: "📊", text: "No tenés métricas claras para saber si el negocio va bien o mal" },
    { icon: "🔁", text: "Los mismos errores se repiten una y otra vez sin aprendizaje real" },
];

const process = [
    { step: "01", title: "Diagnóstico Estratégico", desc: "Mapeamos tus procesos actuales, identificamos los cuellos de botella y priorizamos los problemas de mayor impacto. Usamos datos y entrevistas con tu equipo, no suposiciones." },
    { step: "02", title: "Co-diseño de Soluciones", desc: "Trabajamos junto a vos y a tu equipo para diseñar las soluciones. El conocimiento del problema está adentro de tu organización — nosotros aportamos la metodología y la perspectiva externa." },
    { step: "03", title: "Implementación Guiada", desc: "Acompañamos la implementación paso a paso. Gestionamos la resistencia al cambio, capacitamos a las personas involucradas y ajustamos según la realidad operativa." },
    { step: "04", title: "Seguimiento y Consolidación", desc: "Nos aseguramos de que los cambios se sostengan en el tiempo. Definimos indicadores, revisamos resultados y acompañamos los ajustes necesarios hasta que el proceso funcione solo." },
];

const benefits = [
    { title: "Procesos que funcionan sin vos encima", desc: "Sistemas claros, documentados e implementados para que el negocio no dependa de personas específicas o de tu presencia constante." },
    { title: "Decisiones basadas en datos reales", desc: "Tableros de gestión simples y útiles para que puedas tomar decisiones estratégicas con información confiable, no con intuición." },
    { title: "Equipo que sabe qué hacer y cómo", desc: "Roles y responsabilidades claras, protocolos de actuación y una cultura de mejora continua que se sostiene sin consultoría permanente." },
    { title: "Resultados medibles desde el inicio", desc: "Definimos KPIs concretos antes de empezar para que puedas medir el impacto real del proceso de mejora en tiempo, costo y productividad." },
];

const faqs = [
    { q: "¿Cuánto tiempo requiere el diagnóstico inicial?", a: "El diagnóstico completo lleva entre 2 y 4 semanas, dependiendo del tamaño y complejidad de la empresa. Incluye entrevistas con los equipos clave, mapeo de procesos y análisis de indicadores existentes." },
    { q: "¿Pueden implementar mejoras sin interrumpir las operaciones?", a: "Sí, es una de nuestras premisas fundamentales. Diseñamos los cambios para minimizar la disrupción operacional. Generalmente empezamos con procesos de menor riesgo y escalamos gradualmente." },
    { q: "¿Trabajamos solo con empresas de cierto tamaño o industria?", a: "Trabajamos principalmente con PYMEs de 15 a 200 empleados en servicios, producción y tecnología. El tamaño ideal es una empresa donde el dueño o directivo reconoce que hay un problema estructural y tiene voluntad real de cambiar." },
    { q: "¿Y si mi equipo se resiste a los cambios?", a: "La resistencia al cambio es normal y la esperamos. Parte de nuestra metodología incluye trabajo con los líderes de opinión internos, comunicación transparente sobre el proceso de cambio y acompañamiento emocional al equipo." },
    { q: "¿Cuándo se ven los primeros resultados?", a: "Los primeros resultados visibles (claridad de roles, reuniones más efectivas, indicadores básicos) suelen aparecer entre las semanas 4 y 8. Los resultados de fondo (cultura de mejora, KPIs consistentes) se consolidan entre los 3 y 6 meses." },
];

export default function ConsultoriaProcesos() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.serviceHero} data-color="accent">
                    <div className="container">
                        <div className={styles.heroInner}>
                            <div className={styles.heroCopy}>
                                <nav className={styles.breadcrumb} aria-label="breadcrumb">
                                    <Link href="/">Inicio</Link> / <Link href="/servicios">Servicios</Link> / <span>Consultoría de Procesos</span>
                                </nav>
                                <span className={`section-label ${styles.labelWhite}`}>Para PYMEs con Desafíos Operacionales</span>
                                <h1 className={styles.heroTitle}>Optimizá los Procesos que Frenan el Crecimiento de tu Empresa</h1>
                                <p className={styles.heroDesc}>
                                    Identificamos los cuellos de botella, co-creamos soluciones con tu equipo y acompañamos la implementación. Sin fórmulas genéricas — con profundo conocimiento de la realidad operativa de las PYMEs.
                                </p>
                                <div className={styles.heroCtas}>
                                    <Link href="/contacto" className="btn btn-primary btn-lg">
                                        Solicitar diagnóstico gratuito
                                    </Link>
                                    <a href="#proceso" className="btn btn-outline-white">Ver metodología ↓</a>
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

                <section className="section bg-cream">
                    <div className="container">
                        <div className={styles.twoCol}>
                            <div>
                                <span className="section-label">¿Tu empresa tiene esto?</span>
                                <h2 className="section-title">Los síntomas de una gestión que necesita mejora</h2>
                                <p style={{ color: "var(--color-gray-500)", fontSize: "var(--text-lg)", marginBottom: "2rem" }}>
                                    Estos problemas son más comunes de lo que parecen. Y tienen solución.
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
                                    Hablemos sobre tu situación →
                                </Link>
                            </div>
                            <div className={styles.infoBox} style={{ borderTopColor: "var(--color-accent)" }}>
                                <div className={styles.infoBoxIcon}>📊</div>
                                <h3>¿Por qué los procesos fallan aunque la gente sea buena?</h3>
                                <p>
                                    La mayoría de los problemas operacionales no son de personas, son de <strong>sistemas</strong>. Cuando los procesos no están claros, las personas —incluso las mejores— improvisan, generan inconsistencias y crean dependencias.
                                </p>
                                <p>
                                    Nuestra consultoría no busca "arreglar personas". Busca construir sistemas que hagan que cualquier persona razonablemente capaz pueda operar con excelencia y consistencia.
                                </p>
                                <Link href="/sobre-maria" className={styles.infoLink}>→ Conocer la metodología de trabajo</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="proceso" className="section">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Metodología</span>
                            <h2 className="section-title">Cómo abordamos la optimización de tu gestión</h2>
                        </div>
                        <div className={styles.processGrid}>
                            {process.map((step) => (
                                <div key={step.step} className={styles.processCard}>
                                    <div className={styles.stepNumber} style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))" }}>{step.step}</div>
                                    <h3 className={styles.processTitle}>{step.title}</h3>
                                    <p className={styles.processDesc}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section bg-cream">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: "4rem" }}>
                            <span className="section-label">Resultados</span>
                            <h2 className="section-title">Qué cambia después de la consultoría</h2>
                        </div>
                        <div className="grid-2">
                            {benefits.map((b) => (
                                <div key={b.title} className={`card ${styles.benefitCard}`}>
                                    <span className={styles.benefitCheck} style={{ background: "rgba(232, 125, 62, 0.1)", color: "var(--color-accent-dark)" }}>✓</span>
                                    <div>
                                        <h4 className={styles.benefitTitle}>{b.title}</h4>
                                        <p className={styles.benefitDesc}>{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <div className="text-center" style={{ marginBottom: "3rem" }}>
                            <span className="section-label">Preguntas Frecuentes</span>
                            <h2 className="section-title">Dudas comunes sobre la consultoría de procesos</h2>
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

                <section className={styles.bottomCta} style={{ background: "linear-gradient(135deg, #2E1A0E, var(--color-accent-dark))" }}>
                    <div className="container">
                        <h2>¿Querés resolver los problemas operacionales de tu empresa de una vez?</h2>
                        <p>Empezamos con un diagnóstico gratuito donde identificamos los 3 principales cuellos de botella de tu gestión.</p>
                        <div className={styles.bottomCtaBtns}>
                            <Link href="/contacto" className="btn btn-primary btn-lg">Solicitar diagnóstico gratuito</Link>
                            <Link href="/casos-de-exito" className="btn btn-outline-white">Ver casos de optimización</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
