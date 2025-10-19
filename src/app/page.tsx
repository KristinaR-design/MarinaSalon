"use client";
import Image from "next/image";
import { useLang } from "@/app/components/LanguageProvider";
import Reveal from "@/app/components/Reveal";

// если хотите вернуть слайдер ниже, просто раскомментируйте следующую строку
// import Slider from "@/app/components/Slider";

export default function Home() {
  const { lang, t } = useLang();

  // удобный текст для WhatsApp по текущему языку
  const waText =
    lang === "de"
      ? "Hallo Marina, ich möchte einen Termin vereinbaren."
      : lang === "ru"
        ? "Марина, хочу записаться на процедуру."
        : "Hello Marina, I'd like to book an appointment.";

  return (
    <>
      <Reveal>
        <main className="text-gray-800 pb-8 md:pb-12">
          {/* Блок «О мастере»: на мобилках — текст сверху, фото ниже; на десктопе фото слева */}
          <section className="max-w-6xl mx-auto px-5 pt-10 md:pt-16 grid gap-10 md:grid-cols-2 items-center">
            {/* Текст (первым в разметке для мобильного порядка) */}
            <div className="order-1 md:order-none">
              <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 text-center md:text-left">
                {lang === "de" ? "Über mich" : lang === "ru" ? "Обо мне" : "About me"}
              </h1>

              {/* Важно: контейнер <div>, а внутри — отдельные <p>, чтобы не было p внутри p */}
              <div className="text-lg leading-relaxed text-gray-700 space-y-4">
                {lang === "de" && (
                  <>
                    <p>
                      Ich bin zertifizierte Meisterin für Haarentfernung (Sugaring) und
                      Nageldesign mit mehr als fünf Jahren Berufserfahrung. Mein Beruf ist
                      für mich nicht nur Arbeit, sondern eine Leidenschaft, die es mir
                      ermöglicht, die natürliche Schönheit jedes Menschen zu unterstreichen.
                    </p>
                    <p>
                      Ich arbeite mit Frauen und Männern und gehe individuell auf jeden ein –
                      mit viel Einfühlungsvermögen, Präzision und Liebe zum Detail. Hygiene,
                      Qualität und Wohlbefinden meiner Kunden stehen für mich an erster
                      Stelle.
                    </p>
                    <p>
                      Jede Behandlung wird sorgfältig geplant und auf Hauttyp, Wünsche und
                      Wohlgefühl des Kunden abgestimmt. Ich bilde mich regelmäßig weiter, um
                      neue Techniken und Trends in mein Angebot aufzunehmen.
                    </p>
                    <p>
                      Mein Ziel ist es, dass sich jeder Kunde nach der Behandlung gepflegt,
                      entspannt und selbstbewusst fühlt. Denn wahre Schönheit beginnt mit
                      dem Gefühl, sich in der eigenen Haut wohlzufühlen.
                    </p>
                  </>
                )}

                {lang === "ru" && (
                  <>
                    <p>
                      Я сертифицированный мастер по шугарингу и ногтевому сервису с опытом
                      работы более пяти лет. Для меня это не просто работа, а призвание,
                      которое позволяет раскрывать естественную красоту каждого человека.
                    </p>
                    <p>
                      Работаю с женщинами и мужчинами, уделяя особое внимание индивидуальному
                      подходу, комфорту и безопасности. Все процедуры выполняются бережно и
                      с соблюдением высоких стандартов гигиены.
                    </p>
                    <p>
                      Перед началом я подробно объясняю процесс, подбираю материалы под тип
                      кожи и рассказываю об уходе после процедуры. Регулярно повышаю
                      квалификацию, чтобы предлагать современные и эффективные методы.
                    </p>
                    <p>
                      Моя цель — чтобы после визита вы ощущали лёгкость, уверенность и
                      гармонию с собой. Красота — это не только внешность, но и внутреннее
                      спокойствие.
                    </p>
                  </>
                )}

                {lang === "en" && (
                  <>
                    <p>
                      I am a certified specialist in sugaring and nail design with more than
                      five years of experience. My work is not just a job — it’s a passion
                      that helps reveal natural beauty.
                    </p>
                    <p>
                      I work with both women and men, focusing on comfort, safety, and a
                      truly personal approach. Every treatment is tailored to your needs with
                      precision, hygiene, and relaxation.
                    </p>
                    <p>
                      I regularly attend professional trainings to offer the latest and
                      safest techniques so that results are both beautiful and beneficial.
                    </p>
                    <p>
                      My goal is that you leave feeling refreshed, confident, and comfortable
                      in your own skin — because true beauty starts within.
                    </p>
                  </>
                )}
              </div>


            </div>

            {/* Фото */}
            <div className="relative mx-auto self-center w-full max-w-[520px] md:max-w-none md:w-[90%] lg:w-[85%] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/master.jpeg"
                alt={lang === "de" ? "Meisterin Marina Wöhl" : lang === "ru" ? "Мастер Марина Вёль" : "Master Marina Wöhl"}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 520px"
                className="object-cover"
                priority
              />
            </div>
          </section>

          {/* Блок преимуществ (чуть больше «воздуха» и подзаголовок) */}
          <section className="hero-bg mt-16 md:mt-20">
            <div className="max-w-6xl mx-auto px-5 py-10 md:py-16 space-y-8 md:space-y-16">
              <h2 className="text-center text-2xl md:text-3xl font-serif text-gray-900 gap-8 md:26" >
                {lang === "de"
                  ? "Wofür wir stehen"
                  : lang === "ru"
                    ? "Почему выбирают меня"
                    : "What I stand for"}
              </h2>

              {/* Если хотите вернуть слайдер над карточками — раскомментируйте: */}
              {/*
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Slider />
          </div>
          */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { img: "/feature1.jpeg", text: t.features.one },
                  { img: "/feature2.png", text: t.features.two },
                  { img: "/feature3.jpg", text: t.features.three },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-gold/40 transition-all duration-700 group"
                  >
                    {/* Фото */}
                    <div className="h-56 md:h-64 overflow-hidden">
                      <img
                        src={item.img}
                        alt=""
                        className="object-cover w-full h-full brightness-95 group-hover:brightness-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                      />
                    </div>

                    {/* Текст */}
                    <div className="p-6 text-center text-gray-800 font-medium text-lg relative z-10">
                      {item.text}
                    </div>

                    {/* Золотое свечение при наведении */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent blur-xl" />
                    </div>

                  </div>
                ))}



              </div>


              {/* Текст между карточками и кнопкой */}
              <div className="max-w-3xl mx-auto text-center text-lg text-gray-700 mt-8">
                {lang === "de"
                  ? t.card.title
                  : lang === "ru"
                    ? t.card.title
                    : t.card.title}
              </div>


              <div className="text-lg leading-relaxed text-gray-700 space-y-4 mt-10 flex justify-center">
                <a
                  href={`https://wa.me/491629344918?text=${encodeURIComponent(waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {t.hero.book}
                </a>
              </div>

            </div>
          </section>
        </main>
      </Reveal>
    </>
  );
}
