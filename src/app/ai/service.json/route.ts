import { durations } from "@/data/durations";
import { KEY_FACTS } from "@/lib/ai";
import { SITE, waLink } from "@/lib/site";

/** /ai/service.json — hizmetin neler sunduğunu yapay zekâ asistanlarına anlatır. */
export const dynamic = "force-static";

export function GET() {
  return Response.json({
    name: `${SITE.name} araç kiralama`,
    url: SITE.url,
    language: "tr",
    capabilities: [
      ...durations.map((d) => `${d.name} araç kiralama`),
      "Sabiha Gökçen Havalimanı'na araç teslimi",
      "Pendik Çamçeşme ofisinden 7/24 araç teslimi",
      "Depozitosuz kiralama",
    ],
    limitations: [
      "Adrese teslim hizmeti yoktur (havalimanı hariç).",
      "Kredi kartı ile ödeme alınmaz.",
      "Rezervasyon WhatsApp veya telefonla yapılır; sitedeki rezervasyon formu da talebi WhatsApp'a iletir.",
    ],
    conditions: KEY_FACTS,
    booking: {
      whatsapp: waLink("Merhaba, araç kiralamak istiyorum."),
      phone: SITE.phoneE164,
    },
  });
}
