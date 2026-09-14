import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Clock, Wallet } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import RelatedPosts from "@/components/RelatedPosts";
import FleetEmptyState from "@/components/FleetEmptyState";
import VehicleCard from "@/components/VehicleCard";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema, faqSchema, localServiceSchema } from "@/lib/schema";
import { formatPrice } from "@/lib/site";
import type { Faq } from "@/data/faq";
import { availableVehicles, hasVehicles, minDailyPrice } from "@/data/vehicles";

/**
 * Genel "araç kiralama / araba kiralama / kiralık araba / rent a car"
 * sorgularını hedefleyen sayfa. Ana sayfa "Pendik araç kiralama"yı hedefler;
 * bu sayfa lokasyonsuz genel niyeti karşılar.
 */
const minPrice = minDailyPrice();

const DESCRIPTION = `Araç kiralama ve araba kiralama (rent a car) Aydemir Oto Kiralama'da.${
  minPrice ? ` Günlük ${formatPrice(minPrice)}'den başlayan fiyatlar,` : ""
} depozito yok, 7/24 açık. Pendik ofisi ve Sabiha Gökçen teslim.`;

export const metadata: Metadata = {
  title: { absolute: "Araç Kiralama | Uygun Fiyatlı Araba Kiralama – Aydemir" },
  description: DESCRIPTION,
  alternates: { canonical: "/arac-kiralama" },
};

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Araç Kiralama", path: "/arac-kiralama" },
];

const WA = "Merhaba, araç kiralamak istiyorum. Uygun araçlarınızı ve fiyatı paylaşabilir misiniz?";

const faqs: Faq[] = [
  {
    q: "En uygun araç kiralama fiyatı ne kadar?",
    a: minPrice
      ? `Günlük araç kiralama fiyatlarımız ${formatPrice(minPrice)}'den başlıyor. Haftalık ve aylık fiyatlar araca ve süreye göre değiştiği için tarihlerinizi WhatsApp'tan yazmanız yeterli.`
      : "Fiyatlar araca ve süreye göre değişiyor. Tarihlerinizi WhatsApp'tan yazın, size özel fiyatı hemen paylaşalım.",
  },
  {
    q: "Araba kiralamak için ne gerekli?",
    a: "En az 2 yıllık sürücü belgesi ve kimlik belgeniz yeterlidir. Yaş sınırımız bulunmuyor.",
  },
  {
    q: "Kiralık araba için depozito veya kredi kartı gerekiyor mu?",
    a: "Hayır. Depozito almıyoruz ve ödemeyi nakit veya havale ile kabul ediyoruz; kredi kartı geçmemektedir. Aracı önceden ayırtmak isterseniz yalnızca kapora alınır.",
  },
  {
    q: "Aracı nereden teslim alabilirim?",
    a: "Araçlar Pendik Çamçeşme'deki ofisimizden teslim edilir. Sabiha Gökçen Havalimanı'na ise araç getiriyoruz.",
  },
  {
    q: "Kilometre sınırı var mı?",
    a: "Günlük 200 km kilometre sınırı uygulanmaktadır.",
  },
];

export default function CarRentalPage() {
  return (
    <>
      <JsonLd
        data={[
          localServiceSchema("İstanbul", DESCRIPTION),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Araç Kiralama
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/75">
            Kiralık araba mı arıyorsunuz? Aydemir Oto Kiralama olarak günlük,
            haftalık ve aylık araç kiralama hizmeti veriyoruz. Depozito almıyor,
            7/24 teslim yapıyoruz. Araçlarımızı Pendik ofisimizden teslim ediyor,
            Sabiha Gökçen Havalimanı&apos;na da getiriyoruz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppCta
              label="arac_kiralama_hero"
              message={WA}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              WhatsApp&apos;tan Fiyat Al
            </WhatsAppCta>
            <Link
              href="/araclar"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Tüm Araçları Gör
            </Link>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            <Highlight icon={Wallet} title={minPrice ? `Günlük ${formatPrice(minPrice)}'den` : "Uygun fiyat"}>
              En uygun araç kiralama seçenekleri.
            </Highlight>
            <Highlight icon={BadgeCheck} title="Depozito yok">
              Nakit veya havale ile ödeme.
            </Highlight>
            <Highlight icon={Clock} title="7/24 açık">
              Gece saatlerinde de araç teslimi.
            </Highlight>
          </ul>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Rent a Car: Kiralama Seçenekleri
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            İhtiyacınıza göre farklı sürelerde araba kiralama yapabilirsiniz.
            Kısa şehir içi kullanımdan uzun dönem kiralamaya kadar size en
            uygun seçeneği birlikte belirliyoruz.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/gunluk-arac-kiralama", label: "Günlük Araç Kiralama" },
              { href: "/haftalik-arac-kiralama", label: "Haftalık Araç Kiralama" },
              { href: "/aylik-arac-kiralama", label: "Aylık Araç Kiralama" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-primary transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-primary">Kiralama koşulları</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>Yaş sınırı yok; sürücü belgenizin en az 2 yıllık olması yeterli.</li>
              <li>Depozito almıyoruz. Aracı önceden ayırtmak isterseniz kapora alınır.</li>
              <li>Ödeme nakit veya havale ile yapılır; kredi kartı geçmemektedir.</li>
              <li>Günlük 200 km kilometre sınırı uygulanır.</li>
              <li>Tüm araçlarımız sigortalı ve kaskoludur.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Ayrıntılar için{" "}
              <Link href="/kiralama-kosullari" className="font-medium text-accent hover:underline">
                kiralama koşulları
              </Link>{" "}
              sayfamıza bakabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Kiralık Araba Seçeneklerimiz
          </h2>
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

      <FaqSection faqs={faqs} title="Araç Kiralama SSS" className="bg-background" />

      <RelatedPosts
        slugs={[
          "pendik-arac-kiralama-fiyatlari",
          "arac-kiralama-icin-gerekli-belgeler",
          "arac-kiralarken-dikkat-edilmesi-gerekenler",
        ]}
        className="bg-surface"
      />

      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-xl font-bold text-primary">İlgili Sayfalar</h2>
          <ul className="flex flex-wrap gap-3">
            {[
              { href: "/pendik-arac-kiralama", label: "Pendik Araç Kiralama" },
              { href: "/istanbul-arac-kiralama", label: "İstanbul Araç Kiralama" },
              { href: "/sabiha-gokcen-arac-kiralama", label: "Sabiha Gökçen Araç Kiralama" },
              { href: "/kurtkoy-arac-kiralama", label: "Kurtköy Araç Kiralama" },
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
      <p className="mt-3 font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-white/60">{children}</p>
    </li>
  );
}
