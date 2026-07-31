import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import JsonLd from "@/components/JsonLd";
import { autoRentalSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Pendik Araç Kiralama | Aydemir Oto Kiralama",
    // Alt sayfalar sadece kendi başlığını verir, marka adı otomatik eklenir.
    template: "%s | Aydemir Oto Kiralama",
  },
  description:
    "Pendik ve Sabiha Gökçen Havalimanı'nda 7/24 araç kiralama. Günlük, haftalık ve aylık kiralama, adrese teslim, WhatsApp'tan hızlı rezervasyon.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE.url,
    siteName: SITE.name,
    title: "Pendik Araç Kiralama | Aydemir Oto Kiralama",
    description:
      "Pendik ve Sabiha Gökçen Havalimanı'nda 7/24 araç kiralama. Günlük, haftalık ve aylık kiralama seçenekleri.",
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
      "Pendik ve Sabiha Gökçen Havalimanı'nda 7/24 araç kiralama. WhatsApp'tan hızlı rezervasyon.",
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
