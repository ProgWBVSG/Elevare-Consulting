"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import styles from "./LeadMagnetForm.module.css";

export default function LeadMagnetForm() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Enviar a la API de contacto para que lo registre en el CRM (Supabase) y envíe correos
            const contactRes = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre: "Suscripción Newsletter",
                    email,
                    telefono: "",
                    mensaje: "Nuevo suscriptor desde el footer (Newsletter)",
                    tipo: "Newsletter"
                })
            });

            if (!contactRes.ok) {
                console.error("Error guardando en CRM:", await contactRes.text());
            }

            // Send to Google Sheets integration
            try {
                await fetch("/api/leads-to-sheets", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        record: {
                            nombre: "",
                            email,
                            telefono: "",
                            empresa: "",
                            motivo: "Newsletter",
                            mensaje: "",
                            created_at: new Date().toISOString()
                        }
                    })
                });
            } catch (e) {
                console.error("Error enviando a sheets:", e);
            }

            // Send to MailerLite
            try {
                await fetch("/api/mailerlite", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email,
                        nombre: ""
                    })
                });
            } catch (e) {
                console.error("Error enviando a MailerLite:", e);
            }

            setSubmitted(true);
        } catch (globalError) {
            console.error("Error global en el formulario:", globalError);
            alert("Hubo un problema procesando tu solicitud. Por favor intenta nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className={styles.success}>
                <div className={styles.successIconWrap}>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <circle cx="22" cy="22" r="22" fill="#5CA084" fillOpacity="0.12" />
                        <circle cx="22" cy="22" r="16" fill="#5CA084" />
                        <path d="M13 22.5L19 28.5L31 16.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h3 className={styles.successTitle}>¡Suscripción confirmada!</h3>
                <p className={styles.successText}>
                    Ya sos parte de nuestra comunidad. Pronto vas a recibir insights exclusivos de liderazgo en tu casilla.
                </p>
                <button
                    onClick={() => { setSubmitted(false); setEmail(""); }}
                    className={styles.resetBtn}
                >
                    Suscribir otro correo
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputRow}>
                <input
                    type="email"
                    placeholder="tu@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    aria-label="Tu correo electrónico"
                />
                <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Suscribirme"}
                </button>
            </div>
        </form>
    );
}
