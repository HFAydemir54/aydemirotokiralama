import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { sortedPosts } from "@/data/posts";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Araç Kiralama Rehberi ve Blog",
  description:
    "Araç kiralama fiyatları, gerekli belgeler, depozito, yaş sınırı ve havalimanı kiralaması hakkında bilmeniz gereken her şey.",
  alternates: { canonical: "/blog" },
};

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Araç Kiralama Rehberi
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            Araç kiralarken en çok sorulan konuları, kendi deneyimimize dayanarak
            ve net cevaplarla anlattık. Aradığınızı bulamazsanız WhatsApp&apos;tan
            sorabilirsiniz.
          </p>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-3xl px-6">
          <ul className="space-y-5">
            {sortedPosts.map((post) => (
              <li key={post.slug}>
                <article className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-accent/30 hover:shadow-sm">
                  <h2 className="text-xl font-semibold text-primary">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors group-hover:text-accent"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 flex items-center gap-4 text-xs text-muted">
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingMinutes} dk okuma
                    </span>
                    <span className="ml-auto flex items-center gap-1 font-medium text-accent">
                      Oku
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
