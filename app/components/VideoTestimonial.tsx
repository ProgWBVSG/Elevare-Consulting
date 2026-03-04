"use client";

import { useState } from "react";
import styles from "./VideoTestimonial.module.css";

interface VideoTestimonialProps {
    name: string;
    role: string;
    company: string;
    videoSrc?: string;
    storyContent: React.ReactNode;
}

export default function VideoTestimonial({
    name,
    role,
    company,
    videoSrc = "/placeholder-video.mp4",
    storyContent,
}: VideoTestimonialProps) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className={styles.container}>
            {/* Video Side */}
            <div className={styles.videoWrapper}>
                <div className={styles.videoContainer}>
                    {videoSrc !== "/placeholder-video.mp4" ? (
                        <video
                            src={videoSrc}
                            controls
                            playsInline
                            className={styles.video}
                        />
                    ) : (
                        <div className={styles.videoPlaceholder}>
                            <span>VIDEO PRÓXIMAMENTE</span>
                            <p>Envíame los videos para agregarlos aquí</p>
                            <div className={styles.playButton}>▶</div>
                        </div>
                    )}
                </div>

                <div className={styles.overlayControls}>
                    <div className={styles.authorInfo}>
                        <h4>{name}</h4>
                        <p><strong>{role}</strong>, {company}</p>
                    </div>
                    <button
                        className={`btn btn-primary ${styles.infoButton}`}
                        onClick={() => setShowInfo(!showInfo)}
                    >
                        {showInfo ? 'Ver menos' : 'Saber más'}
                    </button>
                </div>
            </div>

            {/* Info Panel */}
            <div className={`${styles.infoPanel} ${showInfo ? styles.showPanel : ''}`}>
                <div className={styles.infoContent}>
                    {storyContent}
                    <button
                        className={styles.closeMobile}
                        onClick={() => setShowInfo(false)}
                    >
                        ✕ Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
