"use client";

import { useState } from "react";
import styles from "./FloatingWidgets.module.css";

const whastappNumber = "+5491112345678"; // Reemplazar
const whatsappMsg = "Hola, estoy visitando el sitio de Elevare y me gustaría hacer una consulta.";
const whatsappUrl = `https://wa.me/${whastappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

const frequentQuestions = [
    "¿Qué es el Coaching Ontológico?",
    "¿Qué es el método Elevare?",
    "¿Qué mentorías ofrecen?",
    "¿La consultoría empresarial es online?",
];

type Message = {
    text: string;
    sender: "bot" | "user";
};

export default function FloatingWidgets() {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    const handleQuestionClick = (question: string) => {
        let response = "Interesante pregunta. Para darte la mejor respuesta, sumate a una sesión exploratoria con María en la página de Contacto.";

        if (question.includes("Coaching Ontológico")) {
            response = "El coaching ontológico trabaja desde el SER del líder: sus creencias, su comunicación y su mundo emocional profundo para generar cambios orgánicos y sostenibles.";
        } else if (question.includes("método Elevare")) {
            response = "Nuestro método combina profundidad ontológica psicológica con aplicabilidad inmediata. Transformamos líderes desarrollando sistemas estructurales que luego funcionan solos.";
        } else if (question.includes("mentorías")) {
            response = "Ofrecemos Mentoría Ejecutiva especializada para mujeres líderes, abordando desafíos como el síndrome del impostor, comunicación asertiva y doble carga de expectativas.";
        } else if (question.includes("online")) {
            response = "Sí, trabajamos ágilmente con líderes en Argentina, Paraguay, Uruguay y Chile mediante modalidad virtual, o híbrida para ciertos diagnósticos y workshops.";
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
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/logo.png" alt="Elevare" width={28} height={28} style={{ objectFit: "contain", width: "28px", height: "28px" }} />
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

                <button
                    className={styles.assistantBtn}
                    onClick={() => setChatOpen(!chatOpen)}
                    aria-label="Abrir asistente de preguntas frecuentes"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.png" alt="Elevare" width={32} height={32} style={{ objectFit: "contain", width: "32px", height: "32px", display: "block" }} />
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
