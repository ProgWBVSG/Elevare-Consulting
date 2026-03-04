"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { supabase } from "@/lib/supabase";
import styles from "./contacto.module.css";

const reasons = [
    "Coaching interno para mi empresa",
    "Mentoría ejecutiva para mujeres",
    "Consultoría de procesos y gestión",
    "Diagnóstico organizacional",
    "Taller o capacitación grupal",
    "Otro / múltiple",
];

export default function ContactoPage() {
    const [form, setForm] = useState({
        nombre: "", email: "", telefono: "", empresa: "", motivo: "", mensaje: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const { error: sbError } = await supabase.from("leads").insert([{
            nombre: form.nombre,
            email: form.email,
            telefono: form.telefono || null,
            empresa: form.empresa || null,
            motivo: form.motivo || null,
            mensaje: form.mensaje || null,
        }]);
        setLoading(false);
        if (sbError) {
            setError("Hubo un error al enviar el formulario. Por favor intentá de nuevo.");
            console.error(sbError);
        } else {
            // Send directly to API Route (Sheets Integration)
            fetch("/api/leads-to-sheets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    record: {
                        nombre: form.nombre,
                        email: form.email,
                        telefono: form.telefono || "",
                        empresa: form.empresa || "",
                        motivo: form.motivo || "",
                        mensaje: form.mensaje || "",
                        created_at: new Date().toISOString()
                    }
                })
            }).catch(e => console.error("Error envío a Sheets:", e));

            setSubmitted(true);
        }
    };


    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className="text-center">
                            <span className={`section-label ${styles.labelWhite}`}>Contacto</span>
                            <h1 className={styles.heroTitle}>Empezamos con una conversación</h1>
                            <p className={styles.heroDesc}>
                                Agendá una sesión exploratoria gratuita de 30 minutos. Sin compromiso. Conversamos sobre tus desafíos y evaluamos juntos la mejor manera de ayudarte.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={`section`}>
                    <div className="container">
                        <div className={styles.grid}>
                            {/* Form */}
                            <div className={styles.formCol}>
                                {submitted ? (
                                    <div className={styles.successBox}>
                                        <div className={styles.successIcon}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="24" cy="24" r="24" fill="#5CA084" fillOpacity="0.12" />
                                                <circle cx="24" cy="24" r="18" fill="#5CA084" />
                                                <path d="M15 24.5L21 30.5L33 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <h2>¡Formulario enviado!</h2>
                                        <p>Gracias por comunicarte. María va a estar en contacto con vos dentro de las próximas <strong>24-48 horas</strong> para coordinar tu sesión exploratoria gratuita.</p>
                                        <button
                                            onClick={() => { setSubmitted(false); setForm({ nombre: "", email: "", telefono: "", empresa: "", motivo: "", mensaje: "" }); }}
                                            className={styles.resetBtn}
                                        >
                                            Rehacer formulario
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className={styles.form} noValidate>
                                        <h2 className={styles.formTitle}>Contanos tu situación</h2>
                                        <p className={styles.formSubtitle}>Cuanta más información nos des, mejor podremos preparar la sesión para que sea útil desde el primer minuto.</p>

                                        <div className={styles.formRow}>
                                            <div className="form-group">
                                                <label htmlFor="nombre" className="form-label">Nombre y Apellido *</label>
                                                <input id="nombre" name="nombre" type="text" required className="form-input"
                                                    placeholder="Tu nombre completo" value={form.nombre} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email" className="form-label">Email profesional *</label>
                                                <input id="email" name="email" type="email" required className="form-input"
                                                    placeholder="tu@empresa.com" value={form.email} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className={styles.formRow}>
                                            <div className="form-group">
                                                <label htmlFor="telefono" className="form-label">Teléfono / WhatsApp *</label>
                                                <input id="telefono" name="telefono" type="tel" required className="form-input"
                                                    placeholder="+54 9 11 XXXX-XXXX" value={form.telefono} onChange={handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="empresa" className="form-label">Empresa u Organización</label>
                                                <input id="empresa" name="empresa" type="text" className="form-input"
                                                    placeholder="Nombre de tu empresa" value={form.empresa} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="motivo" className="form-label">¿Sobre qué te gustaría conversar? *</label>
                                            <select id="motivo" name="motivo" required className="form-select" value={form.motivo} onChange={handleChange}>
                                                <option value="">Seleccioná una opción</option>
                                                {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="mensaje" className="form-label">Contame tu principal desafío *</label>
                                            <textarea id="mensaje" name="mensaje" required className="form-textarea"
                                                placeholder="Describí brevemente cuál es la situación que querés resolver o el objetivo que querés alcanzar. Cuanto más específico, mejor."
                                                value={form.mensaje} onChange={handleChange} />
                                        </div>

                                        <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`} disabled={loading}>
                                            {loading ? "Enviando..." : "Agendar mi sesión exploratoria gratuita"}
                                        </button>
                                        {error && (
                                            <p style={{ color: "red", fontSize: "0.9rem", marginTop: "0.5rem" }}>{error}</p>
                                        )}
                                        <p className={styles.disclaimer}>
                                            Tu información es confidencial y no será compartida. Te respondemos en 24-48 horas hábiles.
                                        </p>
                                    </form>
                                )}
                            </div>

                            {/* Info sidebar */}
                            <div className={styles.sidebar}>
                                <div className={styles.sideCard}>
                                    <h3>¿Qué pasa en la sesión?</h3>
                                    <ul className={styles.sideList}>
                                        {[
                                            { icon: "💬", text: "Escuchamos tu situación actual: desafíos, contexto, objetivos" },
                                            { icon: "🔍", text: "Evaluamos juntos si el coaching / mentoría es la solución que necesitás" },
                                            { icon: "🗺️", text: "Te explicamos cómo trabajamos y qué proceso propone Elevare" },
                                            { icon: "📋", text: "Si hay fit, te presentamos una propuesta a medida en los días siguientes" },
                                        ].map(item => (
                                            <li key={item.text} className={styles.sideItem}>
                                                <span>{item.icon}</span>
                                                <span>{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.sideCard} style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))", color: "#fff" }}>
                                    <h3 style={{ color: "#fff" }}>Sobre María Gómez</h3>
                                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "var(--text-sm)", lineHeight: "1.75", marginBottom: "1rem" }}>
                                        20+ años de experiencia en coaching ontológico y desarrollo de liderazgo empresarial en Argentina y LATAM. Alianzas en Paraguay, Uruguay y Chile.
                                    </p>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                        {["20+ años de experiencia comprobada", "Coaching ontológico profundo", "Presencia en 4 países LATAM", "Mentoría especializada en mujeres ejecutivas"].map(f => (
                                            <span key={f} style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.7)", display: "flex", gap: "0.5rem" }}>
                                                <span style={{ color: "var(--color-accent-light)" }}>✓</span> {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.sideCard}>
                                    <h3>Otras formas de contactar</h3>
                                    <div className={styles.contactLinks}>
                                        <a href="https://www.linkedin.com/company/elevare-consulting-729079200" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                            <span>💼</span> LinkedIn — Elevare Consulting
                                        </a>
                                        <a href="https://www.instagram.com/elevareconsultingmg" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                            <span>📸</span> Instagram — @elevareconsultingmg
                                        </a>
                                        <a href="mailto:contacto@elevareconsultingmg.com" className={styles.contactLink}>
                                            <span>📧</span> contacto@elevareconsultingmg.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
