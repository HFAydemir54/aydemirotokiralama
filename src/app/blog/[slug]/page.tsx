import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PostBody from "@/components/PostBody";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema, postSchema } from "@/lib/schema";
import { formatDate } from "@/lib/date";
import { getPost, otherPosts, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[postSchema(post), breadcrumbSchema(crumbs)]} />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <article className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.updatedAt !== post.publishedAt && (
              <span>Güncelleme: {formatDate(post.updatedAt)}</span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingMinutes} dk okuma
            </span>
          </p>

          <PostBody blocks={post.blocks} />

          {/* Yazı sonu dönüşüm bloğu */}
          <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
            <h2 className="text-lg font-semibold text-primary">
              Araç kiralamak mı istiyorsunuz?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Tarihlerinizi yazın, uygun araçları ve toplam tutarı dakikalar
              içinde paylaşalım.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppCta
                label={`blog_${post.slug}`}
                message={`Merhaba, "${post.title}" yazınızı okudum. Araç kiralama hakkında bilgi almak istiyorum.`}
                className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
              >
                WhatsApp&apos;tan Yaz
              </WhatsAppCta>
              <Link
                href="/araclar"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent/40 hover:text-accent"
              >
                Araçlar ve Fiyatlar
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* İlgili yazılar */}
      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-primary">İlgili Yazılar</h2>
          <ul className="mt-6 space-y-3">
            {otherPosts(post.slug).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block rounded-xl border border-border bg-background p-5 transition-all hover:border-accent/40"
                >
                  <span className="block font-semibold text-primary">{p.title}</span>
                  <span className="mt-1 block text-sm text-muted">{p.excerpt}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
