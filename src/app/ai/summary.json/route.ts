import { locations } from "@/data/locations";
import { availableVehicles, minDailyPrice, vehicleTitle } from "@/data/vehicles";
import { KEY_FACTS } from "@/lib/ai";
import { ADDRESS_ONE_LINE, HOME_UPDATED, SITE, SITE_DESCRIPTION } from "@/lib/site";

/** /ai/summary.json — yapay zekâ asistanları için makine okunur işletme özeti. */
export const dynamic = "force-static";

export function GET() {
  return Response.json({
    name: SITE.name,
    description: SITE_DESCRIPTION,
    url: SITE.url,
    language: "tr",
    type: "AutoRental",
    address: ADDRESS_ONE_LINE,
    phone: SITE.phoneE164,
    whatsapp: `https://wa.me/${SITE.whatsapp}`,
    openingHours: "7/24",
    priceFrom: { amount: minDailyPrice(), currency: "TRY", unit: "day" },
    areaServed: [...locations.map((l) => l.name), "Sabiha Gökçen Havalimanı"],
    fleet: availableVehicles.map((v) => ({
      name: vehicleTitle(v),
      transmission: v.transmission ?? null,
      fuel: v.fuel ?? null,
      dailyPrice: typeof v.dailyPrice === "number" ? v.dailyPrice : null,
      url: `${SITE.url}/araclar/${v.slug}`,
    })),
    keyFacts: KEY_FACTS,
    profiles: [SITE.instagram, SITE.googleMaps],
    lastModified: HOME_UPDATED,
  });
}
