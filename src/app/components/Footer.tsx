// src/app/components/Footer.tsx
export default function Footer() {
    return (
        <footer
            className="mt-16 border-t border-gold/40
                 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500
                 text-gray-100 shadow-lg"
        >
            <div
                className="max-w-6xl mx-auto
             px-4 sm:px-6 lg:px-8
             py-6 sm:py-8 lg:py-10
             flex flex-col gap-5
             md:flex-row md:items-center md:justify-between"
                style={{ paddingBottom: 'max(28px, env(safe-area-inset-bottom))' }}
            >
                {/* Левая часть */}
                <p className="text-xs sm:text-sm md:text-base text-gray-100/90 text-center md:text-left">
                    © {new Date().getFullYear()} Marina Wöhl
                </p>

                {/* Правая часть — навигация/контакты */}
                <nav aria-label="Kontaktlinks" className="w-full md:w-auto">
                    <ul
                        className="flex flex-wrap justify-center md:justify-end items-center
                       gap-3 sm:gap-4 md:gap-6 lg:gap-8"
                    >
                        <li>
                            <a
                                href="https://wa.me/491629344918"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center
                           min-h-[40px] px-3 sm:px-4
                           rounded-full border border-gold/50
                           text-[13px] sm:text-sm md:text-base
                           hover:text-gold hover:border-gold
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60
                           transition-colors"
                            >
                                WhatsApp
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+491629344918"
                                className="inline-flex items-center justify-center
                           min-h-[40px] px-3 sm:px-4
                           rounded-full border border-gold/50
                           text-[13px] sm:text-sm md:text-base
                           hover:text-gold hover:border-gold
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60
                           transition-colors"
                            >
                                +49 162 9344918
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:marydick918@gmail.com"
                                className="inline-flex items-center justify-center
                           min-h-[40px] px-3 sm:px-4
                           rounded-full border border-gold/50
                           text-[13px] sm:text-sm md:text-base
                           hover:text-gold hover:border-gold
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60
                           transition-colors break-all"
                            >
                                marydick918@gmail.com
                            </a>
                        </li>

                        <li>
                            <a

                                className="inline-flex items-center justify-center
                           min-h-[40px] px-3 sm:px-4
                           rounded-full border border-gold/50
                           text-[13px] sm:text-sm md:text-base
                           hover:text-gold hover:border-gold
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60
                           transition-colors break-all"
                            >
                                Adresse: Roßfelder Straße 65/5, 74564 Crailsheim
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
