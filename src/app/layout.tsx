import "./globals.css";
import { LangProvider } from "@/app/components/LanguageProvider";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Toaster } from "react-hot-toast";
import { Playfair_Display } from "next/font/google";



// 1) Подключаем Google Font корректно
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  // Если хотите только для заголовков через CSS-переменную:
  // variable: "--font-playfair",
});

export const metadata = {
  title: "Marina Wöhl | Schönheitssalon",
  description:
    "Eleganz in Weiß, Gold und Grau. Sugaring, Pflege & Wellness in Crailsheim.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      {/* 2) Назначаем шрифт через className */}
      <body className={`${playfair.className} bg-stone-100 text-gray-800`}>
        <LangProvider>
          <Header />
          <main>{children}
            <Toaster position="top-center" />
          </main>
          <Footer />
          {/* 3) Тосты — здесь, внизу страницы */}
          <Toaster position="top-center" />
        </LangProvider>
      </body>
    </html>
  );
}
