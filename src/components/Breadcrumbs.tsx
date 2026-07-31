import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string };

/**
 * Görünür breadcrumb. BreadcrumbList schema'sı ile birlikte kullanılmalıdır
 * (schema tek başına yeterli değil; Google görünür karşılığını bekler).
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-6 py-3 text-sm text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-50" />}
              {last ? (
                <span className="font-medium text-primary">{item.name}</span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-accent">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
