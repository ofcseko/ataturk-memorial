import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });

export const metadata = {
  title: "Mustafa Kemal Atatürk | Türkiye Cumhuriyeti'nin Kurucusu",
  description: "Mustafa Kemal Atatürk'ün hayatı, devrimleri, ilkeleri ve mirası. Kapsamlı biyografi, fotoğraf galerisi ve tarihi kaynaklar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
