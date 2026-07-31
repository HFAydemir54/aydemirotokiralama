import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Plane } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import RelatedPosts from "@/components/RelatedPosts";
import FleetEmptyState from "@/components/FleetEmptyState";
import VehicleCard from "@/components/VehicleCard";
import WhatsAppCta from "@/components/WhatsAppCta";
import {
  breadcrumbSchema,
  faqSchema,
  localServiceSchema,
} from "@/lib/schema";

import { airportFaqs } from "@/data/faq";
import { featuredVehicles, hasVehicles } from "@/data/vehicles";

const DESCRIPTION =
  "Sabiha Gökçen Havalimanı araç kiralama. Pendik ofisimiz havalimanına 15 dakika mesafede; havalimanına araç getiriyoruz. 7/24 açık, WhatsApp'tan rezervasyon.";

export const metadata: Metadata = {
  // absolute: marka soneki eklenmesin, başlık SERP'te kesilmesin.
  title: { absolute: "Sabiha Gökçen Araç Kiralama | Aydemir Oto Kiralama" },
  description: DESCRIPTION,
  alternates: { canonical: "/sabiha-gokcen-arac-kiralama" },
};

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Sabiha Gökçen Araç Kiralama", path: "/sabiha-gokcen-arac-kiralama" },
];

const WA = "Merhaba, Sabiha Gökçen Havalimanı'ndan araç kiralamak istiyorum.";

export default function AirportPage() {
  return (
    <>
      <JsonLd
        data={[
          localServiceSchema("Sabiha Gökçen Havalimanı", DESCRIPTION),
          faqSchema(airportFaqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80">
            <Plane className="h-4 w-4 text-accent" />
            Havalimanı teslim hizmeti
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Sabiha Gökçen Havalimanı Araç Kiralama
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/75">
            Pendik Çamçeşme&apos;deki ofisimiz Sabiha Gökçen Havalimanı&apos;na
            yaklaşık 15 dakikalık mesafededir. Havalimanına araç getiriyoruz;
            teslim saatini WhatsApp&apos;tan konuşarak birlikte belirliyoruz.
            Ofisimiz 7/24 açık olduğu için gece saatlerinde de teslim
            yapabiliyoruz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppCta
              label="sabiha_sayfa_hero"
              message={WA}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              WhatsApp&apos;tan Rezervasyon
            </WhatsAppCta>
            <Link
              href="/araclar"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Araçları ve Fiyatları Gör
            </Link>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            <Highlight icon={MapPin} title="15 dakika mesafe">
              Pendik ofisimiz havalimanına yaklaşık 15 dakika uzaklıkta.
            </Highlight>
            <Highlight icon={Plane} title="Havalimanına araç getiriyoruz">
              Teslim saatini önceden birlikte belirliyoruz.
            </Highlight>
            <Highlight icon={Clock} title="7/24 açık">
              Gece saatlerinde de araç teslimi yapabiliyoruz.
            </Highlight>
          </ul>
        </div>
      </section>

      {/* Teslim akışı */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Havalimanı Araç Kiralama Nasıl İşliyor?
          </h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                t: "WhatsApp'tan yazın",
                d: "Kiralama tarihlerinizi, havalimanına varış saatinizi ve tercih ettiğiniz aracı iletin.",
              },
              {
                t: "Müsaitlik ve fiyatı teyit edelim",
                d: "Uygun araçları ve toplam tutarı paylaşıyoruz. Sorunuz varsa teslimden önce netleştiriyoruz.",
              },
              {
                t: "Teslim saatini belirleyelim",
                d: "Havalimanına aracı ne zaman getireceğimizi birlikte kararlaştırıyoruz. Ofisimiz 7/24 açık olduğu için gece saatleri de dahil.",
              },
              {
                t: "Aracı teslim alın",
                d: "Belirlediğimiz noktada, en az 2 yıllık ehliyetiniz ve kimliğinizle sözleşmeyi tamamlayıp yola çıkıyorsunuz.",
              },
            ].map((s, i) => (
              <li key={s.t} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-bold text-accent">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-primary">
              Kiralama öncesi bilmeniz gerekenler
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>Yaş sınırı yok; sürücü belgenizin en az 2 yıllık olması yeterli.</li>
              <li>Depozito almıyoruz. Aracı önceden ayırtmak isterseniz kapora alınır.</li>
              <li>Ödeme nakit veya havale ile yapılır; kredi kartı geçmemektedir.</li>
              <li>Günlük 200 km kilometre sınırı uygulanır.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Tüm koşulların ayrıntısı için{" "}
              <Link
                href="/kiralama-kosullari"
                className="font-medium text-accent hover:underline"
              >
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
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Sabiha Gökçen&apos;de Teslim Edebileceğimiz Araçlar
          </h2>
          {hasVehicles ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredVehicles.map((v) => (
                <VehicleCard key={v.slug} vehicle={v} />
              ))}
            </div>
          ) : (
            <FleetEmptyState />
          )}
        </div>
      </section>

      <FaqSection
        faqs={airportFaqs}
        title="Sabiha Gökçen Araç Kiralama SSS"
        className="bg-background"
      />

      <RelatedPosts
        slugs={[
          "sabiha-gokcen-arac-kiralama-nasil-yapilir",
          "arac-kiralama-icin-gerekli-belgeler",
          "kredi-kartsiz-arac-kiralama",
        ]}
        className="bg-surface"
      />

      {/* İlgili sayfalar */}
      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-xl font-bold text-primary">İlgili Sayfalar</h2>
          <ul className="flex flex-wrap gap-3">
            {[
              { href: "/pendik-arac-kiralama", label: "Pendik Araç Kiralama" },
              { href: "/tuzla-arac-kiralama", label: "Tuzla Araç Kiralama" },
              { href: "/istanbul-arac-kiralama", label: "İstanbul Araç Kiralama" },
              { href: "/kiralama-kosullari", label: "Kiralama Koşulları" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block rounded-lg border border-border bg-background px-4 py-2 text-sm text-primary-light transition-colors hover:border-accent/40 hover:text-accent"
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

function Highlight({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <Icon className="h-5 w-5 text-accent" />
      <h2 className="mt-3 font-semibold text-white">{title}</h2>
      <p className="mt-1 text-sm text-white/60">{children}</p>
    </li>
  );
}
