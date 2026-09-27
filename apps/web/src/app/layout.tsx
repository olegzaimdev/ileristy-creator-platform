import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Manrope } from "next/font/google";
// Order matters: Tailwind (layer order) → tokens → base → components.
import "./globals.css";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/components.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ILERISTY — SMM & UGC обучение",
  description: "Стани SMM & UGC експерт: онлайн курс по създаване на съдържание, работа с брандове и клиенти.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bg" className={`${cormorant.variable} ${greatVibes.variable} ${manrope.variable}`}>
      <body className="ileristy">{children}</body>
    </html>
  );
}
