"use client";

import { useLang } from "@/app/components/LanguageProvider";

export default function SeasonalOffer() {
    const { lang } = useLang();

    const content = {
        ru: {
            title: "Сезонное предложение",
            text: `❄️ В холодное время — забота о себе особенно важна!

Мы предлагаем уникальную процедуру:
шугаринг + парафиновые ванны для рук.

Ваша кожа станет гладкой, нежной и увлажнённой,
а руки — мягкими и тёплыми даже зимой.

Запишитесь уже сегодня и подарите себе комфорт и уход, которого вы заслуживаете! 🌸`,
        },

        de: {
            title: "Saisonangebot",
            text: `❄️ In der kalten Jahreszeit ist Selbstpflege besonders wichtig!

Wir bieten Ihnen eine besondere Behandlung:
Sugaring kombiniert mit Paraffin-Handbädern.

Ihre Haut wird glatt, zart und gepflegt,
und Ihre Hände bleiben weich und warm – selbst im Winter.

Vereinbaren Sie noch heute einen Termin
und gönnen Sie sich das Wohlbefinden, das Sie verdienen! 🌸`,
        },

        en: {
            title: "Seasonal Offer",
            text: `❄️ During the colder season, self-care becomes especially important!

We offer a special treatment:
Sugaring combined with paraffin hand baths.

Your skin will feel smooth, soft and hydrated,
and your hands will stay warm and nourished even in winter.

Book your appointment today and treat yourself to the care you deserve! 🌸`,
        },
    };

    const t = content[lang];

    return (
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fff6e0] via-white to-[#fff0cc] border border-gold/30 shadow-lg p-8 md:p-12">
            {/* glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />

            <h3 className="text-2xl md:text-3xl font-serif text-center mb-4">
                {t.title}
            </h3>

            <p className="whitespace-pre-line text-center text-gray-700 leading-relaxed">
                {t.text}
            </p>
        </section>
    );
}
