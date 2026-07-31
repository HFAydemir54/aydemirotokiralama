import { Star } from "lucide-react";
import { FEATURED_COUNT, ratingSummary, reviews } from "@/data/reviews";
import { SITE } from "@/lib/site";

/**
 * Google yorumları bölümü.
 *
 * data/reviews.ts'teki GERÇEK yorumları gösterir; dizi boşsa sahte yorum
 * üretmek yerine değerlendirme çağrısına döner.
 *
 * NOT: Burada bilinçli olarak aggregateRating schema'sı yayınlanmıyor.
 * Google, bir işletmenin kendi sitesinde kendisi hakkında yayınladığı
 * yorumları ("self-serving reviews") zengin sonuç için geçerli saymıyor —
 * yıldız çıkmayacağı için işaretleme eklemek anlamsız olurdu. Bu bölümün
 * amacı arama görünürlüğü değil, siteye gelen ziyaretçide güven oluşturmak.
 */
export default function Reviews() {
  const hasReviews = reviews.length > 0;
  const featured = reviews.slice(0, FEATURED_COUNT);

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Yorumlar
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Müşterilerimiz Ne Diyor?
          </h2>

          {hasReviews && ratingSummary && (
            <div className="mt-5 flex items-center justify-center gap-2">
              <Stars value={Math.round(ratingSummary.value)} />
              <span className="text-lg font-bold text-primary">
                {ratingSummary.value.toLocaleString("tr-TR", {
                  minimumFractionDigits: 1,
                })}
              </span>
            </div>
          )}

          {hasReviews && (
            <p className="mt-3 leading-relaxed text-muted">
              {ratingSummary ? (
                <>
                  Google&apos;da{" "}
                  <span className="font-semibold text-primary">
                    {ratingSummary.value.toLocaleString("tr-TR", {
                      minimumFractionDigits: 1,
                    })}
                  </span>{" "}
                  puan ortalamasıyla {ratingSummary.count} değerlendirme.
                </>
              ) : (
                <>Google Haritalar&apos;daki değerlendirmelerimizden bir seçki.</>
              )}
            </p>
          )}
        </div>

        {hasReviews ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((r) => (
                <figure
                  key={`${r.author}-${r.text.slice(0, 16)}`}
                  className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
                >
                  <Stars value={r.rating} />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <span className="block text-sm font-semibold text-primary">
                      {r.author}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {formatMonth(r.date)} · Google yorumu
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={SITE.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent/40 hover:text-accent"
              >
                {ratingSummary
                  ? `${ratingSummary.count} Yorumun Tamamını Gör`
                  : "Tüm Yorumları Google'da Gör"}
              </a>
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Siz de Değerlendirin
              </a>
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-8 text-center">
            <Stars value={5} className="justify-center" />
            <p className="mt-4 leading-relaxed text-muted">
              Aydemir Oto Kiralama&apos;dan araç kiraladıysanız, deneyiminizi
              Google&apos;da paylaşarak bize destek olabilirsiniz.
            </p>
            <a
              href={SITE.googleReviewUrl || SITE.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Google&apos;da Değerlendirin
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function Stars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${value} / 5 puan`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </div>
  );
}

/** "2026-07" → "Temmuz 2026" */
function formatMonth(value: string): string {
  const [year, month] = value.split("-");
  const names = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const name = names[Number(month) - 1];
  return name ? `${name} ${year}` : year;
}
