"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpeg"]; // кладём в /public

export default function Slider() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setI((p) => (p + 1) % images.length), 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <section
            className="relative w-full h-[220px] sm:h-[300px] md:h-[450px] lg:h-[560px] xl:h-[640px]
                 rounded-none sm:rounded-2xl overflow-hidden shadow-xl"
            aria-label="Salon slideshow"
        >
            {images.map((src, idx) => (
                <Image
                    key={src}
                    src={src}
                    alt={`Salon slide ${idx + 1}`}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    className={`object-cover transition-opacity duration-1000 ease-in-out ${i === idx ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}
            {/* затемнение снизу, чтобы текст был читаемым */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </section>
    );
}
