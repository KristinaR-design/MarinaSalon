"use client";
import { useLang } from "@/app/components/LanguageProvider";

type Row = {
    nameDe: string;
    nameRu: string;
    nameEn: string;
    eur: number; // цена в EUR
};

const FX_RATE_EUR_USD = 1.10; // <— поменяйте при необходимости

function formatPrice(eur: number) {
    const usd = eur * FX_RATE_EUR_USD;
    // 15€ / $16.50
    return `${eur.toFixed(0)}€ / $${usd.toFixed(2)}`;
}

function localName(row: Row, lang: "de" | "ru" | "en") {
    if (lang === "de") return row.nameDe;
    if (lang === "ru") return row.nameRu;
    return row.nameEn;
}

function Table({ title, items, lang }: { title: string; items: Row[]; lang: "de" | "ru" | "en" }) {
    return (
        <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="divide-y">
                {items.map((r, i) => (
                    <div key={i} className="flex items-center justify-between py-3">
                        <span>{localName(r, lang)}</span>
                        <span className="font-medium">{formatPrice(r.eur)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Services() {
    const { t, lang } = useLang() as { t: any; lang: "de" | "ru" | "en" };

    // Женский прайс — из ваших файлов (Preis Frauen) :contentReference[oaicite:0]{index=0}
    const female: Row[] = [
        { nameDe: "Augenbrauen", nameRu: "Брови", nameEn: "Eyebrows", eur: 15 },
        { nameDe: "Oberlippe", nameRu: "Верхняя губа", nameEn: "Upper lip", eur: 10 },
        { nameDe: "Kinn", nameRu: "Подбородок", nameEn: "Chin", eur: 10 },
        { nameDe: "Gesicht komplett", nameRu: "Лицо полностью", nameEn: "Full face", eur: 30 },
        { nameDe: "Achseln", nameRu: "Подмышки", nameEn: "Armpits", eur: 25 },
        { nameDe: "Arme (halb)", nameRu: "Руки (половина)", nameEn: "Arms (half)", eur: 30 },
        { nameDe: "Arme komplett", nameRu: "Руки полностью", nameEn: "Arms (full)", eur: 40 },
        { nameDe: "Bikini", nameRu: "Бикини", nameEn: "Bikini", eur: 25 },
        { nameDe: "Intim (Brazilian) + Pofalte", nameRu: "Интим (Brazilian) + межягодичная складка", nameEn: "Brazilian + gluteal fold", eur: 45 },
        { nameDe: "Pofalte", nameRu: "Межягодичная складка", nameEn: "Gluteal fold", eur: 10 },
        { nameDe: "Beine (halb)", nameRu: "Ноги (половина)", nameEn: "Legs (half)", eur: 40 },
        { nameDe: "Beine komplett", nameRu: "Ноги полностью", nameEn: "Legs (full)", eur: 60 },
    ];
    const femaleCombo: Row[] = [
        { nameDe: "Beine komplett + Intim (Brazilian) + Pofalte + Achseln", nameRu: "Ноги полностью + Интим (Brazilian) + межягодичная складка + подмышки", nameEn: "Full legs + Brazilian + gluteal fold + armpits", eur: 120 },
        { nameDe: "Beine (halb) + Bikini + Achseln", nameRu: "Ноги (половина) + Бикини + Подмышки", nameEn: "Half legs + bikini + armpits", eur: 80 },
    ];

    // Мужской прайс — из ваших файлов (Preis Männer 1) :contentReference[oaicite:1]{index=1}
    const male: Row[] = [
        { nameDe: "Augenbrauen", nameRu: "Брови", nameEn: "Eyebrows", eur: 15 },
        { nameDe: "Nase (Wachs)", nameRu: "Нос (воск)", nameEn: "Nose (wax)", eur: 10 },
        { nameDe: "Ohren (Wachs)", nameRu: "Уши (воск)", nameEn: "Ears (wax)", eur: 10 },
        { nameDe: "Nacken", nameRu: "Шея", nameEn: "Neck", eur: 20 },
        { nameDe: "Schultern", nameRu: "Плечи", nameEn: "Shoulders", eur: 25 },
        { nameDe: "Rücken", nameRu: "Спина", nameEn: "Back", eur: 40 },
        { nameDe: "Rücken + Schultern", nameRu: "Спина + Плечи", nameEn: "Back + Shoulders", eur: 55 },
        { nameDe: "Brust", nameRu: "Грудь", nameEn: "Chest", eur: 25 },
        { nameDe: "Bauch", nameRu: "Живот", nameEn: "Abdomen", eur: 25 },
        { nameDe: "Brust + Bauch", nameRu: "Грудь + Живот", nameEn: "Chest + Abdomen", eur: 40 },
        { nameDe: "Achseln", nameRu: "Подмышки", nameEn: "Armpits", eur: 25 },
        { nameDe: "Intim (Brazilian) + Pofalte", nameRu: "Интим (Brazilian) + межягодичная складка", nameEn: "Brazilian + gluteal fold", eur: 70 },
        { nameDe: "Pofalte", nameRu: "Межягодичная складка", nameEn: "Gluteal fold", eur: 15 },
        { nameDe: "Po", nameRu: "Ягодицы", nameEn: "Buttocks", eur: 25 },
        { nameDe: "Beine komplett", nameRu: "Ноги полностью", nameEn: "Legs (full)", eur: 60 },
    ];
    const maleCombo: Row[] = [
        { nameDe: "Rücken + Schultern + Bauch + Brust + Achseln", nameRu: "Спина + Плечи + Живот + Грудь + Подмышки", nameEn: "Back + Shoulders + Abdomen + Chest + Armpits", eur: 110 },
    ];

    // Заголовки (если в t.services уже есть EN — они подтянутся автоматически)
    const titleFemale = t?.services?.female ?? (lang === "de" ? "Damen" : lang === "ru" ? "Женщины" : "Women");
    const titleMale = t?.services?.male ?? (lang === "de" ? "Herren" : lang === "ru" ? "Мужчины" : "Men");
    const titleFace = t?.services?.face ?? (lang === "de" ? "Süße Gesichtsbehandlung" : lang === "ru" ? "Сладкая уходовая процедура" : "Sweet facial treatment");

    return (
        <div className="max-w-6xl mx-auto px-5 py-16 space-y-6">
            <h1 className="text-3xl md:text-4xl font-serif">
                {t?.services?.title ?? (lang === "de" ? "Leistungen & Preise" : lang === "ru" ? "Услуги и цены" : "Services & Prices")}
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                <Table title={titleFemale} items={female} lang={lang} />
                <Table title={titleMale} items={male} lang={lang} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Table title={lang === "de" ? "Kombipakete – Damen" : lang === "ru" ? "Комбо — Женщины" : "Combos – Women"} items={femaleCombo} lang={lang} />
                <Table title={lang === "de" ? "Kombipakete – Herren" : lang === "ru" ? "Комбо — Мужчины" : "Combos – Men"} items={maleCombo} lang={lang} />
            </div>

            <div className="card p-6">
                <h3 className="text-xl font-semibold mb-3">{titleFace} – {formatPrice(60)}</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>{lang === "de" ? "Reinigung & Peeling" : lang === "ru" ? "Очищение и пилинг" : "Cleansing & peeling"}</li>
                    <li>{lang === "de" ? "Zuckerpaste – Wellenmassage" : lang === "ru" ? "Сахарная паста – волновой массаж" : "Sugar paste – wave massage"}</li>
                    <li>{lang === "de" ? "Gesichtsmaske" : lang === "ru" ? "Маска для лица" : "Face mask"}</li>
                    <li>{lang === "de" ? "Jade-Roller-Massage" : lang === "ru" ? "Массаж нефритовым роллером" : "Jade roller massage"}</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                    {lang === "de"
                        ? "Ein doppelt wirksamer Kollagen-Booster. Natürliche Kräfte von Zucker und ungarischem Wellness vereint."
                        : lang === "ru"
                            ? "Двойной коллаген-бустер. Натуральная сила сахара и венгерского wellness объединены."
                            : "A dual-action collagen booster. The natural power of sugar and Hungarian wellness combined."
                    }
                </p>
            </div>
        </div>
    );
}
