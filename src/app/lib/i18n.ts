export const translations = {
  de: {

    salon: {
      title: "Über den Salon", text1: "Unser Studio vereint Professionalität, Komfort und Ästhetik in jedem Detail. ", text2: "Jeder Raum ist so gestaltet, dass unsere Kunden sich entspannen und die Behandlungen in einer ruhigen und angenehmen Atmosphäre genießen können.", text3: "Moderne Ausstattung, Sauberkeit und Liebe zum Interieur schaffen ein Gefühl von Gemütlichkeit und Vertrauen.", text4: "Hier vereinen sich Handwerkskunst, Stil und Wärme, damit jede Behandlung zu einem besonderen Moment wird."
    },
    nav: { home: "Start", services: "Leistungen & Preise", about: "Über uns", contact: "Kontakt", impressum: "Impressum", privacy: "Datenschutz" },
    hero: { title: "Marina Wöhl – Schönheitssalon", subtitle: "Eleganz in Weiß, Gold und Grau. Individuelle Pflege für Sie.", book: "Termin per WhatsApp" },
    features: { one: "Sanfte Zucker-Peelings", two: "Präzise Sugaring-Technik", three: "Entspannende Wellness-Rituale" },
    services: { title: "Leistungen & Preise", female: "Damen", male: "Herren", face: "Süße Gesichtsbehandlung" },
    contact: { title: "Kontakt & Anfahrt", name: "Ihr Name", phone: "Telefonnummer", service: "Leistung", date: "Wunschtermin", send: "Anfrage senden", note: "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zu." },
    about: { title: "Über den Salon", text: "Individuelle Pflege, präzises Sugaring und entspannende Rituale. Wir arbeiten achtsam и с любовью к деталям." },
    formSuccess: "Danke! Wir haben Ihre Anfrage erhalten.",
    card: { title: "Jede Behandlung wird mit Sorgfalt, Präzision und Liebe zum Detail durchgeführt – für ein Ergebnis, das sich sehen und fühlen lässt." },
  },
  ru: {

    salon: { title: "О салоне", text1: "Наш салон сочетает профессионализм, комфорт и эстетику в каждой детали. ", text2: "Каждая комната оформлена так, чтобы наши клиенты могли расслабиться и насладиться процедурами в спокойной и приятной атмосфере.", text3: "Современное оборудование, чистота и внимание к интерьеру создают ощущение уюта и доверия.", text4: "Здесь мастерство, стиль и теплота объединяются, чтобы каждая процедура стала особенным моментом." },

    nav: { home: "Главная", services: "Услуги и цены", about: "О салоне", contact: "Контакты", impressum: "Impressum", privacy: "Политика конфиденциальности" },
    hero: { title: "Marina Wöhl — салон красоты", subtitle: "Элегантность в белом, золоте и сером. Индивидуальный уход для вас.", book: "Забронировать в WhatsApp" },
    features: { one: "Мягкие сахарные пилинги", two: "Точная техника шугаринга", three: "Расслабляющие wellness-ритуалы" },
    services: { title: "Услуги и цены", female: "Женщины", male: "Мужчины", face: "Сладкая уходовая процедура" },
    contact: { title: "Контакты и карта", name: "Ваше имя", phone: "Телефон", service: "Услуга", date: "Желаемая дата", send: "Отправить запрос", note: "Отправляя форму, вы соглашаетесь на обработку персональных данных." },
    about: { title: "О салоне", text: "Индивидуальный уход, точный шугаринг и расслабляющие ритуалы. Мы работаем бережно и с любовью к деталям." },
    formSuccess: "Спасибо! Мы получили вашу заявку.",
    card: { title: "Каждая процедура выполняется с вниманием к деталям, чтобы результат радовал и внешне, и внутренне." },
  },
  en: {
    salon: { title: "About the Salon", text1: "Our studio combines professionalism, comfort, and aesthetics in every detail.", text2: "Each room is designed to help our clients relax and enjoy their treatments in a calm and pleasant atmosphere.", text3: "Modern equipment, cleanliness, and attention to interior design create a sense of coziness and trust.", text4: "Here, craftsmanship, style, and warmth come together to make every treatment a special moment." },
    nav: { home: "Home", services: "Services & Prices", about: "About", contact: "Contact", impressum: "Impressum", privacy: "Privacy Policy" },
    hero: { title: "Marina Wöhl – Beauty Salon", subtitle: "Elegance in white, gold and gray. Personal care for you.", book: "Book via WhatsApp" },
    features: { one: "Gentle sugar peelings", two: "Precise sugaring technique", three: "Relaxing wellness rituals" },
    services: { title: "Services & Prices", female: "Women", male: "Men", face: "Sweet facial treatment" },
    contact: { title: "Contact & Map", name: "Your name", phone: "Phone number", service: "Service", date: "Preferred date", send: "Send request", note: "By sending the form, you agree to the processing of your data." },
    about: { title: "About the salon", text: "Personal care, precise sugaring and relaxing rituals. We work carefully and with love for detail." },
    formSuccess: "Thank you! We have received your request.",
    card: { title: "Each treatment is performed with care and attention to detail – for results that look and feel beautiful." },
  },




} as const;

export type Lang = keyof typeof translations;              // "de" | "ru" | "en"
export type Dict = (typeof translations)[Lang];            // словарь для текущего языка

