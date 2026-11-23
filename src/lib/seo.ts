import type { Metadata } from "next";
import { sortedPosts } from "@/data/posts";
import { availableVehicles } from "@/data/vehicles";
import { SITE } from "./site";

/**
 * Sayfa metadata'sı için tek yardımcı.
 *
 * Neden gerekli: Next.js metadata'yı SIĞ birleştirir. Bir sayfa `openGraph`
 * tanımlamazsa layout'takini OLDUĞU GİBİ devralır — alt sayfalar sosyal
 * medyada ana sayfanın başlığı, açıklaması ve URL'iyle paylaşılıyordu.
 * Bu fonksiyon her sayfaya kendi başlık/açıklama/URL'ini ve ortak görseli
 * verir.
 */

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: SITE.name,
};

/** "Kiralama Koşulları" → "Kiralama Koşulları | Aydemir Oto Kiralama" */
export function withBrand(title: string): string {
  return `${title} | ${SITE.name}`;
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
}: {
  /** Tarayıcı sekmesinde görünecek TAM başlık (marka eki dahil). */
  title: string;
  description: string;
  /** "/kiralama-kosullari" gibi, slash ile başlar. */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "tr_TR",
      siteName: SITE.name,
      url: `${SITE.url}${path === "/" ? "" : path}`,
      title,
      description,
      images: [OG_IMAGE],
      ...(type === "article" && { publishedTime, modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex && { robots: { index: false, follow: false } }),
  };
}

/**
 * İçeriği veri dosyasından gelmeyen sayfaların son içerik güncellemesi
 * (git geçmişinden alındı). Sayfanın İÇERİĞİNİ değiştirdiğinizde ilgili
 * tarihi güncelleyin; her build'de "bugün" yazmayın. Sitemap de buradan
 * beslenir.
 */
export const PAGE_UPDATED = {
  "/arac-kiralama": "2026-09-14",
  "/sabiha-gokcen-arac-kiralama": "2026-11-23",
  "/kiralama-kosullari": "2026-11-23",
  // İçerik data/faq.ts'ten; SSS'ler 23.11.2026'da güncellendi.
  "/sss": "2026-11-23",
  "/iletisim": "2026-08-01",
  "/hakkimizda": "2026-11-23",
} as const;

/** /araclar listesi araç verisinden oluşur: en son güncellenen aracın tarihi. */
export const FLEET_UPDATED = availableVehicles.reduce(
  (latest, v) => (v.updatedAt && v.updatedAt > latest ? v.updatedAt : latest),
  "2026-08-01"
);

/** /blog listesi yazılardan oluşur: en son güncellenen yazının tarihi. */
export const BLOG_UPDATED = sortedPosts.reduce(
  (latest, p) => (p.updatedAt > latest ? p.updatedAt : latest),
  "2026-08-01"
);
