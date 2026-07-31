import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FleetEmptyState from "@/components/FleetEmptyState";
import JsonLd from "@/components/JsonLd";
import VehicleCard from "@/components/VehicleCard";
import { breadcrumbSchema } from "@/lib/schema";
import { availableVehicles, hasVehicles } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Kiralık Araç Filomuz",
  description:
    "Aydemir Oto Kiralama araç filosu. Günlük, haftalık ve aylık kiralama; Pendik ve Sabiha Gökçen Havalimanı teslim. Güncel araç ve fiyat bilgisi için bize yazın.",
  alternates: { canonical: "/araclar" },
};

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Araçlar", path: "/araclar" },
];

export default function VehiclesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Kiralık Araçlarımız
          </h1>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted">
            Filomuzdaki araçların tamamı otomatik ve manuel vites seçenekleriyle
            günlük, haftalık veya aylık kiralanabilir. Araç teslimi Pendik
            Çamçeşme&apos;deki ofisimizden yapılır; Sabiha Gökçen
            Havalimanı&apos;na ise araç getiriyoruz.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Yaş sınırı yok", "En az 2 yıllık ehliyet yeterli"],
              ["Depozito yok", "Önceden ayırtmak isterseniz kapora alınır"],
              ["Günlük 200 km", "Uzun yol planınızı önceden konuşalım"],
              ["7/24 açık", "Teslim saatini siz belirleyin"],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <p className="font-semibold text-primary">{t}</p>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-6xl px-6">
          {hasVehicles ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {availableVehicles.map((v) => (
                <VehicleCard key={v.slug} vehicle={v} />
              ))}
            </div>
          ) : (
            <FleetEmptyState />
          )}
        </div>
      </section>

      <section className="border-t border-border bg-background py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-xl font-bold text-primary">İlgili Sayfalar</h2>
          <ul className="flex flex-wrap gap-3">
            {[
              { href: "/pendik-arac-kiralama", label: "Pendik Araç Kiralama" },
              {
                href: "/sabiha-gokcen-arac-kiralama",
                label: "Sabiha Gökçen Araç Kiralama",
              },
              { href: "/kiralama-kosullari", label: "Kiralama Koşulları" },
              { href: "/iletisim", label: "İletişim" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block rounded-lg border border-border bg-surface px-4 py-2 text-sm text-primary-light transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
