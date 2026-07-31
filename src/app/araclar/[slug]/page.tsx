import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PriceDisplay from "@/components/PriceDisplay";
import VehicleCard, { VehicleImage } from "@/components/VehicleCard";
import VehicleSpecs from "@/components/VehicleSpecs";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema, vehicleSchema } from "@/lib/schema";
import {
  availableVehicles,
  getVehicle,
  similarVehicles,
  vehicleTitle,
} from "@/data/vehicles";

/**
 * Araç detay sayfası altyapısı.
 *
 * data/vehicles.ts şu anda boş olduğu için hiçbir sayfa üretilmiyor ve
 * /araclar/<herhangi-bir-slug> 404 dönüyor (dynamicParams = false).
 * Diziye gerçek bir araç eklendiği anda sayfası otomatik oluşur — burada
 * kod değişikliği gerekmez.
 */
export function generateStaticParams() {
  return availableVehicles.map((v) => ({ slug: v.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/araclar/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return {};

  const name = vehicleTitle(vehicle);
  // Açıklamaya yalnızca girilmiş özellikler eklenir.
  const specs = [
    vehicle.transmission,
    vehicle.fuel,
    vehicle.seats && `${vehicle.seats} kişilik`,
  ]
    .filter(Boolean)
    .join(", ");

  return {
    title: `${name} Kiralama`,
    description: specs
      ? `${name} kiralama — ${specs}. Günlük, haftalık ve aylık kiralama. Pendik ve Sabiha Gökçen Havalimanı teslim.`
      : `${name} kiralama. Günlük, haftalık ve aylık kiralama. Pendik ve Sabiha Gökçen Havalimanı teslim, WhatsApp'tan hızlı rezervasyon.`,
    alternates: { canonical: `/araclar/${vehicle.slug}` },
  };
}

export default async function VehiclePage(props: PageProps<"/araclar/[slug]">) {
  const { slug } = await props.params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();

  const name = vehicleTitle(vehicle);
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Araçlar", path: "/araclar" },
    { name: `${name} Kiralama`, path: `/araclar/${vehicle.slug}` },
  ];
  const waMessage = `Merhaba, ${name} kiralamak istiyorum. Müsaitlik ve fiyat bilgisi alabilir miyim?`;
  const similar = similarVehicles(vehicle);

  return (
    <>
      <JsonLd data={[vehicleSchema(vehicle), breadcrumbSchema(crumbs)]} />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-background py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <VehicleImage vehicle={vehicle} sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {name} Kiralama
            </h1>

            {vehicle.intro && (
              <p className="mt-5 leading-relaxed text-muted">{vehicle.intro}</p>
            )}

            <VehicleSpecs vehicle={vehicle} className="mt-6" />

            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
                Kiralama Fiyatı
              </h2>

              <dl className="mt-4 space-y-3 text-sm">
                <PriceRow
                  label="Günlük"
                  value={vehicle.dailyPrice}
                  unit="Gün"
                  slug={vehicle.slug}
                  name={name}
                />
                {typeof vehicle.weeklyPrice === "number" && (
                  <PriceRow
                    label="Haftalık"
                    value={vehicle.weeklyPrice}
                    unit="Hafta"
                    slug={vehicle.slug}
                    name={name}
                  />
                )}
                {typeof vehicle.monthlyPrice === "number" && (
                  <PriceRow
                    label="Aylık"
                    value={vehicle.monthlyPrice}
                    unit="Ay"
                    slug={vehicle.slug}
                    name={name}
                  />
                )}
              </dl>

              <p className="mt-4 text-xs text-muted">
                Tarihlerinizi yazın, toplam tutarı ve kiralama koşullarını
                paylaşalım.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCta
                label={`arac_detay_${vehicle.slug}`}
                message={waMessage}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#20bd5a]"
              >
                WhatsApp&apos;tan Rezervasyon Yap
              </WhatsAppCta>
              <Link
                href="/kiralama-kosullari"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-accent/40 hover:text-accent"
              >
                Kiralama Koşulları
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted">
              Aracı{" "}
              <Link href="/pendik-arac-kiralama" className="text-accent hover:underline">
                Pendik&apos;teki ofisimizden
              </Link>{" "}
              veya{" "}
              <Link
                href="/sabiha-gokcen-arac-kiralama"
                className="text-accent hover:underline"
              >
                Sabiha Gökçen Havalimanı&apos;ndan
              </Link>{" "}
              teslim alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary">
              Diğer Araçlarımız
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((v) => (
                <VehicleCard key={v.slug} vehicle={v} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function PriceRow({
  label,
  value,
  unit,
  slug,
  name,
}: {
  label: string;
  value?: number | null;
  unit: string;
  slug: string;
  name: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
      <dt className="font-medium text-muted">{label}</dt>
      <dd>
        <PriceDisplay
          value={value}
          unit={unit}
          size="sm"
          waLabel={`fiyat_detay_${slug}`}
          waMessage={`Merhaba, ${name} için ${label.toLowerCase()} kiralama fiyatını öğrenebilir miyim?`}
        />
      </dd>
    </div>
  );
}
