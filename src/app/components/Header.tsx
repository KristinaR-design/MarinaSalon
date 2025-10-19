"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLang } from "./LanguageProvider";
;

export default function Header() {
    const { t, lang, toggle } = useLang();
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border-b border-gold/40 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white sticky top-0 z-40 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-full ring-gold/60 shadow-[0px_0px_20px_rgba(212,175,55,0.25)] overflow-hidden">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain p-1.5" priority />
                    </div>
                    <span className="hidden sm:inline text-2xl md:text-3xl font-serif tracking-wide bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                        Marina Wöhl
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-7 text-base">
                    <Link href="/" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60">{t.nav.home}</Link>
                    <Link href="/services" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60">{t.nav.services}</Link>
                    <Link href="/about" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60">{t.nav.about}</Link>
                    <Link href="/contact" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60">{t.nav.contact}</Link>
                    <Link href="/impressum" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60">{t.nav.impressum}</Link>
                    <Link href="/datenschutz" className="hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60">{t.nav.privacy}</Link>
                    <button
                        onClick={toggle}
                        className="btn-outline ml-2 min-h-[40px] px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                        aria-label="Toggle language"
                        title="Toggle language"
                    >
                        {lang.toUpperCase()}
                    </button>
                </nav>

                {/* Mobile controls */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggle}
                        className="btn-outline min-h-[36px] px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                        aria-label="Toggle language"
                        title="Toggle language"
                    >
                        {lang.toUpperCase()}
                    </button>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label="Open menu"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gold/50 hover:text-gold hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                    >
                        {/* burger icon */}
                        <span className="sr-only">Open menu</span>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile nav panel */}
            {open && (
                <div
                    id="mobile-menu"
                    className="md:hidden border-t border-gold/30 bg-gradient-to-b from-gray-700 via-gray-650 to-gray-600/95 backdrop-blur"
                >
                    <nav className="max-w-6xl mx-auto px-4 py-4">
                        <ul className="flex flex-col gap-3 text-base">
                            <li><Link href="/" onClick={() => setOpen(false)} className="block py-2 hover:text-gold"> {t.nav.home} </Link></li>
                            <li><Link href="/services" onClick={() => setOpen(false)} className="block py-2 hover:text-gold"> {t.nav.services} </Link></li>
                            <li><Link href="/about" onClick={() => setOpen(false)} className="block py-2 hover:text-gold"> {t.nav.about} </Link></li>
                            <li><Link href="/contact" onClick={() => setOpen(false)} className="block py-2 hover:text-gold"> {t.nav.contact} </Link></li>
                            <li><Link href="/impressum" onClick={() => setOpen(false)} className="block py-2 hover:text-gold"> {t.nav.impressum} </Link></li>
                            <li><Link href="/datenschutz" onClick={() => setOpen(false)} className="block py-2 hover:text-gold"> {t.nav.privacy} </Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
