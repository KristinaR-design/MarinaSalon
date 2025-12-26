"use client";

import { useLang } from "@/app/components/LanguageProvider";

const content = {
    ru: {
        title: "Wellness процедуры",
        description:
            "Wellness процедуры — это комплекс расслабляющих и оздоровительных процедур, направленных на улучшение общего состояния организма, снятие стресса и усталости. Они помогают улучшить циркуляцию, расслабить мышцы, нормализовать сон и повысить настроение.",
        benefits: [
            "Снижение стресса и напряжения",
            "Улучшение кровообращения",
            "Расслабление мышц и суставов",
            "Повышение тонуса и энергии",
            "Общее оздоровление организма",
        ],
        aftercare: [
            "Не подвергайте организм сильным нагрузкам сразу после процедуры",
            "Пейте достаточно воды для вывода токсинов",
            "Продолжайте расслабляющие практики дома для закрепления эффекта",
        ],
    },
    en: {
        title: "Wellness Treatments",
        description:
            "Wellness treatments are a set of relaxing and health-improving procedures aimed at enhancing overall well-being, relieving stress and fatigue. They help improve circulation, relax muscles, regulate sleep, and boost mood.",
        benefits: [
            "Reduces stress and tension",
            "Improves blood circulation",
            "Relaxes muscles and joints",
            "Boosts energy and vitality",
            "Promotes overall well-being",
        ],
        aftercare: [
            "Avoid strenuous activity immediately after the procedure",
            "Drink enough water to flush out toxins",
            "Continue relaxing practices at home to maintain the effect",
        ],
    },
    de: {
        title: "Wellness-Behandlungen",
        description:
            "Wellness-Behandlungen sind eine Reihe von entspannenden und gesundheitsfördernden Verfahren, die das allgemeine Wohlbefinden verbessern, Stress und Müdigkeit abbauen. Sie helfen, die Durchblutung zu verbessern, Muskeln zu entspannen, den Schlaf zu regulieren und die Stimmung zu heben.",
        benefits: [
            "Reduziert Stress und Anspannung",
            "Verbessert die Durchblutung",
            "Entspannt Muskeln und Gelenke",
            "Steigert Energie und Vitalität",
            "Fördert das allgemeine Wohlbefinden",
        ],
        aftercare: [
            "Unmittelbar nach der Behandlung keine starken Belastungen",
            "Genügend Wasser trinken, um Giftstoffe auszuleiten",
            "Entspannende Praktiken zu Hause fortsetzen, um den Effekt zu erhalten",
        ],
    },
};

export default function WellnessPage() {
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
