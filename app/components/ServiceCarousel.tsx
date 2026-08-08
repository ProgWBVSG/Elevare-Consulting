"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ServiceCarousel.module.css";

type Slide = {
  title: string;
  image: string;
  href: string;
};

const slides: Slide[] = [
  { title: "Estructura de Financiamiento", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop", href: "/servicios" },
  { title: "Desarrollo Organizacional", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", href: "/servicios" },
  { title: "Academia de Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop", href: "/servicios" },
  { title: "Desarrollo de Liderazgo", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", href: "/servicios" },
  { title: "Gestión de Procesos", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", href: "/servicios" },
  { title: "Diseño Organizacional", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop", href: "/servicios" },
];

export default function ServiceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const step = useCallback((dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector<HTMLElement>("[data-card]");
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 24;
    const cardWidth = firstCard ? firstCard.offsetWidth + gap : track.clientWidth * 0.9;

    // Wrap to start when reaching the end while advancing.
    if (dir > 0 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 8) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (dir < 0 && track.scrollLeft <= 8) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
      return;
    }
    track.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = setInterval(() => {
      if (!pausedRef.current) step(1);
    }, 4000);
    return () => clearInterval(id);
  }, [step]);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocusCapture={() => (pausedRef.current = true)}
      onBlurCapture={() => (pausedRef.current = false)}
    >
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => step(-1)}
        aria-label="Anterior"
      >
        <ChevronLeft size={22} />
      </button>

      <div className={styles.track} ref={trackRef}>
        {slides.map((s, i) => (
          <Link key={s.title} href={s.href} className={styles.card} data-card>
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={i < 3}
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
              className={styles.cardImg}
            />
            <span className={styles.cardOverlay} aria-hidden="true" />
            <span className={styles.cardLabel}>{s.title}</span>
          </Link>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => step(1)}
        aria-label="Siguiente"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
