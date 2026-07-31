import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PriceOnRequest from "@/components/PriceOnRequest";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema, faqSchema, durationServiceSchema } from "@/lib/schema";
import { SHOW_PRICES, formatPrice } from "@/lib/site";
import { homeFaqs } from "@/data/faq";
import { durations, type Duration } from "@/data/durations";
import { vehicles, vehicleTitle } from "@/data/vehicles";

/**
 * Üç süre sayfası (günlük/haftalık/aylık) aynı iskeleti paylaşır; içerik
 * farkı data/durations.ts'ten gelir. Ortak kalan tek şey fiyat tablosu ve SSS.
 */
export default function DurationPage({ duration }: { duration: Duration }) {
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: `${duration.name} Araç Kiralama`, path: `/${duration.slug}` },
  ];

  const others = durations.filter((d) => d.slug !== duration.slug);
  const cheapestPerDay = Math.min(
    ...vehicles.map((v) => v.prices[duration.priceKey] / duration.divisor)
  );

  return (
    <>
      <JsonLd
        data={[
          durationServiceSchema(duration.name, duration.description),
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
            {duration.h1}
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/75">
            {duration.intro}
          </p>
          {SHOW_PRICES && (
            <p className="mt-4 text-sm text-white/60">
              Günlüğe denk gelen tutar{" "}
              {formatPrice(Math.round(cheapestPerDay))}&apos;den başlıyor.
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppCta
              label={`sure_${duration.slug}`}
              message={`Merhaba, ${duration.name.toLowerCase()} araç kiralama için fiyat bilgisi alabilir miyim?`}
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Fiyat tablosu + kimler için uygun */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              {SHOW_PRICES
                ? `${duration.name} kiralama fiyatları`
                : `${duration.name} kiralayabileceğiniz araçlar`}
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[420px] text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted">
                    <th scope="col" className="pb-2 font-medium">Araç</th>
                    <th scope="col" className="pb-2 text-right font-medium">
                      {SHOW_PRICES ? duration.priceLabel : "Vites / Yakıt"}
                    </th>
                    <th scope="col" className="pb-2 text-right font-medium">
                      {SHOW_PRICES ? "Günlüğe denk" : "Fiyat"}
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
                          {vehicleTitle(v)}
                        </Link>
                      </th>
                      <td className="py-3 text-right text-muted">
                        {SHOW_PRICES
                          ? formatPrice(v.prices[duration.priceKey])
                          : `${v.transmission} · ${v.fuel}`}
                      </td>
                      <td className="py-3 text-right">
                        {SHOW_PRICES ? (
                          <span className="text-muted">
                            {formatPrice(
                              Math.round(
                                v.prices[duration.priceKey] / duration.divisor
                              )
                            )}
                          </span>
                        ) : (
                          <PriceOnRequest
                            size="sm"
                            label={`fiyat_sure_${duration.slug}_${v.slug}`}
                            message={`Merhaba, ${vehicleTitle(v)} için ${duration.name.toLowerCase()} kiralama fiyatını öğrenebilir miyim?`}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted">
              Fiyatlara sigorta, kasko ve periyodik bakım dahildir. Yakıt, HGS ve
              cezalar kiracıya aittir.
            </p>
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
          </div>
        </div>
      </section>

      <FaqSection
        faqs={homeFaqs}
        title={`${duration.name} Araç Kiralama SSS`}
        className="bg-background"
      />

      {/* Diğer süre seçenekleri + ilgili sayfalar */}
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
