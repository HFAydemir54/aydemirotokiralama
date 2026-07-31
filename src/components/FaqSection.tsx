import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/faq";

/**
 * SSS bölümü — <details>/<summary> ile, JavaScript gerekmez (server component).
 * Cevaplar HTML'de her zaman mevcut olduğu için FAQPage schema'sı ile
 * sayfadaki içerik birebir eşleşir (Google'ın şartı budur).
 */
export default function FaqSection({
  faqs,
  title = "Sık Sorulan Sorular",
  subtitle,
  className = "bg-background",
}: {
  faqs: Faq[];
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section id="sss" className={`py-20 ${className}`}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            SSS
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 leading-relaxed text-muted">{subtitle}</p>
          )}
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-border bg-surface px-6 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-semibold text-primary">
                <h3 className="text-base">{faq.q}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
