import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aydemir Oto Kiralama | Pendik Araç Kiralama",
  description:
    "Aydemir Oto Kiralama — Pendik/İstanbul'da 7/24 güvenilir araç kiralama hizmeti. Ekonomik, konforlu ve lüks araç seçenekleri.",
  keywords: [
    "araç kiralama",
    "oto kiralama",
    "pendik araç kiralama",
    "istanbul araç kiralama",
    "aydemir oto kiralama",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
