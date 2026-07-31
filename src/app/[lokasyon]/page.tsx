import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MapPin, Plane } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FleetEmptyState from "@/components/FleetEmptyState";
import VehicleCard from "@/components/VehicleCard";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema, localServiceSchema } from "@/lib/schema";

import { getLocation, locations } from "@/data/locations";
import { featuredVehicles, hasVehicles } from "@/data/vehicles";

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
            Günlük, haftalık ve aylık kiralama · {location.distance}
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
              <InfoRow icon={MapPin} title="Ofisimize ulaşım">
                {location.access}
              </InfoRow>
              <InfoRow icon={Clock} title="Çalışma saatleri">
                Ofisimiz 7/24 açıktır; teslim ve iade saatini kendinize göre
                belirleyebilirsiniz.
              </InfoRow>
              <InfoRow icon={Plane} title="Havalimanı teslimi">
                Sabiha Gökçen Havalimanı&apos;na araç getiriyoruz. Ayrıntılar için{" "}
                <Link
                  href="/sabiha-gokcen-arac-kiralama"
                  className="text-accent hover:underline"
                >
                  havalimanı sayfamıza
                </Link>{" "}
                bakabilirsiniz.
              </InfoRow>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-lg font-semibold text-primary">
              Kiralama bilgileri
            </h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-primary">Teslim noktası</dt>
                <dd className="mt-1 text-muted">
                  Araç teslimi Pendik Çamçeşme&apos;deki ofisimizden yapılır.
                  Sabiha Gökçen Havalimanı&apos;na araç getiriyoruz.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-primary">Kiralama süreleri</dt>
                <dd className="mt-1 text-muted">
                  Minimum 1 gün; günlük, haftalık ve aylık kiralama.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-primary">Şartlar</dt>
                <dd className="mt-1 text-muted">
                  En az 2 yıllık ehliyet yeterli, yaş sınırı yok. Depozito
                  alınmıyor. Günlük 200 km sınırı uygulanır.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-primary">Ödeme</dt>
                <dd className="mt-1 text-muted">
                  Nakit veya havale. Kredi kartı geçmemektedir.
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted">
              Tüm koşullar için{" "}
              <Link href="/kiralama-kosullari" className="text-accent hover:underline">
                kiralama koşulları
              </Link>{" "}
              sayfamıza bakabilirsiniz.
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
          {hasVehicles ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredVehicles.slice(0, 3).map((v) => (
                  <VehicleCard key={v.slug} vehicle={v} />
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/araclar"
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  Tüm araçları görüntüle →
                </Link>
              </div>
            </>
          ) : (
            <FleetEmptyState />
          )}
        </div>
      </section>

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
