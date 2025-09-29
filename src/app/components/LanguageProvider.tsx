"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
// ⚠️ Если i18n у вас в src/app/lib/i18n.ts — замените на "@/app/lib/i18n"
import { translations, type Lang, type Dict } from "@/app/lib/i18n";

type Ctx = {
    lang: Lang;
    setLang: (l: Lang) => void;
    toggle: () => void;
    t: Dict; // ✅ словарь текущего языка (de | ru | en)
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("de");

    // читаем язык из localStorage только на клиенте
    useEffect(() => {
        const saved = (typeof window !== "undefined"
            ? (localStorage.getItem("lang") as Lang | null)
            : null);
        if (saved) setLang(saved);
    }, []);

    const toggle = () => {
        setLang((prev) => {
            const order: Lang[] = ["de", "ru", "en"];
            const next = order[(order.indexOf(prev) + 1) % order.length];
            if (typeof window !== "undefined") {
                localStorage.setItem("lang", next);
            }
            return next;
        });
    };

    const t: Dict = translations[lang];

    return (
        <LangContext.Provider value={{ lang, setLang, toggle, t }}>
            {children}
        </LangContext.Provider>
    );
}

export const useLang = () => {
    const ctx = useContext(LangContext);
    if (!ctx) {
        throw new Error("useLang must be used inside LangProvider");
    }
    return ctx;
};
