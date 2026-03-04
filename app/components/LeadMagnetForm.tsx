"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import styles from "./LeadMagnetForm.module.css";

export default function LeadMagnetForm() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Send to Supabase
        await supabase.from("leads").insert([{
            nombre,
            email,
            motivo: "Descarga Checklist",
        }]);

        // Send directly to API Route (Sheets Integration)
        try {
            await fetch("/api/leads-to-sheets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    record: {
                        nombre,
                        email,
                        telefono: "",
                        empresa: "",
                        motivo: "Descarga Checklist",
                        mensaje: "",
                        created_at: new Date().toISOString()
                    }
                })
            });
        } catch (e) {
            console.error("Error envoyando a sheets:", e);
        }

        setLoading(false);
        setSubmitted(true);
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
                <h3 className={styles.successTitle}>¡Checklist enviado!</h3>
                <p className={styles.successText}>
                    Revisá tu casilla de correo — te lo estaremos enviando a la brevedad.
                </p>
                <button
                    onClick={() => { setSubmitted(false); setNombre(""); setEmail(""); }}
                    className={styles.resetBtn}
                >
                    Volver al formulario
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                placeholder="Tu Nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={styles.input}
            />
            <input
                type="email"
                placeholder="Tu Correo Electrónico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
            />
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} disabled={loading}>
                {loading ? "Enviando..." : "Descargar Checklist Gratuito"}
            </button>
        </form>
    );
}
