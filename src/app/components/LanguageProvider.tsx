"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Lang } from "@/app/lib/i18n";

type Ctx = {
    lang: Lang;
    setLang: (l: Lang) => void;
    toggle: () => void;
    t: typeof translations["de"];
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("de");

    useEffect(() => {
        const s = localStorage.getItem("lang") as Lang | null;
        if (s) setLang(s);
    }, []);

    const toggle = () => {
        setLang(prev => {
            const order: Lang[] = ["de", "ru", "en"];
            const next = order[(order.indexOf(prev) + 1) % order.length];
            localStorage.setItem("lang", next);
            return next;
        });
    };

    const t = translations[lang];

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
