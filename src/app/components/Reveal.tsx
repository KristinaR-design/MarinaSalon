"use client";
import { useEffect, useRef, useState, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    className?: string;
    once?: boolean;       // true = анимировать один раз
    threshold?: number;   // доля видимости (0..1)
}>;

export default function Reveal({ children, className = "", once = true, threshold = 0.15 }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) io.unobserve(el);
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [once, threshold]);

    return (
        <div ref={ref} className={`reveal ${visible ? "show" : ""} ${className}`}>
            {children}
        </div>
    );
}
