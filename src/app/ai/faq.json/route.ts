import { airportFaqs, allFaqs } from "@/data/faq";
import { SITE } from "@/lib/site";

/**
 * /ai/faq.json — sitedeki SSS'lerin makine okunur hali. Metinler data/faq.ts'ten
 * gelir; sayfadaki ve FAQPage schema'sındaki cevaplarla birebir aynıdır.
 */
export const dynamic = "force-static";

export function GET() {
  const seen = new Set<string>();
  const faqs = [...allFaqs, ...airportFaqs]
    .filter((f) => (seen.has(f.q) ? false : (seen.add(f.q), true)))
    .map((f) => ({ question: f.q, answer: f.a }));

  return Response.json({
    name: SITE.name,
    url: `${SITE.url}/sss`,
    language: "tr",
    faqs,
  });
}
