"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;     // ms
  duration?: number;  // ms
  threshold?: number; // 0-1
  once?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: number;   // ms delay per child index
  index?: number;     // child index for stagger
}

const variantStyles: Record<AnimationVariant, { from: string; to: string }> = {
  "fade-up":    { from: "translate3d(0, 40px, 0) scale(1)",    to: "translate3d(0, 0, 0) scale(1)" },
  "fade-down":  { from: "translate3d(0, -40px, 0) scale(1)",   to: "translate3d(0, 0, 0) scale(1)" },
  "fade-left":  { from: "translate3d(-50px, 0, 0) scale(1)",   to: "translate3d(0, 0, 0) scale(1)" },
  "fade-right": { from: "translate3d(50px, 0, 0) scale(1)",    to: "translate3d(0, 0, 0) scale(1)" },
  "zoom-in":    { from: "translate3d(0, 20px, 0) scale(0.92)", to: "translate3d(0, 0, 0) scale(1)" },
  "zoom-out":   { from: "translate3d(0, 0, 0) scale(1.08)",    to: "translate3d(0, 0, 0) scale(1)" },
  "flip-up":    { from: "translate3d(0, 30px, 0) rotateX(8deg) scale(0.96)", to: "translate3d(0, 0, 0) rotateX(0deg) scale(1)" },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  once = true,
  className = "",
  as: Tag = "div",
  stagger = 0,
  index = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const totalDelay = delay + stagger * index;
  const { from, to } = variantStyles[variant];

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? to : from,
    transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${totalDelay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${totalDelay}ms`,
    willChange: "opacity, transform",
  };

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
