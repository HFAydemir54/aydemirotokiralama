import { SITE } from "./site";
import type { Faq } from "@/data/faq";
import type { Vehicle } from "@/data/vehicles";
import { vehicleTitle } from "@/data/vehicles";
import { locations } from "@/data/locations";

const BUSINESS_ID = `${SITE.url}/#business`;
const WEBSITE_ID = `${SITE.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.district,
  addressRegion: SITE.address.city,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

/**
 * Araç kiralama işletmeleri için doğru schema tipi AutoRental'dır
 * (LocalBusiness'ın alt tipi).
 *
 * NOT: aggregateRating / review alanları BİLEREK eklenmemiştir. Google,
 * sitede görünmeyen veya gerçek olmayan puan verisini politika ihlali sayar.
 * Gerçek Google yorumlarınızı siteye ekledikten sonra buraya gerçek puan ve
 * yorum sayısını girebiliriz.
 */
export const autoRentalSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  "@id": BUSINESS_ID,
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/og-image.png`,
  telephone: SITE.phoneE164,
  priceRange: "₺₺",
  currenciesAccepted: "TRY",
  paymentAccepted: "Nakit, Kredi Kartı, Havale/EFT",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  hasMap: SITE.googleMaps,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    ...locations.map((l) => ({ "@type": "City", name: l.name })),
    { "@type": "Airport", name: "Sabiha Gökçen Havalimanı", iataCode: "SAW" },
  ],
  sameAs: [SITE.instagram, `https://wa.me/${SITE.whatsapp}`],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo/logo-icon.png`,
  telephone: SITE.phoneE164,
  address: postalAddress,
  sameAs: [SITE.instagram],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  inLanguage: "tr-TR",
  publisher: { "@id": `${SITE.url}/#organization` },
};

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function vehicleSchema(v: Vehicle) {
  const name = vehicleTitle(v);
  return {
    "@context": "https://schema.org",
    "@type": "Car",
    name,
    brand: { "@type": "Brand", name: v.brand },
    model: v.model,
    // Yalnızca GİRİLMİŞ alanlar schema'ya yazılır — boş alan uydurulmaz.
    ...(v.year && { vehicleModelDate: String(v.year) }),
    ...(v.transmission && { vehicleTransmission: v.transmission }),
    ...(v.fuel && { fuelType: v.fuel }),
    ...(v.seats && { seatingCapacity: v.seats }),
    ...(v.image && { image: `${SITE.url}${v.image}` }),
    // Offer yalnızca gerçek bir günlük fiyat girildiğinde yayınlanır.
    ...(typeof v.dailyPrice === "number"
      ? {
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "TRY",
            price: v.dailyPrice,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: v.dailyPrice,
              priceCurrency: "TRY",
              unitCode: "DAY",
              referenceQuantity: {
                "@type": "QuantitativeValue",
                value: 1,
                unitCode: "DAY",
              },
            },
            seller: { "@id": BUSINESS_ID },
          },
        }
      : {}),
  };
}

/** Lokasyon sayfaları için hizmet tanımı. */
export function localServiceSchema(locationName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${locationName} Araç Kiralama`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: locationName },
    description,
  };
}
