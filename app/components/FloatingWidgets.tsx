"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./FloatingWidgets.module.css";

type FloatingWidgetsProps = {
    waPhone: string;
    waMsg: string;
};

const frequentQuestions = [
    "¿Qué hace Elevare Consulting?",
    "¿Qué es el Método Elevare?",
    "¿En qué áreas trabajan?",
    "¿Cómo empiezo a trabajar con ustedes?",
];

type Message = {
    text: string;
    sender: "bot" | "user";
};

export default function FloatingWidgets({ waPhone, waMsg }: FloatingWidgetsProps) {
    const pathname = usePathname();
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [showNudge, setShowNudge] = useState(false);

    const whatsappUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`;
    const isAdmin = pathname.startsWith("/admin");

    // Aviso breve junto al globo, para que se note que el asistente responde
    // preguntas. Aparece una sola vez por sesión y se guarda al descartarlo.
    useEffect(() => {
        if (isAdmin) return;
        if (sessionStorage.getItem("elevare-nudge-visto")) return;
        const show = setTimeout(() => setShowNudge(true), 2500);
        const hide = setTimeout(() => setShowNudge(false), 14000);
        return () => {
            clearTimeout(show);
            clearTimeout(hide);
        };
    }, [isAdmin]);

    const dismissNudge = () => {
        setShowNudge(false);
        sessionStorage.setItem("elevare-nudge-visto", "1");
    };

    // No mostrar widgets flotantes en el panel de admin
    if (isAdmin) {
        return null;
    }

    const handleQuestionClick = (question: string) => {
        let response = "Buena pregunta. Para responderte con precisión sobre tu caso, escribinos por WhatsApp o pedí tu diagnóstico desde la página de Contacto.";

        if (question.includes("qué hace Elevare") || question.includes("hace Elevare")) {
            response = "Somos una consultora de negocios. Acompañamos a empresas que ya facturan pero necesitan estructura: ordenamos procesos, equipos, números y tecnología, con un diagnóstico basado en ciencias del comportamiento.";
        } else if (question.includes("Método Elevare")) {
            response = "Trabajamos en cuatro fases: diagnóstico (medimos el punto de partida con KPIs), propuesta a medida, ejecución con seguimiento activo, y medición de resultados contra esa línea base.";
        } else if (question.includes("áreas")) {
            response = "Cuatro áreas que se combinan según lo que necesites primero: Desarrollo Organizacional, Academia de Retail, Estructuración de Financiamiento y Tecnología.";
        } else if (question.includes("empiezo")) {
            response = "Se empieza por el diagnóstico, sin costo ni compromiso. Escuchamos tu situación y te damos una devolución concreta sobre por dónde conviene intervenir. Podés pedirlo desde la página de Contacto.";
        }

        setMessages([...messages, { text: question, sender: "user" }, { text: response, sender: "bot" }]);
    };

    return (
        <div className={styles.widgetContainer}>
            <div className={styles.assistantWrapper}>
                {chatOpen && (
                    <div className={styles.chatWindow}>
                        <div className={styles.chatHeader}>
                            <div className={styles.headerInfo}>
                                <div className={styles.avatar}>
                                    <Image src="/logo.png" alt="Elevare" width={28} height={28} style={{ objectFit: "contain", width: "28px", height: "28px" }} />
                                </div>
                                <div className={styles.headerTitles}>
                                    <strong>Asistente Elevare</strong>
                                    <span>Preguntas frecuentes</span>
                                </div>
                            </div>
                            <button className={styles.closeBtn} onClick={() => setChatOpen(false)} aria-label="Cerrar chat">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <div className={styles.chatBody}>
                            {/* Mensaje de bienvenida inicial fijo simulando de IA */}
                            <div className={styles.welcomeMessage}>
                                ¡Hola! 👋 Soy el asistente de <strong>Elevare</strong>. Tocá una pregunta para que te ayude:
                            </div>

                            {/* Opciones se muestran si no hay preguntas aún hechas */}
                            {messages.length === 0 && (
                                <div className={styles.questionOptions}>
                                    {frequentQuestions.map((q, i) => (
                                        <button key={i} className={styles.questionCard} onClick={() => handleQuestionClick(q)}>
                                            <span>{q}</span>
                                            <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Historial de la conversacion una vez que el usuario clickea */}
                            {messages.map((msg, i) => (
                                <div key={i} className={`${styles.message} ${styles[msg.sender]}`}>
                                    {msg.text}
                                </div>
                            ))}

                            {/* Botón para resetear una vez empezamos a hablar */}
                            {messages.length > 0 && (
                                <button className={styles.resetBtn} onClick={() => setMessages([])}>
                                    Ver más preguntas
                                </button>
                            )}
                        </div>

                        <div className={styles.chatFooter}>
                            <p className={styles.footerText}>
                                ¿Necesitás asistencia personalizada?
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Escribinos por WhatsApp</a>
                            </p>
                        </div>
                    </div>
                )}

                {showNudge && !chatOpen && (
                    <div className={styles.nudge} role="status">
                        <button
                            type="button"
                            className={styles.nudgeText}
                            onClick={() => {
                                setChatOpen(true);
                                dismissNudge();
                            }}
                        >
                            Contesto tus preguntas acá
                        </button>
                        <button
                            type="button"
                            className={styles.nudgeClose}
                            onClick={dismissNudge}
                            aria-label="Cerrar aviso"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                )}

                <button
                    className={styles.assistantBtn}
                    onClick={() => {
                        setChatOpen(!chatOpen);
                        dismissNudge();
                    }}
                    aria-label="Abrir asistente de preguntas frecuentes"
                >
                    <Image src="/logo.png" alt="Elevare" width={32} height={32} style={{ objectFit: "contain", width: "32px", height: "32px", display: "block" }} />
                </button>
            </div>

            {/* 1. Botón WhatsApp original sin tocar (se ve igual) */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
                aria-label="Chatear por WhatsApp"
            >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825.001 6.938 3.113 6.938 6.938-.001 3.825-3.114 6.938-6.938 6.938z" />
                </svg>
            </a>
        </div>
    );
}
