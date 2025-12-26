"use client";

import { useLang } from "@/app/components/LanguageProvider";

const content = {
    ru: {
        title: "Гелевое покрытие ногтей",
        slogan: "Твои ногти – твоя визитная карточка! Стильный дизайн, который подчеркнёт твою индивидуальность.",
        description:
            "Гелевое покрытие ногтей — это современная процедура, которая придаёт ногтям идеальную форму, блеск и прочность. Гель наносится на натуральные ногти, укрепляет их и защищает от ломкости. Процедура позволяет создавать как естественный, так и яркий дизайн ногтей, устойчивый к сколам и повреждениям на протяжении 2–3 недель.",
        benefits: [
            "Прочность и защита натуральных ногтей",
            "Красивый блеск и аккуратная форма",
            "Долговременный результат (2–3 недели)",
            "Возможность создания разнообразного дизайна",
            "Снижает ломкость и расслаивание ногтей",
        ],
        aftercare: [
            "Не использовать ногти как инструмент для открывания предметов",
            "Избегать длительного контакта с горячей водой первые 24 часа",
            "Регулярно наносить масло для кутикулы для поддержания здоровья ногтей",
            "Не снимать гель самостоятельно — только у мастера",
        ],
    },
    en: {
        title: "Gel Nail Coating",
        slogan: "Your nails are your business card! Stylish design that highlights your individuality.",
        description:
            "Gel nail coating is a modern procedure that gives nails perfect shape, shine, and strength. The gel is applied on natural nails, strengthening and protecting them from breakage. This procedure allows for both natural and bright nail designs, resistant to chips and damage for 2–3 weeks.",
        benefits: [
            "Strength and protection for natural nails",
            "Beautiful shine and neat shape",
            "Long-lasting result (2–3 weeks)",
            "Variety of design possibilities",
            "Reduces nail breakage and splitting",
        ],
        aftercare: [
            "Do not use nails as tools to open objects",
            "Avoid prolonged contact with hot water for the first 24 hours",
            "Regularly apply cuticle oil to maintain nail health",
            "Do not remove gel yourself — only by a professional",
        ],
    },
    de: {
        title: "Gel-Nagelbeschichtung",
        slogan: "Deine Nägel – deine Visitenkarte! Stylisches Design, das deine Persönlichkeit unterstreicht.",
        description:
            "Die Gel-Nagelbeschichtung ist ein modernes Verfahren, das den Nägeln perfekte Form, Glanz und Stärke verleiht. Das Gel wird auf die Naturnägel aufgetragen, stärkt sie und schützt vor Brüchen. Das Verfahren ermöglicht sowohl natürliche als auch auffällige Nageldesigns, die 2–3 Wochen lang widerstandsfähig gegen Absplitterungen und Schäden sind.",
        benefits: [
            "Stärke und Schutz der Naturnägel",
            "Schöner Glanz und gepflegte Form",
            "Langanhaltendes Ergebnis (2–3 Wochen)",
            "Vielfalt an Designmöglichkeiten",
            "Reduziert Nagelbruch und Schichtungen",
        ],
        aftercare: [
            "Nägel nicht als Werkzeug zum Öffnen von Gegenständen verwenden",
            "In den ersten 24 Stunden längeren Kontakt mit heißem Wasser vermeiden",
            "Regelmäßig Nagelhautöl auftragen, um die Nagelgesundheit zu erhalten",
            "Gel nicht selbst entfernen — nur beim Profi",
        ],
    },
};

export default function GelNailsPage() {
    const { lang } = useLang();
    const t = content[lang];

    return (
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
            {/* Заголовок */}
            <h1 className="relative text-4xl md:text-5xl font-serif text-center text-gray-900 dark:text-white mx-auto">
                {t.title}
                {/* Верхняя линия */}
                <span className="absolute left-1/2 -translate-x-1/2 -top-4 w-36 h-1 rounded-full bg-gold/70 shadow-md"></span>
                {/* Нижняя линия */}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-36 h-1 rounded-full bg-gold/70 shadow-md"></span>
            </h1>

            {/* Слоган */}
            <p className="text-center text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
                {t.slogan}
            </p>

            {/* Блок Описание */}
            <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-gold/30 transition-shadow duration-500">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {lang === "ru" ? "Описание" : lang === "de" ? "Beschreibung" : "Description"}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{t.description}</p>
            </div>

            {/* Блок Преимущества */}
            <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-gold/30 transition-shadow duration-500">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {lang === "ru"
                        ? "Преимущества процедуры"
                        : lang === "de"
                            ? "Vorteile der Behandlung"
                            : "Benefits of the treatment"}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
                    {t.benefits.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Блок Уход после процедуры */}
            <div className="bg-gradient-to-r from-gold/20 to-gold/5 dark:from-gold/30 dark:to-gold/10 rounded-2xl p-8 shadow-lg text-gray-900 dark:text-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {lang === "ru"
                        ? "Уход после процедуры"
                        : lang === "de"
                            ? "Nachsorge"
                            : "Aftercare"}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
                    {t.aftercare.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
