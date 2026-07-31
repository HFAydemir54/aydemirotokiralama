import Link from "next/link";
import { Info } from "lucide-react";
import type { Block } from "@/data/posts";

/**
 * Blog içeriği render'ı.
 *
 * Metin içinde iki işaretleme desteklenir:
 *   [görünen metin](/hedef)  → internal link (next/link ile, prefetch'li)
 *   **kalın**
 *
 * MDX yerine bu yaklaşımın tercih edilme sebebi: ek bağımlılık yok, içerik
 * tipli, tüm yazılar build sırasında statik HTML'e dönüşüyor.
 */
export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-10 space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="!mt-12 text-2xl font-bold tracking-tight text-primary"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="!mt-8 text-lg font-semibold text-primary">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="leading-relaxed text-muted">
                <RichText text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="ml-5 list-disc space-y-2.5 text-muted">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="ml-5 list-decimal space-y-2.5 text-muted">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "note":
            return (
              <aside
                key={i}
                className="flex gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-5"
              >
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-primary-light">
                  <RichText text={block.text} />
                </p>
              </aside>
            );
        }
      })}
    </div>
  );
}

function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  // Regex her çağrıda yeniden oluşturulur: global flag'li bir regex paylaşılırsa
  // `lastIndex` çağrılar arasında taşınır ve eşleşmeler kaçar.
  const token = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

  while ((match = token.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [, linkText, href, boldText] = match;
    if (linkText && href) {
      nodes.push(
        <Link
          key={match.index}
          href={href}
          className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
        >
          {linkText}
        </Link>
      );
    } else if (boldText) {
      nodes.push(
        <strong key={match.index} className="font-semibold text-primary">
          {boldText}
        </strong>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return <>{nodes}</>;
}
