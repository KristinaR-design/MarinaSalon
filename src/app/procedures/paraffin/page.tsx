"use client";

import { useLang } from "@/app/components/LanguageProvider";

const content = {
    ru: {
        title: "Парафиновые ванны для рук",
        description:
            "Парафиновые ванны — это SPA-процедура для рук, которая увлажняет и питает кожу, улучшает микроциркуляцию и расслабляет мышцы. Тёплый парафин обволакивает руки, создавая мягкий согревающий эффект, который помогает смягчить огрубевшую кожу, уменьшить сухость и улучшить состояние ногтей.",
        benefits: [
            "Смягчение и увлажнение кожи",
            "Улучшение кровообращения и микроциркуляции",
            "Расслабление мышц рук",
            "Подготовка ногтей к маникюру",
            "Снижение дискомфорта при артритах или сухости кожи",
        ],
        aftercare: [
            "Избегать воды и химических средств первые 24 часа",
            "Не наносить жирные кремы и масла сразу после процедуры",
            "Регулярно увлажнять кожу после парафина для сохранения эффекта",
        ],
    },
    en: {
        title: "Paraffin Hand Baths",
        description:
            "Paraffin baths are a spa treatment for hands that moisturizes and nourishes the skin, improves microcirculation, and relaxes muscles. Warm paraffin envelops the hands, creating a gentle warming effect that softens rough skin, reduces dryness, and enhances nail health.",
        benefits: [
            "Softens and moisturizes the skin",
            "Improves blood circulation and microcirculation",
            "Relaxes hand muscles",
            "Prepares nails for manicure",
            "Reduces discomfort from arthritis or dry skin",
        ],
        aftercare: [
            "Avoid water and harsh chemicals for the first 24 hours",
            "Do not apply heavy creams or oils immediately after the procedure",
            "Moisturize skin regularly after paraffin to maintain effect",
        ],
    },
    de: {
        title: "Paraffinbäder für die Hände",
        description:
            "Paraffinbäder sind eine Spa-Behandlung für Hände, die die Haut mit Feuchtigkeit versorgt und pflegt, die Mikrozirkulation verbessert und die Muskeln entspannt. Warmer Paraffin umhüllt die Hände und erzeugt einen sanften Wärmeeffekt, der raue Haut glättet, Trockenheit reduziert und die Nagelgesundheit verbessert.",
        benefits: [
            "Weicht die Haut auf und spendet Feuchtigkeit",
            "Verbessert die Durchblutung und Mikrozirkulation",
            "Entspannt die Handmuskulatur",
            "Bereitet Nägel für die Maniküre vor",
            "Reduziert Beschwerden bei Arthritis oder trockener Haut",
        ],
        aftercare: [
            "In den ersten 24 Stunden Wasser und Chemikalien vermeiden",
            "Keine fettigen Cremes oder Öle direkt nach der Behandlung auftragen",
            "Haut regelmäßig nach dem Paraffin pflegen, um den Effekt zu erhalten",
        ],
    },
};

export default function ParaffinPage() {
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
