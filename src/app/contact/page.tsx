"use client";
import { useState } from "react";
import { useLang } from "@/app/components/LanguageProvider";
import toast from "react-hot-toast";

export default function Contact() {
    const { t } = useLang();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch("/api/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, service, date }),
            });

            setName("");
            setPhone("");
            setService("");
            setDate("");

            toast.success(t.formSuccess);
        } catch (err) {
            console.error("Ошибка при отправке:", err);
            toast.error("Fehler beim Senden / Ошибка при отправке");
        }
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid gap-10 md:grid-cols-2">
            {/* Левая колонка */}
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6">
                    {t.contact.title}
                </h1>

                <form
                    onSubmit={submit}
                    className="space-y-4 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm p-4 sm:p-6 shadow"
                >
                    <input
                        className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                        placeholder={t.contact.name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                        placeholder={t.contact.phone}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                        placeholder={t.contact.service}
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    />
                    <input
                        type="date"
                        className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={today}
                    />
                    <button
                        type="submit"
                        className="btn-primary w-full sm:w-auto min-h-[44px] px-5 sm:px-6"
                    >
                        {t.contact.send}
                    </button>
                    <p className="text-xs sm:text-sm text-gray-500">{t.contact.note}</p>
                </form>

                <div className="mt-6 space-y-2 text-sm sm:text-base">
                    <p className="font-medium">
                        Telefon:{" "}
                        <a
                            className="hover:text-gold break-words"
                            href="tel:+491629344918"
                        >
                            +49 162 9344918
                        </a>
                    </p>
                    <p>
                        E-Mail:{" "}
                        <a
                            className="hover:text-gold break-words"
                            href="mailto:marydick918@gmail.com"
                        >
                            marydick918@gmail.com
                        </a>
                    </p>
                    <p>Adresse: Roßfelder Straße 65/5, 74564 Crailsheim</p>
                </div>
            </div>

            {/* Правая колонка — карта */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow h-[280px] sm:h-[360px] md:h-[480px]">
                <iframe
                    title="map"
                    src="https://www.google.com/maps?q=Ro%C3%9Ffelder%20Stra%C3%9Fe%2065%2F5%2C%2074564%20Crailsheim&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}
