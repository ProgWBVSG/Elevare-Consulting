"use client";

import { useState } from "react";
import styles from "./testimonios.module.css";

export default function FeaturedCase() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={`section ${styles.featuredSection}`}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span className="section-label">Caso Destacado</span>
                    <h2 className={styles.sectionTitle}>Andrea — Paraguay Me Inspira</h2>
                    <p className={styles.sectionSub}>
                        Mirá y leé cómo pasó de absorberse ella sola todos los errores a liderar su equipo con claridad.
                    </p>
                </div>

                <div className={styles.featuredCard}>
                    {/* Video */}
                    <div className={styles.featuredVideo}>
                        <div className={styles.videoTagBadge}>▶ Video testimonio</div>
                        <video
                            src="/testimonio-1.mp4"
                            controls
                            playsInline
                            className={styles.video}
                        />
                        <div className={styles.videoOverlay}>
                            <div className={styles.videoAuthor}>
                                <div className={styles.videoAvatar}>A</div>
                                <div>
                                    <strong>Andrea</strong>
                                    <span>Co-fundadora · Paraguay Me Inspira</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Story */}
                    <div className={styles.featuredStory}>
                        <div className={styles.storyTag}>
                            <span>📌 Mentoría Ejecutiva para Mujeres</span>
                        </div>

                        <h3 className={styles.storyTitle}>La historia de Andrea</h3>

                        <p className={styles.storyLead}>
                            ¿Te pasa que terminás el día haciendo de todo? ¿Que cuando tus proveedores fallan, preferís arreglarlo vos misma antes que decir algo?
                        </p>

                        <div className={`${styles.storyContent} ${!isExpanded ? styles.storyContentCollapsed : ''}`}>
                            <div className={styles.storyContentInner}>
                                <p className={styles.storyPara}>
                                    Andrea lidera <strong>Paraguay Me Inspira</strong> junto con sus hermanas. Tenía procesos tercerizados, un equipo... pero igual se encontraba resolviendo todo ella sola. El problema no era la falta de estructura. Era algo más profundo: <strong>no sabía cómo delegar sin sentir que perdía el control.</strong>
                                </p>

                                <div className={styles.storyProcess}>
                                    <h4>Lo que cambió en la mentoría</h4>
                                    <div>
                                        Trabajamos en identificar las dificultades reales del día a día. No teoría. Los problemas concretos que le quitaban energía. Andrea aprendió que exigir estándares no te convierte en una clienta &ldquo;difícil&rdquo;. Te convierte en <strong>una profesional clara.</strong>
                                    </div>
                                </div>

                                <blockquote className={styles.storyQuote}>
                                    <p>&ldquo;Esta mentoría me dio esa mirada externa muy necesaria para pulir mis habilidades y, sobre todo, poder disfrutar más de mi emprendimiento.&rdquo;</p>
                                    <cite>— Andrea, Paraguay Me Inspira</cite>
                                </blockquote>
                            </div>
                        </div>

                        <button
                            className={styles.expandButton}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Ver menos' : 'Saber más'}
                        </button>

                        <div className={styles.storyResult}>
                            <span className={styles.resultIcon}>✓</span>
                            <p>Volvió a disfrutar de lo que construyó, delegando con confianza y sin sobrecargarse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
