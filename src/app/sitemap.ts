import type { MetadataRoute } from "next";
import { durations } from "@/data/durations";
import { locations } from "@/data/locations";
import { posts } from "@/data/posts";
import { availableVehicles } from "@/data/vehicles";
import { HOME_UPDATED, SITE } from "@/lib/site";
import { BLOG_UPDATED, FLEET_UPDATED, PAGE_UPDATED } from "@/lib/seo";

/**
 * Dinamik sitemap.
 *
 * `lastModified` bilerek `new Date()` DEĞİL: her build'de "bugün" yazmak
 * Google'a sahte tazelik sinyali gönderir ve zamanla güvenilirliğini yitirir.
 * Tarihler veri dosyalarındaki `updatedAt` alanından ve lib/seo.ts →
 * PAGE_UPDATED'ten gelir; sayfalarda görünen tarih ve WebPage schema'sı da
 * aynı kaynağı kullanır. İçerik güncellediğinizde o tarihi de güncelleyin.
 */
const STATIC_UPDATED = "2026-07-31";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: HOME_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/hakkimizda`,
      lastModified: PAGE_UPDATED["/hakkimizda"],
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE.url}/arac-kiralama`,
      lastModified: PAGE_UPDATED["/arac-kiralama"],
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/sabiha-gokcen-arac-kiralama`,
      lastModified: PAGE_UPDATED["/sabiha-gokcen-arac-kiralama"],
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/araclar`,
      lastModified: FLEET_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/kiralama-kosullari`,
      lastModified: PAGE_UPDATED["/kiralama-kosullari"],
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE.url}/sss`,
      lastModified: PAGE_UPDATED["/sss"],
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE.url}/iletisim`,
      lastModified: PAGE_UPDATED["/iletisim"],
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: BLOG_UPDATED,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const durationPages: MetadataRoute.Sitemap = durations.map((d) => ({
    url: `${SITE.url}/${d.slug}`,
    lastModified: d.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));


  // Filo boşken hiç araç URL'i bildirilmez; araç eklendikçe otomatik eklenir.
  const vehiclePages: MetadataRoute.Sitemap = availableVehicles.map((v) => ({
    url: `${SITE.url}/araclar/${v.slug}`,
    lastModified: v.updatedAt ?? STATIC_UPDATED,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${SITE.url}/${l.slug}`,
    lastModified: l.updatedAt,
    changeFrequency: "monthly",
    priority: l.priority,
  }));

  return [
    ...staticPages,
    ...vehiclePages,
    ...locationPages,
    ...durationPages,
    ...postPages,
  ];
}
