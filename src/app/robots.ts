import { MetadataRoute } from "next";

/**
 * Yapay zekâ arama ve atıf botları ADLARIYLA listelenir. Davranış `*` kuralıyla
 * aynıdır (hepsi serbest); açık kural, botun bu siteyi kendi adına izinli
 * gördüğünü kesinleştirir ve AI görünürlük denetimlerinde "açık izin" sayılır.
 * Bir botu engellemek isterseniz onu bu listeden çıkarıp ayrı bir
 * `disallow: "/"` kuralı yazın.
 */
const AI_AND_SEARCH_BOTS = [
  // OpenAI — ChatGPT arama, kullanıcı istekleri, eğitim
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  // Anthropic — Claude arama, kullanıcı istekleri, eğitim
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google — arama ve Gemini/AI Overviews
  "Googlebot",
  "Google-Extended",
  // Apple — Siri/Spotlight ve Apple Intelligence
  "Applebot",
  "Applebot-Extended",
  // Microsoft — Bing ve Copilot
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_AND_SEARCH_BOTS, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://www.aydemirotokiralama.com/sitemap.xml",
  };
}
