"use client";

import SeasonalOffer from "@/app/SeasonalOffer";
import { useLang } from "@/app/components/LanguageProvider";


const content = {
    ru: {
        waText: "Марина здравствуйте, хочу записаться на процедуру.",
        book: "Записаться в WhatsApp",
    },
    en: {
        waText: "Hello Marina, I'd like to book an appointment.",
        book: "Book Now in WhatsApp",
    },
    de: {
        waText: "Hallo Marina, ich möchte einen Termin vereinbaren.",
        book: "Termin per WhatsApp",
    },
};

export default function SeasonalPage() {
    const { lang } = useLang();
    const t = content[lang];

    return (
        <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

            <SeasonalOffer />

            <div className="flex justify-center mt-10">
                <a
                    href={`https://wa.me/491629344918?text=${encodeURIComponent(t.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                >
                    {t.book}
                </a>
            </div>

        </main>
    );
}