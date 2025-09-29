"use client";
import Image from "next/image";
import { useLang } from "@/app/components/LanguageProvider";

export default function About() {
    const { t } = useLang();
    return (
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-8 items-start">
            <div className="card overflow-hidden">
                <Image src="/master.jpg" alt="Master" width={800} height={600} className="w-full h-auto object-cover" />
            </div>
            <div>
                <h1 className="text-3xl md:text-4xl font-serif mb-4">{t.about.title}</h1>
                <p className="text-lg text-gray-700">{t.about.text}</p>
            </div>
        </div>
    );
}
