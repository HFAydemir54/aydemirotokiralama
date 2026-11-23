import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import JsonLd from "@/components/JsonLd";
import { autoRentalSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE, SITE_DESCRIPTION } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    // Ana sayfa başlığı: Search Console'da "araç kiralama", "pendik oto
    // kiralama", "pendik rent a car" sorguları ilk 10'da çok gösterim alıp az
    // tıklanıyordu (Kasım 2026). "rent a car" ve başlangıç fiyatı tıklama
    // oranını artırmak için başlığa eklendi. Fiyat, en düşük günlük araç
    // fiyatıyla (data/vehicles.ts) aynı olmalı.
    default: "Pendik Araç Kiralama & Rent a Car – Günlük ₺2.000'den",
    // Alt sayfalar sadece kendi başlığını verir, marka adı otomatik eklenir.
    template: "%s | Aydemir Oto Kiralama",
  },
  description: SITE_DESCRIPTION,
  // <meta name="author"> — içeriği kimin yayınladığını belirtir.
  authors: [{ name: SITE.name, url: SITE.url }],
  // RSS bağlantısı burada DEĞİL, aşağıda <head> içinde: alt sayfalar kendi
  // `alternates` (canonical) değerini verdiğinde metadata sığ birleştiği için
  // buradaki `types` siliniyordu.
  alternates: { canonical: "/" },
  // Buradaki openGraph/twitter yalnızca ANA SAYFA içindir. Alt sayfalar
  // lib/seo.ts → pageMetadata() ile kendi değerlerini verir; vermeyen bir sayfa
  // ana sayfanın başlık ve URL'ini devralır.
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE.url,
    siteName: SITE.name,
    // Paylaşım başlığının "|" öncesi H1 ile ("Pendik Araç Kiralama") aynı
    // tutulur: marka tutarlılığı (H1 / og:title / schema) böyle korunur.
    title: "Pendik Araç Kiralama | Aydemir Oto Kiralama",
    description:
      "Pendik'te araç kiralama. Sabiha Gökçen Havalimanı'na araç getiriyoruz. Günlük, haftalık ve aylık kiralama, depozito yok.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pendik Araç Kiralama | Aydemir Oto Kiralama",
    description:
      "Pendik'te araç kiralama. Sabiha Gökçen Havalimanı'na araç getiriyoruz. Depozito yok, 7/24 açık.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} scroll-smooth`}>
      <head>
        {/* Blog RSS beslemesi — tüm sayfalarda */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${SITE.name} – Araç Kiralama Rehberi`}
          href="/blog/rss.xml"
        />
        {/* Structured data — native <script>, ilk HTML yanıtında yer alır */}
        <JsonLd data={[autoRentalSchema, organizationSchema, websiteSchema]} />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-52JQTZZX');
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-52JQTZZX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
