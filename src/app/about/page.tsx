"use client";
import Image from "next/image";
import { useLang } from "@/app/components/LanguageProvider";
import Slider from "@/app/components/Slider";

export default function About() {
    const { t } = useLang();

    return (
        <>
            <div className="max-w-6xl mx-auto px-5 py-10 md:py-16 space-y-8">
                <Slider />
            </div>
            <section className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-start">

                <div>

                    <h1 className="text-3xl md:text-4xl font-serif mb-4">
                        {t.salon?.title ?? "Über den Salon"}
                    </h1>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        {t.salon?.text1 ?? "Individuelle Pflege, präzises Sugaring und entspannende Rituale. Wir arbeiten achtsam und mit Liebe zu Details."}
                    </p>
                    <br />
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {t.salon?.text2 ?? "Individuelle Pflege, präzises Sugaring und entspannende Rituale. Wir arbeiten achtsam und mit Liebe zu Details."}
                    </p>
                    <br />
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {t.salon?.text3 ?? "Individuelle Pflege, präzises Sugaring und entspannende Rituale. Wir arbeiten achtsam und mit Liebe zu Details."}
                    </p>
                    <br />
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {t.salon?.text4 ?? "Individuelle Pflege, präzises Sugaring und entspannende Rituale. Wir arbeiten achtsam und mit Liebe zu Details."}
                    </p>
                </div>

                <div className="relative mx-auto self-center w-full max-w-[520px] md:max-w-none md:w-[90%] lg:w-[85%] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/salon.jpg"
                        alt="Salon"
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 520px"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section >
        </>
    );
}