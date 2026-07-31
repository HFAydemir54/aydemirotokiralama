import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PriceDisplay from "@/components/PriceDisplay";
import RelatedPosts from "@/components/RelatedPosts";
import VehicleSpecs from "@/components/VehicleSpecs";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema, durationServiceSchema } from "@/lib/schema";
import { durations, type Duration } from "@/data/durations";
import { availableVehicles, vehicleTitle } from "@/data/vehicles";

/**
 * Üç süre sayfası (günlük/haftalık/aylık) aynı iskeleti paylaşır; içerik
 * farkı data/durations.ts'ten gelir.
 *
 * Fiyat tablosu her zaman GÜNLÜK fiyatı gösterir — haftalık ve aylık tutarlar
 * süreye göre belirlendiği için sabit bir rakam yazılmaz, bunun yerine
 * WhatsApp çağrısı çıkar.
 */
export default function DurationPage({ duration }: { duration: Duration }) {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: `${duration.name} Araç Kiralama`, path: `/${duration.slug}` },
  ];
  const others = durations.filter((d) => d.slug !== duration.slug);
  const isDaily = duration.slug === "gunluk-arac-kiralama";

  return (
    <>
      <JsonLd
        data={[
          durationServiceSchema(duration.name, duration.description),
          breadcrumbSchema(crumbs),
        ]}
      />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {duration.h1}
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/75">
            {duration.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppCta
              label={`sure_${duration.slug}`}
              message={`Merhaba, ${duration.name.toLowerCase()} araç kiralama için bilgi almak istiyorum.`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              WhatsApp&apos;tan Fiyat Al
            </WhatsAppCta>
            <Link
              href="/araclar"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Tüm Araçlar
            </Link>
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {duration.name} kiralamanın avantajları
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {duration.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-semibold text-primary">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Araçlar + kimler için uygun */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              {duration.name} kiralayabileceğiniz araçlar
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {duration.pricing}
            </p>

            <ul className="mt-6 space-y-3">
              {availableVehicles.map((v) => (
                <li
                  key={v.slug}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <Link
                      href={`/araclar/${v.slug}`}
                      className="font-semibold text-primary transition-colors hover:text-accent"
                    >
                      {vehicleTitle(v)}
                      {v.year && (
                        <span className="ml-2 text-sm font-normal text-muted">
                          {v.year}
                        </span>
                      )}
                    </Link>
                    <PriceDisplay
                      value={isDaily ? v.dailyPrice : null}
                      unit="Gün"
                      size="sm"
                      waLabel={`fiyat_sure_${duration.slug}_${v.slug}`}
                      waMessage={`Merhaba, ${vehicleTitle(
                        v
                      )} için ${duration.name.toLowerCase()} kiralama fiyatını öğrenebilir miyim?`}
                    />
                  </div>
                  <VehicleSpecs vehicle={v} className="mt-3" />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              {duration.name} kiralama kimler için uygun?
            </h2>
            <ul className="mt-6 space-y-3">
              {duration.bestFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-border bg-background px-5 py-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-primary-light">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-5">
              {duration.notes.map((n) => (
                <div key={n.title}>
                  <h3 className="font-semibold text-primary">{n.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{n.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-background p-6">
              <h3 className="font-semibold text-primary">Teslim ve koşullar</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Araç teslimi Pendik Çamçeşme&apos;deki ofisimizden yapılır;{" "}
                <Link
                  href="/sabiha-gokcen-arac-kiralama"
                  className="text-accent hover:underline"
                >
                  Sabiha Gökçen Havalimanı
                </Link>
                &apos;na araç getiriyoruz. Yaş sınırı yok, en az 2 yıllık
                ehliyet yeterli. Ayrıntılar{" "}
                <Link
                  href="/kiralama-kosullari"
                  className="text-accent hover:underline"
                >
                  kiralama koşulları
                </Link>{" "}
                sayfamızda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts
        slugs={[
          "pendik-arac-kiralama-fiyatlari",
          "depozitosuz-arac-kiralama",
          "istanbul-gunluk-arac-kiralama",
        ]}
        className="bg-background"
      />

      {/* Diğer süre seçenekleri */}
      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-xl font-bold text-primary">
            Diğer Kiralama Seçenekleri
          </h2>
          <ul className="flex flex-wrap gap-3">
            {others.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/${d.slug}`}
                  className="inline-block rounded-lg border border-border bg-background px-4 py-2 text-sm text-primary-light transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {d.name} Araç Kiralama
                </Link>
              </li>
            ))}
            {[
              { href: "/pendik-arac-kiralama", label: "Pendik Araç Kiralama" },
              {
                href: "/sabiha-gokcen-arac-kiralama",
                label: "Sabiha Gökçen Araç Kiralama",
              },
              { href: "/sss", label: "Sık Sorulan Sorular" },
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
