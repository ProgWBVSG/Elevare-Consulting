"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import { supabase } from "@/lib/supabase";
import styles from "./contacto.module.css";
import { MessageSquare, Target, Briefcase, Linkedin, Instagram, Mail, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

const reasons = [
    "Coaching interno para mi empresa",
    "Mentoría ejecutiva para mujeres",
    "Consultoría de procesos y gestión",
    "Diagnóstico organizacional",
    "Taller o capacitación grupal",
    "Otro / múltiple",
];

export default function ContactoPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [form, setForm] = useState({
        nombre: "", email: "", telefono: "", empresa: "", motivo: "", mensaje: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setError(null);
        if (currentStep === 1) {
            if (!form.nombre || !form.email || !form.telefono) {
                setError("Por favor completá los datos personales antes de avanzar.");
                return;
            }
        }
        if (currentStep === 2) {
            if (!form.empresa || !form.motivo) {
                setError("Por favor seleccioná tu empresa y motivo de consulta.");
                return;
            }
        }
        setCurrentStep((prev) => Math.min(prev + 1, 3));
    };

    const handleBack = () => {
        setError(null);
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.mensaje) {
            setError("Por favor describí brevemente tu desafío.");
            return;
        }

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
            try {
                const sheetsRes = await fetch("/api/leads-to-sheets", {
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
                });
            } catch (e) {
                console.error("Error de red enviando a Sheets:", e);
            }

            // Send to MailerLite API Route
            try {
                const mlRes = await fetch("/api/mailerlite", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: form.email,
                        nombre: form.nombre
                    })
                });
            } catch (e) {
                console.error("Error de red enviando a MailerLite:", e);
            }

            setSubmitted(true);
        }
    };

    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <div className="text-center">
                            <span className={`section-label ${styles.labelWhite}`}>Contacto</span>
                            <h1 className={styles.heroTitle}>Empezamos con una conversación</h1>
                            <p className={styles.heroDesc}>
                                Agendá una sesión exploratoria gratuita de 30 minutos. Sin compromiso.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={`section`}>
                    <div className="container">
                        <div className={styles.grid}>
                            {/* Form Column */}
                            <ScrollReveal variant="fade-right">
                                <div className={styles.formCol}>
                                    {submitted ? (
                                        <div className={styles.successElegant}>
                                            <CheckCircle2 size={56} color="var(--color-accent)" />
                                            <h2>Listo, se envió.</h2>
                                            <p>Estaremos en contacto. Muchas gracias.</p>
                                        </div>
                                    ) : (
                                        <div className={styles.form}>
                                            <div className={styles.progressContainer}>
                                                <div className={`${styles.progressStep} ${currentStep >= 1 ? styles.progressStepActive : ''}`}>1</div>
                                                <div className={`${styles.progressStep} ${currentStep >= 2 ? (currentStep > 2 ? styles.progressStepCompleted : styles.progressStepActive) : ''}`}>2</div>
                                                <div className={`${styles.progressStep} ${currentStep === 3 ? styles.progressStepActive : ''}`}>3</div>
                                            </div>

                                            <h2 className={styles.formTitle}>
                                                {currentStep === 1 && "Datos de Contacto"}
                                                {currentStep === 2 && "Sobre la Organización"}
                                                {currentStep === 3 && "Tu Desafío Actual"}
                                            </h2>
                                            <p className={styles.formSubtitle}>Paso {currentStep} de 3</p>

                                            {currentStep === 1 && (
                                                <div className={styles.stepContainer}>
                                                    <div className={styles.formRow}>
                                                        <div className="form-group">
                                                            <label htmlFor="nombre" className="form-label">Nombre Completo *</label>
                                                            <input id="nombre" name="nombre" type="text" className="form-input" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="email" className="form-label">Email Profesional *</label>
                                                            <input id="email" name="email" type="email" className="form-input" placeholder="tu@empresa.com" value={form.email} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="telefono" className="form-label">Teléfono / WhatsApp *</label>
                                                        <input id="telefono" name="telefono" type="tel" className="form-input" placeholder="+54 9 11 XXXX-XXXX" value={form.telefono} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            )}

                                            {currentStep === 2 && (
                                                <div className={styles.stepContainer}>
                                                    <div className="form-group">
                                                        <label htmlFor="empresa" className="form-label">Nombre de la Empresa o Rubro *</label>
                                                        <input id="empresa" name="empresa" type="text" className="form-input" placeholder="Ej: Elevare Consulting" value={form.empresa} onChange={handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="motivo" className="form-label">¿Sobre qué te gustaría conversar? *</label>
                                                        <select id="motivo" name="motivo" className="form-select" value={form.motivo} onChange={handleChange}>
                                                            <option value="">Seleccioná una opción</option>
                                                            {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                            )}

                                            {currentStep === 3 && (
                                                <div className={styles.stepContainer}>
                                                    <div className="form-group">
                                                        <label htmlFor="mensaje" className="form-label">¿Cuál es tu situación o desafío principal? *</label>
                                                        <textarea id="mensaje" name="mensaje" rows={4} className="form-textarea" placeholder="Describí brevemente cuál es la situación que querés resolver..." value={form.mensaje} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            )}

                                            {error && (
                                                <p style={{ color: "red", fontSize: "0.9rem", marginTop: "0.5rem" }}>{error}</p>
                                            )}

                                            <div className={styles.btnGroup}>
                                                {currentStep > 1 && (
                                                    <button type="button" onClick={handleBack} className={styles.btnBack}>
                                                        Volver
                                                    </button>
                                                )}
                                                
                                                {currentStep < 3 ? (
                                                    <button type="button" onClick={handleNext} className={styles.btnNext}>
                                                        Siguiente <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                                                    </button>
                                                ) : (
                                                    <button type="button" onClick={handleSubmit} className={styles.btnNext} disabled={loading}>
                                                        {loading ? "Enviando..." : "Finalizar y Enviar"}
                                                    </button>
                                                )}
                                            </div>
                                            
                                            <p className={styles.disclaimer} style={{ marginTop: '1rem' }}>
                                                Tu información es confidencial y no será compartida.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>

                            {/* Info sidebar - Minimalist & Elegant */}
                            <ScrollReveal variant="fade-left" delay={200}>
                                <div className={styles.sidebar}>
                                    <div className={styles.sideCard} style={{ background: "transparent", border: "1px solid var(--color-gray-200)", padding: "var(--space-8)" }}>
                                        <h3 style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}>En la Sesión Exploratoria:</h3>
                                        <ul className={styles.sideList}>
                                            <li className={styles.sideItem}>
                                                <MessageSquare size={20} color="var(--color-primary)" />
                                                <span>Escuchamos tus objetivos y el contexto actual de tu gestión.</span>
                                            </li>
                                            <li className={styles.sideItem}>
                                                <Target size={20} color="var(--color-primary)" />
                                                <span>Evaluamos si nuestra metodología se alinea con tu desafío.</span>
                                            </li>
                                            <li className={styles.sideItem}>
                                                <Briefcase size={20} color="var(--color-primary)" />
                                                <span>Te presentamos un plan de acción ejecutivo a medida.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={styles.sideCard} style={{ background: "var(--color-cream)", border: "none" }}>
                                        <h3 style={{ marginBottom: "1rem" }}>Contacto Directo</h3>
                                        <div className={styles.contactLinks}>
                                            <a href="mailto:contacto@elevareconsultingmg.com" className={styles.contactLink}>
                                                <Mail size={18} color="var(--color-primary)" />
                                                contacto@elevareconsultingmg.com
                                            </a>
                                            <a href="https://www.linkedin.com/in/elevare-consulting-729079200?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                                <Linkedin size={18} color="var(--color-primary)" />
                                                LinkedIn
                                            </a>
                                            <a href="https://www.instagram.com/elevareconsultingmg" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                                <Instagram size={18} color="var(--color-primary)" />
                                                Instagram
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
