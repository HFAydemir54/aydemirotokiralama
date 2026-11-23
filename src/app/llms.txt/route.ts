import { durations } from "@/data/durations";
import { locations } from "@/data/locations";
import { sortedPosts } from "@/data/posts";
import { availableVehicles, vehicleTitle } from "@/data/vehicles";
import { KEY_FACTS } from "@/lib/ai";
import { ADDRESS_ONE_LINE, SITE, SITE_DESCRIPTION, formatPrice } from "@/lib/site";

/**
 * /llms.txt (llmstxt.org): yapay zekâ asistanlarına sitenin özetini ve önemli
 * sayfalarını verir. Google sıralamasını etkilemez. İçerik data/ ve lib/ai.ts
 * üzerinden üretilir; elle düzenlemeyin.
 */
export const dynamic = "force-static";

function link(path: string, label: string, note?: string): string {
  return `- [${label}](${SITE.url}${path})${note ? `: ${note}` : ""}`;
}

export function GET() {
  const vehicleLines = availableVehicles.map((v) => {
    const specs = [v.transmission, v.fuel, v.seats && `${v.seats} kişilik`]
      .filter(Boolean)
      .join(", ");
    const price =
      typeof v.dailyPrice === "number"
        ? `günlük ${formatPrice(v.dailyPrice)}`
        : "fiyat için iletişime geçin";
    return link(`/araclar/${v.slug}`, `${vehicleTitle(v)} Kiralama`, `${specs}; ${price}`);
  });

  const body = `# ${SITE.name}

> ${SITE_DESCRIPTION}

${SITE.name}, İstanbul Pendik'te araç kiralama (rent a car) hizmeti veren yerel bir işletmedir. Adres: ${ADDRESS_ONE_LINE}. Telefon ve WhatsApp: ${SITE.phoneDisplay}.

## Kiralama koşulları

${KEY_FACTS.map((f) => `- ${f}`).join("\n")}

## Ana sayfalar

${[
  link("/", "Pendik Araç Kiralama", "ana sayfa; fiyatlar, filo ve sık sorulan sorular"),
  link("/arac-kiralama", "Araç Kiralama", "kiralama süreci, fiyatlar ve koşulların özeti"),
  link("/sabiha-gokcen-arac-kiralama", "Sabiha Gökçen Araç Kiralama", "havalimanına araç teslimi"),
  link("/araclar", "Araç Filosu", "tüm araçlar ve günlük fiyatlar"),
  link("/kiralama-kosullari", "Kiralama Koşulları", "belgeler, ödeme, kilometre, kapora"),
  link("/sss", "Sık Sorulan Sorular"),
  link("/hakkimizda", "Hakkımızda"),
  link("/iletisim", "İletişim", "adres, telefon, harita"),
].join("\n")}

## Kiralama süreleri

${durations.map((d) => link(`/${d.slug}`, `${d.name} Araç Kiralama`, d.description)).join("\n")}

## Bölgeler

${locations.map((l) => link(`/${l.slug}`, `${l.name} Araç Kiralama`, l.description)).join("\n")}

## Araçlar

${vehicleLines.join("\n")}

## Rehber yazıları

${sortedPosts.map((p) => link(`/blog/${p.slug}`, p.title, p.description)).join("\n")}

## Optional

${[
  link("/llms-full.txt", "Sitenin tam içeriği tek dosyada (Markdown)"),
  link("/blog", "Araç Kiralama Rehberi", "tüm blog yazıları"),
  link("/blog/rss.xml", "Blog RSS beslemesi"),
  link("/ai/summary.json", "Makine okunur işletme özeti (JSON)"),
  link("/ai/faq.json", "Makine okunur sık sorulan sorular (JSON)"),
].join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
