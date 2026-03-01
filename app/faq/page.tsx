import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
    title: "Preguntas Frecuentes sobre Coaching Ontológico | Elevare Consulting MG",
    description:
        "Respondemos las dudas más comunes sobre coaching ontológico, mentoría ejecutiva para mujeres y consultoría de gestión. Tiempos, inversión, metodología y proceso de trabajo.",
};

const faqs = [
    {
        category: "Sobre el Coaching Ontológico",
        items: [
            { q: "¿Qué es el coaching ontológico y en qué se diferencia del coaching tradicional?", a: "El coaching ontológico trabaja desde el SER del líder: sus creencias, su forma de comunicarse y su mundo emocional. A diferencia del coaching tradicional —que se enfoca principalmente en metas y acciones—, el coaching ontológico genera transformaciones profundas que cambian cómo la persona se relaciona con su trabajo, su equipo y sus desafíos. Los cambios son duraderos porque abordan la raíz del comportamiento, no solo la superficie." },
            { q: "¿Cómo sé si el coaching ontológico es para mí?", a: "Si sentís que ya conocés las técnicas y las estrategias pero algo interno te impide aplicarlas consistentemente, el coaching ontológico es probablemente lo que necesitás. También es ideal si atravesás una transición importante de rol, si hay un patrón que se repite en tu liderazgo sin importar las acciones que tomás, o si buscás un cambio más profundo que una capacitación convencional." },
            { q: "¿Cuánto tiempo duran los procesos de coaching?", a: "Depende del objetivo y la profundidad del trabajo. Los procesos más cortos (para objetivos específicos) suelen ser de 3 meses. Los de transformación más profunda van de 6 a 12 meses. En la sesión exploratoria gratuita evaluamos tu situación y te recomendamos el proceso más adecuado." },
        ],
    },
    {
        category: "Sobre la Mentoría para Mujeres Ejecutivas",
        items: [
            { q: "¿Este programa es solo para mujeres con cargos muy altos?", a: "No. Trabajamos con mujeres en su primer rol de liderazgo, mandos medios consolidadas, directivas C-level y emprendedoras. Lo relevante no es el título, sino que estés transitando desafíos de liderazgo y tengas voluntad de desarrollarte." },
            { q: "¿Por qué mujeres ejecutivas necesitan un acompañamiento diferente?", a: "Porque los desafíos son diferentes. El síndrome del impostor bajo presión, la doble carga de expectativas (profesionales y personales), la comunicación asertiva en entornos masculinizados, y la gestión del bienestar son problemáticas específicas que los programas genéricos de liderazgo rara vez abordan con la seriedad que merecen." },
            { q: "¿Puede mi empresa financiar la mentoría?", a: "Sí. Muchas organizaciones financian procesos de desarrollo para líderes clave como parte de su inversión en talento. Podemos ayudarte a preparar la propuesta interna para presentarle a tu empresa. En algunos casos, el proceso puede enmarcarse en el presupuesto de capacitación y desarrollo." },
        ],
    },
    {
        category: "Sobre la Consultoría para Empresas",
        items: [
            { q: "¿Cómo saben que entienden la realidad de mi empresa?", a: "Empezamos siempre con un diagnóstico profundo: entrevistamos a distintos miembros del equipo, mapeamos los procesos reales (no los que deberían existir según el organigrama) y analizamos los indicadores disponibles. No llegamos con soluciones pre-diseñadas; llegamos con preguntas y metodología para encontrar las soluciones que tienen sentido para tu organización específica." },
            { q: "¿Qué pasa si el equipo se resiste al cambio?", a: "La resistencia al cambio es completamente normal y la incorporamos como parte del proceso, no como un obstáculo inesperado. Trabajamos con los líderes de opinión del equipo, generamos comunicación transparente sobre el proceso y acompañamos la gestión emocional de la transición." },
            { q: "¿Pueden trabajar con mi empresa aunque estén en otra ciudad o país?", a: "Sí. Tenemos clientes en Argentina, Uruguay, Paraguay y Chile. Combinamos trabajo presencial para instancias clave (diagnóstico inicial, workshops) con seguimiento virtual. La metodología está diseñada para funcionar en ambas modalidades sin pérdida de calidad." },
        ],
    },
    {
        category: "Sobre Inversión y Proceso",
        items: [
            { q: "¿Cuáles son los precios o rangos de inversión?", a: "Los precios varían según el tipo y duración del proceso. No publicamos tarifas fijas porque cada propuesta es personalizada según el alcance del trabajo. En la sesión exploratoria gratuita evaluamos tu situación y presentamos una propuesta a medida con la inversión correspondiente." },
            { q: "¿Cómo es la sesión exploratoria gratuita?", a: "Es una reunión de 30 minutos (presencial o virtual) donde escuchamos tu situación, entendemos tus desafíos específicos y evaluamos juntos si hay posibilidad de trabajo. No hay ningún compromiso de contratación ni presión de venta. Si hay fit, te enviamos una propuesta en los días siguientes." },
            { q: "¿Trabajan con confidencialidad?", a: "Absolutamente. Toda la información compartida en el proceso de coaching o consultoría es estrictamente confidencial. Nos adherimos a los códigos de ética profesional del coaching y nunca compartimos información de clientes sin autorización explícita." },
        ],
    },
];

export default function FAQ() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container text-center">
                        <span className={`section-label ${styles.labelWhite}`}>Centro de Ayuda</span>
                        <h1 className={styles.heroTitle}>Preguntas Frecuentes</h1>
                        <p className={styles.heroDesc}>
                            Respondemos las dudas más comunes sobre nuestros servicios, metodología y proceso de trabajo. Si no encontrás tu pregunta, escribinos directamente.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container" style={{ maxWidth: "860px" }}>
                        {faqs.map((category) => (
                            <div key={category.category} className={styles.categoryBlock}>
                                <h2 className={styles.categoryTitle}>{category.category}</h2>
                                <div className={styles.faqList}>
                                    {category.items.map((item) => (
                                        <details key={item.q} className={styles.faqItem}>
                                            <summary className={styles.faqQ}>{item.q}</summary>
                                            <p className={styles.faqA}>{item.a}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className={styles.ctaBox}>
                            <h3>¿No encontraste tu pregunta?</h3>
                            <p>Escribinos directamente. Respondemos en 24/48 horas hábiles.</p>
                            <Link href="/contacto" className="btn btn-primary">Contactar a Elevare →</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
