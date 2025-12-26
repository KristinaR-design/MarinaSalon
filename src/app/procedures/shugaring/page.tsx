"use client";

import { useLang } from "@/app/components/LanguageProvider";

const content = {
    ru: {
        title: "Шугаринг",
        whatTitle: "Что такое шугаринг?",
        whatText:
            "Шугаринг — это процедура удаления волос с помощью сахарной пасты (карамели). Паста наносится против роста волос и удаляется по росту, что позволяет удалить волосы вместе с корнем. Метод известен ещё со времён Древнего Египта, считается менее болезненным и снижает риск врастания волос.",
        prepTitle: "Как подготовиться к процедуре",
        prepList: [
            "Отказаться от загара и посещения сауны за 1–2 дня до процедуры",
            "Не использовать автозагар, масла и жирные кремы для тела",
            "Не удалять волосы минимум 2 недели до процедуры",
        ],
        afterTitle: "После шугаринга — 24 часа",
        afterList: [
            "Не посещать солярий, сауну и не принимать горячие ванны",
            "Не заниматься активным спортом",
            "Не использовать дезодоранты, парфюм и спиртосодержащие средства",
            "Не носить тесную и синтетическую одежду",
            "Не купаться в бассейне, море или в ванне",
            "Избегать интимной близости",
        ],
        effectTitle: "Как долго длится эффект?",
        effectText:
            "Эффект сохраняется от 3 до 5 недель в зависимости от типа волос. При шугаринге травмируется волосяной фолликул, что замедляет рост волос и со временем делает их тоньше.",
    },

    de: {
        title: "Sugaring",
        whatTitle: "Was ist Sugaring?",
        whatText:
            "Sugaring ist eine Methode der Haarentfernung mit Zuckerpaste (Karamell). Die Paste wird gegen die Haarwuchsrichtung aufgetragen und in Wuchsrichtung abgezogen, sodass die Haare samt Wurzel entfernt werden. Diese Technik ist seit dem alten Ägypten bekannt, gilt als besonders schonend und reduziert eingewachsene Haare.",
        prepTitle: "Wie man sich auf das Sugaring vorbereitet",
        prepList: [
            "Kein Sonnenbad oder Sauna-Besuch 1–2 Tage vor dem Termin",
            "Kein Selbstbräuner, Öl oder fettige Körpercremes verwenden",
            "Mindestens 2 Wochen vor dem Termin keine Haarentfernung",
        ],
        afterTitle: "Nach dem Sugaring – 24 Stunden",
        afterList: [
            "Kein Solarium, Sauna oder heißes Bad",
            "Kein Sport oder starke körperliche Aktivität",
            "Kein Deodorant, Parfüm oder alkoholhaltige Produkte",
            "Keine enge synthetische Kleidung",
            "Kein Baden im Pool, Meer oder in der Badewanne",
            "Kein Sex für 24 Stunden",
        ],
        effectTitle: "Wie lange hält das Ergebnis an?",
        effectText:
            "Das Ergebnis hält in der Regel 3 bis 5 Wochen – abhängig vom Haartyp. Beim Sugaring wird der Haarfollikel leicht verletzt, wodurch das Haarwachstum verlangsamt und die Haare mit der Zeit feiner werden.",
    },

    en: {
        title: "Sugaring",
        whatTitle: "What is sugaring?",
        whatText:
            "Sugaring is a hair removal method using sugar paste (caramel). The paste is applied against the direction of hair growth and removed in the direction of growth, allowing the hair to be removed from the root. This technique, known since ancient Egypt, is considered less painful and reduces the risk of ingrown hairs.",
        prepTitle: "How to prepare for sugaring",
        prepList: [
            "Avoid sunbathing and sauna visits 1–2 days before the procedure",
            "Do not use self-tanner, oils, or greasy body creams",
            "Do not remove hair for at least 2 weeks before the procedure",
        ],
        afterTitle: "After sugaring – 24 hours",
        afterList: [
            "Avoid sauna, tanning beds, and hot baths",
            "Avoid sports and intense physical activity",
            "Do not use deodorants, perfumes, or alcohol-based products",
            "Avoid tight and synthetic clothing",
            "Avoid swimming in pools, sea, or bathtub",
            "Avoid intimate contact",
        ],
        effectTitle: "How long does the effect last?",
        effectText:
            "The result usually lasts from 3 to 5 weeks depending on hair type. Sugaring slightly damages the hair follicle, which slows down hair growth and makes the hair finer over time.",
    },
};

export default function SugaringPage() {
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

            {/* Основное описание */}
            <div className="space-y-8">
                {/* Что это */}
                <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-gold/30 transition-shadow duration-500">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t.whatTitle}</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{t.whatText}</p>
                </div>

                {/* Подготовка */}
                <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-gold/30 transition-shadow duration-500">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t.prepTitle}</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
                        {t.prepList.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* После процедуры */}
                <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-gold/30 transition-shadow duration-500">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t.afterTitle}</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
                        {t.afterList.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Эффект */}
                <div className="bg-gradient-to-r from-gold/20 to-gold/5 dark:from-gold/30 dark:to-gold/10 rounded-2xl p-8 shadow-lg text-gray-900 dark:text-gray-100">
                    <h2 className="text-2xl font-semibold mb-3">{t.effectTitle}</h2>
                    <p className="text-lg leading-relaxed">{t.effectText}</p>
                </div>
            </div>
        </section>
    );
}
