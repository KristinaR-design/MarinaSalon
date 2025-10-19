import "./globals.css";
import { LangProvider } from "@/app/components/LanguageProvider";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Toaster } from "react-hot-toast";
import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({ subsets: ["latin", "latin-ext", "cyrillic"], weight: ["300", "400", "500", "600", "700", "800"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-serif" });


// 1) Подключаем Google Font корректно
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "600"],
//   display: "swap",
//   // Если хотите только для заголовков через CSS-переменную:
//   // variable: "--font-playfair",
// });

export const metadata = {
  title: "Marina Wöhl | Schönheitssalon",
  description:
    "Eleganz in Weiß, Gold und Grau. Sugaring, Pflege & Wellness in Crailsheim.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      {/* делаем колонку на весь экран */}
      <body className="min-h-screen flex flex-col bg-[#fff8e9] text-gray-800">
        <LangProvider>
          <Header />
          {/* растягиваем контент, чтобы футер ушёл вниз */}
          <main className="flex-1">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}

