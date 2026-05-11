'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
    target: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    className?: string;
    threshold?: number;
}

export default function AnimatedCounter({
    target,
    prefix = '',
    suffix = '',
    duration = 1800,
    className = '',
    threshold = 0.3,
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    // Trigger on scroll into view
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, hasStarted]);

    // Animate count
    useEffect(() => {
        if (!hasStarted) return;

        const animate = (timestamp: number) => {
            if (!startRef.current) startRef.current = timestamp;
            const elapsed = timestamp - startRef.current;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [hasStarted, target, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
}
