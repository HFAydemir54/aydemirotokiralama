import { Star } from "lucide-react";
import { ratingSummary, reviews } from "@/data/reviews";
import { SITE } from "@/lib/site";

/**
 * Google yorumları bölümü.
 * data/reviews.ts boşken sahte yorum üretmez; bunun yerine değerlendirme
 * çağrısı gösterir. Gerçek yorumlar eklendiğinde bölüm otomatik olarak
 * yorum kartlarına döner.
 */
export default function Reviews() {
  const hasReviews = reviews.length > 0;

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
            <p className="mt-4 flex items-center justify-center gap-2 text-muted">
              <Stars value={Math.round(ratingSummary.value)} />
              <span className="font-semibold text-primary">
                {ratingSummary.value.toFixed(1)}
              </span>
              <span className="text-sm">
                ({ratingSummary.count} Google değerlendirmesi)
              </span>
            </p>
          )}
        </div>

        {hasReviews ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={`${r.author}-${r.date}`}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <Stars value={r.rating} />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-primary">
                  {r.author}
                  <span className="ml-2 font-normal text-xs text-muted">
                    {new Date(r.date).toLocaleDateString("tr-TR", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-8 text-center">
            <Stars value={5} className="justify-center" />
            <p className="mt-4 leading-relaxed text-muted">
              Aydemir Oto Kiralama&apos;dan araç kiraladıysanız, deneyiminizi Google&apos;da
              paylaşarak bize destek olabilirsiniz. Yorumlarınız bizden sonra araç
              kiralayacak misafirlerimize yol gösteriyor.
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
          className={`h-4 w-4 ${
            i < value ? "fill-accent text-accent" : "text-border"
          }`}
        />
      ))}
    </div>
  );
}
