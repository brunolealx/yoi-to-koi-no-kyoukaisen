import { Manrope, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const titleFont = Noto_Sans_JP({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "酔いと恋の境界線",
  description:
    "Uma visual novel romântica e noturna sobre fuga, escolhas e consequências.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${bodyFont.variable} ${titleFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
