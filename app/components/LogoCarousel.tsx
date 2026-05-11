"use client";

import Image from "next/image";
import styles from "./LogoCarousel.module.css";

const logos = [
  { src: "/logos/Ecoa-Central.png", alt: "Ecoa Central", width: 160, height: 60, type: "image" as const },
  { src: "/logos/dagda-g-azul.png", alt: "Dagda", width: 140, height: 55, type: "image" as const },
  { src: "/logos/logo-003.png", alt: "Empresa asociada", width: 140, height: 55, type: "image" as const },
  { src: "/logos/buccor.svg", alt: "Buccor", width: 160, height: 50, type: "image" as const },
  { src: "/logos/cfi.svg", alt: "CFI", width: 140, height: 50, type: "image" as const },
  { src: "/logos/estructuras-financieras.svg", alt: "Estructuras Financieras", width: 200, height: 50, type: "image" as const },
];

export default function LogoCarousel() {
  // Triple the logos for a truly seamless loop
  const tripled = [...logos, ...logos, ...logos];

  return (
    <section className={styles.section} aria-label="Empresas que confían en Elevare">
      {/* Decorative top line */}
      <div className={styles.topLine} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.label}>Confían en Nosotros</span>
            <span className={styles.dot} aria-hidden="true" />
          </div>
          <h2 className={styles.title}>
            Empresas que ya <em>transformaron</em> su liderazgo
          </h2>
        </div>
      </div>

      <div className={styles.trackWrapper}>
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        <div className={styles.track}>
          {tripled.map((logo, i) => (
            <div key={`${logo.alt}-${i}`} className={styles.logoCard}>
              <div className={styles.logoInner}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={styles.logoImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className={styles.bottomLine} aria-hidden="true" />
    </section>
  );
}
