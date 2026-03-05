'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterBadgeProps {
    target: number;
    prefix?: string;
    suffix?: string;
    label: string;
    duration?: number; // ms
    valueClassName?: string;
    labelClassName?: string;
}

export default function CounterBadge({
    target,
    prefix = '',
    suffix = '',
    label,
    duration = 1200,
    valueClassName,
    labelClassName,
}: CounterBadgeProps) {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    useEffect(() => {
        const animate = (timestamp: number) => {
            if (!startRef.current) startRef.current = timestamp;
            const elapsed = timestamp - startRef.current;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.round(eased * target));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [target, duration]);

    return (
        <>
            <span className={valueClassName}>
                {prefix}{count}{suffix}
            </span>
            <span className={labelClassName}>{label}</span>
        </>
    );
}
