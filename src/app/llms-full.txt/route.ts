import { durations } from "@/data/durations";
import { airportFaqs, allFaqs } from "@/data/faq";
import { locations } from "@/data/locations";
import { sortedPosts, type Block } from "@/data/posts";
import { availableVehicles, vehicleTitle } from "@/data/vehicles";
import { KEY_FACTS } from "@/lib/ai";
import { ADDRESS_ONE_LINE, SITE, SITE_DESCRIPTION, formatPrice } from "@/lib/site";

/**
 * /llms-full.txt (llmstxt.org): /llms.txt'nin uzun sürümü — sitedeki içeriğin
 * tamamı tek Markdown dosyasında. Yapay zekâ asistanları sayfaları tek tek
 * gezmeden doğru bilgiye ulaşır. İçerik data/ ve lib/ai.ts'ten üretilir;
 * elle düzenlemeyin.
 */
export const dynamic = "force-static";

/** Yazılardaki göreli bağlantıları (/blog/...) mutlak adrese çevirir. */
function absLinks(text: string): string {
  return text.replace(/\]\((\/[^)]*)\)/g, (_, path: string) => `](${SITE.url}${path})`);
}

function blockToMd(b: Block): string {
  switch (b.type) {
    case "h2":
      return `#### ${b.text}`;
    case "h3":
      return `##### ${b.text}`;
    case "ul":
      return b.items.map((i) => `- ${absLinks(i)}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${absLinks(i)}`).join("\n");
    case "note":
      return `> ${absLinks(b.text)}`;
    default:
      return absLinks(b.text);
  }
}

export function GET() {
  const seen = new Set<string>();
  const faqs = [...allFaqs, ...airportFaqs].filter((f) =>
    seen.has(f.q) ? false : (seen.add(f.q), true)
  );

  const sections: string[] = [];

  sections.push(`# ${SITE.name}

> ${SITE_DESCRIPTION}

Adres: ${ADDRESS_ONE_LINE}
Telefon ve WhatsApp: ${SITE.phoneDisplay}
Çalışma saatleri: 7/24 açık
Web: ${SITE.url}
Kısa özet: ${SITE.url}/llms.txt`);

  sections.push(`## Kiralama koşulları

${KEY_FACTS.map((f) => `- ${f}`).join("\n")}`);

  sections.push(`## Sık sorulan sorular

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}`);

  sections.push(`## Araçlar

${availableVehicles
  .map((v) => {
    const specs = [
      v.year && `${v.year} model`,
      v.transmission,
      v.fuel,
      v.engine && `${v.engine} motor`,
      v.seats && `${v.seats} kişilik`,
    ]
      .filter(Boolean)
      .join(", ");
    const price =
      typeof v.dailyPrice === "number"
        ? `Günlük fiyat: ${formatPrice(v.dailyPrice)}`
        : "Fiyat için iletişime geçin";
    return `### ${vehicleTitle(v)}\n\n${SITE.url}/araclar/${v.slug}\n\n${specs}. ${price}.${
      v.intro ? `\n\n${v.intro}` : ""
    }`;
  })
  .join("\n\n")}`);

  sections.push(`## Kiralama süreleri

${durations
  .map(
    (d) => `### ${d.h1}

${SITE.url}/${d.slug}

${d.intro}

Fiyatlandırma: ${d.pricing}

${d.benefits.map((b) => `- **${b.title}:** ${b.text}`).join("\n")}

Kimler için uygun:
${d.bestFor.map((x) => `- ${x}`).join("\n")}

${d.notes.map((n) => `**${n.title}:** ${n.text}`).join("\n\n")}`
  )
  .join("\n\n")}`);

  sections.push(`## Bölgeler

${locations
  .map(
    (l) => `### ${l.name} Araç Kiralama

${SITE.url}/${l.slug}

${l.intro}

Ulaşım: ${l.access} (${l.distance})

${l.useCase}${
      l.faqs?.length
        ? `\n\n${l.faqs.map((f) => `**${f.q}** ${f.a}`).join("\n\n")}`
        : ""
    }`
  )
  .join("\n\n")}`);

  sections.push(`## Rehber yazıları

${sortedPosts
  .map(
    (p) => `### ${p.title}

${SITE.url}/blog/${p.slug} · Yayın: ${p.publishedAt} · Güncelleme: ${p.updatedAt}

${p.blocks.map(blockToMd).join("\n\n")}`
  )
  .join("\n\n")}`);

  return new Response(`${sections.join("\n\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
