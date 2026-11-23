import { sortedPosts } from "@/data/posts";
import { SITE } from "@/lib/site";

/**
 * Blog RSS 2.0 beslemesi: /blog/rss.xml
 * <head>'deki <link rel="alternate" type="application/rss+xml"> bunu gösterir
 * (layout.tsx → alternates.types). Yazılar data/posts.ts'ten gelir; yeni yazı
 * eklendiğinde besleme build ile kendiliğinden güncellenir.
 */
export const dynamic = "force-static";

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(iso: string): string {
  return new Date(`${iso}T09:00:00+03:00`).toUTCString();
}

export function GET() {
  const feedUrl = `${SITE.url}/blog/rss.xml`;
  const lastBuild = sortedPosts.reduce(
    (latest, p) => (p.updatedAt > latest ? p.updatedAt : latest),
    sortedPosts[0]?.updatedAt ?? "2026-08-01"
  );

  const items = sortedPosts
    .map((p) => {
      const url = `${SITE.url}/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(p.description)}</description>
      <pubDate>${rfc822(p.publishedAt)}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`${SITE.name} – Araç Kiralama Rehberi`)}</title>
    <link>${SITE.url}/blog</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>Pendik ve Sabiha Gökçen'de araç kiralama: fiyatlar, gerekli belgeler, depozito ve kiralama koşulları üzerine rehber yazıları.</description>
    <language>tr</language>
    <lastBuildDate>${rfc822(lastBuild)}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
