import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import VehicleCard from "@/components/VehicleCard";
import FaqSection from "@/components/FaqSection";
import LocationsGrid from "@/components/LocationsGrid";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { formatPrice } from "@/lib/site";
import { homeFaqs } from "@/data/faq";
import { SEGMENT_LABELS, minDailyPrice, vehicles } from "@/data/vehicles";
import type { Segment } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Kiralık Araçlar ve Günlük Fiyatlar",
  description: `Aydemir Oto Kiralama filosu ve güncel günlük fiyatları. Ekonomik, orta sınıf ve SUV araçlar ${formatPrice(
    minDailyPrice
  )}'den başlayan fiyatlarla. Pendik ve Sabiha Gökçen teslim.`,
  alternates: { canonical: "/araclar" },
};

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Araçlar", path: "/araclar" },
];

/** Segmentleri sabit sırayla gösteriyoruz (ekonomikten yukarı). */
const segmentOrder: Segment[] = ["ekonomik", "orta", "suv", "lux"];

export default function VehiclesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Kiralık Araçlarımız ve Günlük Fiyatları
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted">
            Filomuzdaki tüm araçların günlük, haftalık ve aylık fiyatlarını
            aşağıda bulabilirsiniz. Fiyatlara sigorta ve bakım dahildir; teslim
            öncesi toplam tutarı yazılı olarak paylaşıyoruz. Araç seçiminde
            kararsız kalırsanız kullanım amacınızı yazın, size uygun olanı
            önerelim.
          </p>
        </div>
      </section>

      {segmentOrder.map((segment) => {
        const group = vehicles.filter((v) => v.segment === segment);
        if (group.length === 0) return null;

        return (
          <section
            key={segment}
            className="border-t border-border bg-surface py-14"
          >
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary">
                {SEGMENT_LABELS[segment]} Araçlar
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((v) => (
                  <VehicleCard key={v.slug} vehicle={v} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <LocationsGrid
        title="Aracınızı Nereye Teslim Edelim?"
        description="Aşağıdaki bölgelerin tamamına araç teslimatı yapıyoruz."
        className="bg-background"
      />
      <FaqSection faqs={homeFaqs} className="bg-surface" />
    </>
  );
}
