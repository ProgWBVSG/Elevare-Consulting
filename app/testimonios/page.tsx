import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Building2, Rocket } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedCase from './FeaturedCase';
import styles from './testimonios.module.css';

export const metadata: Metadata = {
    title: 'Casos de Éxito y Testimonios de Coaching | Elevare Consulting',
    description: 'Descubrí cómo líderes y PYMEs transformaron su realidad con coaching ontológico. Casos reales con resultados medibles: 40% menos rotación, expansión internacional, equipos autónomos. Liderá el cambio.',
    openGraph: {
        title: 'Testimonios y Casos de Éxito | Elevare Consulting',
        description: 'Historias reales de PYMEs y mujeres ejecutivas que transformaron su liderazgo con coaching ontológico. Resultados medibles y sostenibles.',
        url: 'https://elevareconsultingmg.com/testimonios',
    },
    alternates: {
        canonical: 'https://elevareconsultingmg.com/testimonios',
    },
};

const realReviews = [
    {
        id: 'maria-eugenia',
        name: 'Maria Eugenia Cano',
        role: 'Consultoría de Liderazgo',
        source: 'LinkedIn Review',
        SourceIcon: Briefcase,
        text: 'Muchas gracias ELEVARE Consulting, cada charla compartida fue inolvidable. Tus consejos ya sea en palabras, videos, todo fue un aprendizaje continuo y fructífero. Excelente profesional. Fue un semestre con muchas sorpresas y celebro poder haber contado con tu presencia, gracias.',
        highlight: 'Aprendizaje continuo y fructífero',
    },
    {
        id: 'roberto',
        name: 'Roberto M.',
        role: 'Director General',
        source: 'PYME Industrial, Buenos Aires',
        SourceIcon: Building2,
        text: 'Después de 6 meses con Elevare, mi equipo gerencial tomó autonomía real. La rotación bajó un 40% y el clima laboral cambió completamente. María entiende el mundo de la empresa desde adentro.',
        highlight: '40% menos rotación de personal',
    },
    {
        id: 'camila',
        name: 'Camila V.',
        role: 'CEO',
        source: 'Startup de Tecnología, Montevideo',
        SourceIcon: Rocket,
        text: 'El proceso de coaching ontológico me cambió la perspectiva completa. No solo aprendí técnicas de gestión, transformé cómo veo mi rol como líder y el impacto que quiero tener.',
        highlight: 'Expansión a 3 países en 18 meses',
    },
];

const testimoniosSchemaLD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfessionalService",
            name: "Elevare Consulting MG",
            url: "https://elevareconsultingmg.com",
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                ratingCount: "40",
                reviewCount: "3",
            },
            review: [
                {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Maria Eugenia Cano" },
                    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                    reviewBody: "Cada charla compartida fue inolvidable. Tus consejos fueron un aprendizaje continuo y fructífero. Excelente profesional.",
                },
                {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Roberto M." },
                    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                    reviewBody: "Después de 6 meses con Elevare, mi equipo gerencial tomó autonomía real. La rotación bajó un 40%.",
                },
                {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Camila V." },
                    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                    reviewBody: "El proceso de coaching ontológico me cambió la perspectiva completa. Transformé cómo veo mi rol como líder.",
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://elevareconsultingmg.com" },
                { "@type": "ListItem", position: 2, name: "Testimonios", item: "https://elevareconsultingmg.com/testimonios" },
            ],
        },
    ],
};

export default function TestimoniosPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(testimoniosSchemaLD) }} />
            <Header />

            <main className={styles.main}>
                {/* HERO SECTION */}
                <section className={styles.hero}>
                    <div className={`container ${styles.heroInner}`}>
                        <div className={styles.heroText}>
                            <span className={styles.heroLabel}>Historias Reales</span>
                            <h1 className={styles.heroTitle}>
                                La transformación se mide en resultados,<br />
                                pero empieza <em>desde adentro</em>.
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Casos reales de PYMEs y mujeres ejecutivas que decidieron liderar con visión, eficiencia y bienestar.
                            </p>
                        </div>
                        <div className={styles.heroStats}>
                            <div className={styles.statCard}>
                                <span className={styles.statNum}>+40</span>
                                <span className={styles.statLabel}>Clientes acompañados</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNum}>8</span>
                                <span className={styles.statLabel}>Semanas promedio de proceso</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNum}>100%</span>
                                <span className={styles.statLabel}>Personalizadas</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED CASE — VIDEO */}
                <FeaturedCase />

                {/* REAL REVIEWS */}
                <section className={`section ${styles.reviewsSection}`}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <span className="section-label">Reseñas Reales</span>
                            <h2 className={styles.sectionTitle}>Lo que dicen quienes ya transformaron su liderazgo</h2>
                            <p className={styles.sectionSub}>Palabras de clientes reales, sin filtros.</p>
                        </div>

                        <div className={styles.reviewsGrid}>
                            {realReviews.map((r) => (
                                <div key={r.id} className={styles.reviewCard}>
                                    <div className={styles.reviewStars}>★★★★★</div>
                                    <p className={styles.reviewText}>&ldquo;{r.text}&rdquo;</p>
                                    <div className={styles.reviewHighlight}>
                                        <span>★</span> {r.highlight}
                                    </div>
                                    <div className={styles.reviewAuthor}>
                                        <div className={styles.reviewAvatar}>{r.name[0]}</div>
                                        <div className={styles.reviewInfo}>
                                            <strong>{r.name}</strong>
                                            <span>{r.role}</span>
                                            <span className={styles.reviewSource}>
                                                <r.SourceIcon size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 3 }} /> {r.source}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section bg-gradient-primary">
                    <div className="container text-center">
                        <h2 className={styles.ctaTitle}>¿Tu historia será el próximo caso de éxito?</h2>
                        <p className={styles.ctaSubtitle}>Si te sentiste identificada con alguno de estos desafíos, el primer paso es conversar.</p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/contacto" className="btn btn-primary btn-lg">Agendar sesión exploratoria sin costo</Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
