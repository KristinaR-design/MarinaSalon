"use client";
import Slider from "@/app/components/Slider";
import { useLang } from "@/app/components/LanguageProvider";

export default function Home() {
  const { t } = useLang();
  return (
    <section className="hero-bg">
      <div className="max-w-6xl mx-auto px-5 py-10 md:py-16 space-y-8">
        <Slider />
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900">{t.hero.title}</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">{t.hero.subtitle}</p>
          <div className="mt-8">
            <a className="btn-primary" target="_blank"
              href="https://wa.me/491629344918?text=Hallo%20Marina%2C%20ich%20m%C3%B6chte%20einen%20Termin%20vereinbaren.">
              {t.hero.book}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center font-medium">{t.features.one}</div>
          <div className="card p-6 text-center font-medium">{t.features.two}</div>
          <div className="card p-6 text-center font-medium">{t.features.three}</div>
        </div>
      </div>
    </section>
  );
}
