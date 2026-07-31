import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sortedPosts } from "@/data/posts";

/**
 * Araç ve lokasyon sayfalarından blog'a ters yönlü link.
 * Internal linking'in tek yönlü kalmaması için gerekli: blog yazıları hizmet
 * sayfalarına link verirken, hizmet sayfaları da blog'u besler.
 */
export default function RelatedPosts({
  slugs,
  title = "Faydalı Olabilecek Yazılar",
  className = "bg-background",
}: {
  /** Gösterilecek yazı slug'ları; verilmezse en yeni 3 yazı. */
  slugs?: string[];
  title?: string;
  className?: string;
}) {
  const items = slugs
    ? slugs
        .map((s) => sortedPosts.find((p) => p.slug === s))
        .filter((p): p is NonNullable<typeof p> => Boolean(p))
    : sortedPosts.slice(0, 3);

  if (items.length === 0) return null;

  return (
    <section className={`border-t border-border py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-xl font-bold text-primary">{title}</h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {items.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/40"
              >
                <span className="font-semibold text-primary">{p.title}</span>
                <span className="mt-2 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </span>
                <span className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                  Oku
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
