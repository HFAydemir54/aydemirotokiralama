import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MapPin, Plane } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PriceOnRequest from "@/components/PriceOnRequest";
import RelatedPosts from "@/components/RelatedPosts";
import VehicleCard from "@/components/VehicleCard";
import WhatsAppCta from "@/components/WhatsAppCta";
import {
  breadcrumbSchema,
  faqSchema,
  localServiceSchema,
} from "@/lib/schema";
import { SHOW_PRICES, formatPrice } from "@/lib/site";
import { homeFaqs } from "@/data/faq";
import { getLocation, locations } from "@/data/locations";
import { minDailyPrice, popularVehicles, vehicles } from "@/data/vehicles";

/**
 * Lokasyon (ilçe) sayfaları: /pendik-arac-kiralama, /kartal-arac-kiralama ...
 *
 * Bu segment kök seviyede olduğu için `dynamicParams = false` kritik:
 * aksi halde her uydurma URL bu sayfayı render eder ve duplicate içerik
 * üretir. Sadece data/locations.ts'teki slug'lar geçerlidir.
 */
export function generateStaticParams() {
  return locations.map((l) => ({ lokasyon: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/[lokasyon]">
): Promise<Metadata> {
  const { lokasyon } = await props.params;
  const location = getLocation(lokasyon);
  if (!location) return {};

  return {
    title: location.title,
    description: location.description,
    alternates: { canonical: `/${location.slug}` },
  };
}

export default async function LocationPage(props: PageProps<"/[lokasyon]">) {
  const { lokasyon } = await props.params;
  const location = getLocation(lokasyon);
  if (!location) notFound();

  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: `${location.name} Araç Kiralama`, path: `/${location.slug}` },
  ];

  const waMessage = `Merhaba, ${location.locative} araç kiralamak istiyorum. Uygun araçlarınızı ve fiyatları öğrenebilir miyim?`;
  const nearby = location.nearby
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <>
      <JsonLd
        data={[
          localServiceSchema(location.name, location.description),
          faqSchema(homeFaqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {location.name} Araç Kiralama
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/75">
            {location.intro}
          </p>
          <p className="mt-4 text-sm text-white/60">
            {SHOW_PRICES
              ? `Günlük kiralama ${formatPrice(minDailyPrice)}'den başlayan fiyatlarla · `
              : "Günlük, haftalık ve aylık kiralama · "}
            {location.deliveryTime}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppCta
              label={`lokasyon_${location.slug}`}
              message={waMessage}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              WhatsApp&apos;tan Rezervasyon
            </WhatsAppCta>
            <Link
              href="/araclar"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Araçlar ve Fiyatlar
            </Link>
          </div>
        </div>
      </section>

      {/* İlçeye özgü içerik */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              {location.name}&apos;de Neden Aydemir Oto Kiralama?
            </h2>
            <p className="mt-5 leading-relaxed text-muted">{location.useCase}</p>

            <div className="mt-8 space-y-4">
              <InfoRow icon={Clock} title="Teslimat süresi">
                {location.deliveryTime}
              </InfoRow>
              <InfoRow icon={Plane} title="Havalimanına mesafe">
                {location.airport}
              </InfoRow>
              <InfoRow icon={MapPin} title="Teslimat yaptığımız noktalar">
                {location.neighborhoods.join(", ")}
              </InfoRow>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-lg font-semibold text-primary">
              {location.name}&apos;e teslim ettiğimiz araçlar
            </h2>
            <table className="mt-5 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted">
                  <th scope="col" className="pb-2 font-medium">
                    Araç
                  </th>
                  <th scope="col" className="pb-2 text-right font-medium">
                    {SHOW_PRICES ? "Günlük" : "Vites / Yakıt"}
                  </th>
                  <th scope="col" className="pb-2 text-right font-medium">
                    {SHOW_PRICES ? "Aylık" : "Fiyat"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {vehicles.map((v) => (
                  <tr key={v.slug}>
                    <th scope="row" className="py-3 text-left font-medium">
                      <Link
                        href={`/araclar/${v.slug}`}
                        className="text-primary transition-colors hover:text-accent"
                      >
                        {v.brand} {v.model}
                      </Link>
                    </th>
                    <td className="py-3 text-right text-muted">
                      {SHOW_PRICES
                        ? formatPrice(v.prices.daily)
                        : `${v.transmission} · ${v.fuel}`}
                    </td>
                    <td className="py-3 text-right">
                      {SHOW_PRICES ? (
                        <span className="text-muted">
                          {formatPrice(v.prices.monthly)}
                        </span>
                      ) : (
                        <PriceOnRequest
                          size="sm"
                          label={`fiyat_lokasyon_${v.slug}`}
                          message={`Merhaba, ${location.locative} ${v.brand} ${v.model} kiralamak istiyorum. Fiyat bilgisi alabilir miyim?`}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-muted">
              Fiyatlara sigorta ve bakım dahildir. Güncel fiyat ve müsaitlik için
              WhatsApp&apos;tan yazabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Araçlar */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary">
            {location.name}&apos;e Teslim Edebileceğimiz Araçlar
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularVehicles.slice(0, 3).map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/araclar"
              className="text-sm font-semibold text-accent hover:underline"
            >
              Tüm araçları ve fiyatları görüntüle →
            </Link>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={homeFaqs}
        title={`${location.name} Araç Kiralama SSS`}
        className="bg-background"
      />

      <RelatedPosts
        slugs={[
          "pendik-arac-kiralama-fiyatlari",
          "istanbul-gunluk-arac-kiralama",
          "arac-kiralama-icin-gerekli-belgeler",
        ]}
        className="bg-surface"
      />

      {/* Yakın bölgeler + havalimanı: internal linking */}
      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-xl font-bold text-primary">
            Yakın Bölgelerde Araç Kiralama
          </h2>
          <ul className="flex flex-wrap gap-3">
            {nearby.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/${l.slug}`}
                  className="inline-block rounded-lg border border-border bg-background px-4 py-2 text-sm text-primary-light transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {l.name} Araç Kiralama
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/sabiha-gokcen-arac-kiralama"
                className="inline-block rounded-lg border border-border bg-background px-4 py-2 text-sm text-primary-light transition-colors hover:border-accent/40 hover:text-accent"
              >
                Sabiha Gökçen Araç Kiralama
              </Link>
            </li>
            <li>
              <Link
                href="/kiralama-kosullari"
                className="inline-block rounded-lg border border-border bg-background px-4 py-2 text-sm text-primary-light transition-colors hover:border-accent/40 hover:text-accent"
              >
                Kiralama Koşulları
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-primary">{title}</h3>
        <p className="mt-0.5 text-sm leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}
