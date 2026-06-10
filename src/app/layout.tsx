import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.aydemirotokiralama.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.aydemirotokiralama.com",
    siteName: "Aydemir Oto Kiralama",
    title: "Aydemir Oto Kiralama | Pendik Araç Kiralama",
    description:
      "Pendik/İstanbul'da 7/24 güvenilir araç kiralama hizmeti. Ekonomik, konforlu ve lüks araç seçenekleri.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Aydemir Oto Kiralama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aydemir Oto Kiralama | Pendik Araç Kiralama",
    description:
      "Pendik/İstanbul'da 7/24 güvenilir araç kiralama hizmeti. Ekonomik, konforlu ve lüks araç seçenekleri.",
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        {children}
      </body>
    </html>
  );
}
