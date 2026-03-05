'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade-out after 1.8s
        const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
        // Remove from DOM after fade completes
        const removeTimer = setTimeout(() => setVisible(false), 2400);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}>
            {/* Background particles */}
            <div className={styles.particles}>
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={styles.particle} style={{ '--i': i } as React.CSSProperties} />
                ))}
            </div>

            {/* Logo block */}
            <div className={styles.logoBlock}>
                <div className={styles.logoRing}>
                    <Image
                        src="/logo.png"
                        alt="Elevare Consulting MG"
                        width={80}
                        height={80}
                        className={styles.logoImg}
                        priority
                    />
                </div>
                <div className={styles.brand}>
                    <span className={styles.brandName}>Elevare</span>
                    <span className={styles.brandSub}>Consulting MG</span>
                </div>
            </div>

            {/* Tagline */}
            <p className={styles.tagline}>Transformando líderes desde adentro</p>

            {/* Progress bar */}
            <div className={styles.progressWrap}>
                <div className={styles.progressBar} />
            </div>
        </div>
    );
}
