import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Plane } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import RelatedPosts from "@/components/RelatedPosts";
import VehicleCard from "@/components/VehicleCard";
import WhatsAppCta from "@/components/WhatsAppCta";
import {
  breadcrumbSchema,
  faqSchema,
  localServiceSchema,
} from "@/lib/schema";
import { formatPrice } from "@/lib/site";
import { airportFaqs } from "@/data/faq";
import { minDailyPrice, popularVehicles } from "@/data/vehicles";

const DESCRIPTION =
  "Sabiha Gökçen Havalimanı'nda araç kiralama. Uçuş takipli karşılama, 7/24 araç teslimi, gece inen uçuşlarda da hizmet. WhatsApp'tan hızlı rezervasyon.";

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
            Sabiha Gökçen Havalimanı&apos;na indiğinizde aracınız sizi bekliyor
            olsun. Pendik&apos;teki ofisimiz havalimanına yaklaşık 8 km mesafede
            olduğu için teslimatı hızlı yapıyor, uçuşunuzu takip ederek rötar
            durumunda teslim saatini kendimiz güncelliyoruz. Günlük kiralama{" "}
            {formatPrice(minDailyPrice)}&apos;den başlıyor.
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
            <Highlight icon={MapPin} title="8 km mesafe">
              Ofisimiz havalimanına 15–20 dakika uzaklıkta.
            </Highlight>
            <Highlight icon={Clock} title="7/24 teslimat">
              Gece inen uçuşlarda da araç teslimi yapıyoruz.
            </Highlight>
            <Highlight icon={Plane} title="Uçuş takibi">
              Rötar olursa teslim saatini biz güncelliyoruz.
            </Highlight>
          </ul>
        </div>
      </section>

      {/* Teslim akışı */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Havalimanında Araç Teslimi Nasıl İşliyor?
          </h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                t: "WhatsApp'tan uçuş bilginizi gönderin",
                d: "Uçuş numarası, iniş saati, kiralama süresi ve tercih ettiğiniz araç. Fiyatı ve müsaitliği hemen teyit ediyoruz.",
              },
              {
                t: "Uçuşunuzu takip ediyoruz",
                d: "İniş saatiniz değişirse teslim planını biz güncelliyoruz; bunun için ek ücret talep etmiyoruz.",
              },
              {
                t: "Çıkışta buluşuyoruz",
                d: "Bagajınızı aldıktan sonra buluşma noktasında sizi karşılıyoruz. Ofis kuyruğunda beklemeniz gerekmiyor.",
              },
              {
                t: "Sözleşme ve teslim",
                d: "Ehliyet ve kimliğinizle sözleşme birkaç dakikada tamamlanıyor, aracı teslim alıp yola çıkıyorsunuz.",
              },
              {
                t: "İade",
                d: "Aracı dönüşte yine havalimanında teslim edebilirsiniz. Uçuş saatinizden önce haber vermeniz yeterli.",
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
              Havalimanından çıkarken bilmeniz gerekenler
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Sabiha Gökçen çıkışında otoyol bağlantısı için HGS gereklidir;
              araçlarımızda HGS mevcuttur ve geçiş ücretleri teslim sonrası
              hesaplanır. Havalimanından İstanbul Anadolu Yakası&apos;na ulaşım
              trafiğe göre 20–50 dakika sürer. Kiralama öncesi ehliyet ve kimlik
              belgenizi yanınızda bulundurun; yabancı misafirlerimizde pasaport
              ve uluslararası ehliyet aranır.
            </p>
          </div>
        </div>
      </section>

      {/* Araçlar */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Sabiha Gökçen&apos;de Teslim Edebileceğimiz Araçlar
          </h2>
          <p className="mb-8 max-w-2xl text-muted">
            Havalimanı teslimlerinde bagaj hacmi öne çıktığı için sedan ve SUV
            araçlarımız daha çok tercih ediliyor.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularVehicles.map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>
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
              { href: "/kurtkoy-arac-kiralama", label: "Kurtköy Araç Kiralama" },
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
