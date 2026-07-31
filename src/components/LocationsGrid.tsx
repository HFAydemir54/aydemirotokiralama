import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations, type Location } from "@/data/locations";

/**
 * Hizmet bölgeleri — internal linking'in ana motoru.
 * Ana sayfadan tüm lokasyon sayfalarına, lokasyon sayfalarından da
 * komşu ilçelere link akıtır.
 */
export default function LocationsGrid({
  items = locations,
  title = "Hizmet Verdiğimiz Bölgeler",
  description = "Pendik merkez ofisimizden İstanbul Anadolu Yakası'nın tamamına araç teslimatı yapıyoruz.",
  className = "bg-surface",
}: {
  items?: Location[];
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Bölgeler
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{description}</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/${l.slug}`}
                className="flex h-full flex-col gap-1 rounded-xl border border-border bg-background p-5 transition-all hover:border-accent/40 hover:shadow-sm"
              >
                <span className="flex items-center gap-2 font-semibold text-primary">
                  <MapPin className="h-4 w-4 text-accent" />
                  {l.name} Araç Kiralama
                </span>
                <span className="text-xs leading-relaxed text-muted">
                  {l.deliveryTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
