import Reveal from "@/app/components/Reveal";
export default function Impressum() {
    return (
        <>
            <Reveal>
                <div className="max-w-3xl mx-auto px-5 py-16 prose">
                    <h1>Impressum</h1>
                    <p><strong>Angaben gemäß § 5 TMG:</strong><br />
                        Marina Wöhl, Roßfelder Straße 65/5, 74564 Crailsheim, Deutschland</p>
                    <p><strong>Kontakt:</strong> Telefon: +49 162 9344918 · E-Mail: marydick918@gmail.com</p>
                    <p>Kleinunternehmer gemäß § 19 UStG.</p>
                    <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />Marina Wöhl, Roßfelder Straße 65/5, 74564 Crailsheim</p>
                    <p><strong>Online-Streitbeilegung:</strong><br />
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank"> https://ec.europa.eu/consumers/odr</a>.<br />
                        Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </Reveal>
        </>
    );
}
