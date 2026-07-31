import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-background pt-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Sayfa taşınmış veya adres yanlış yazılmış olabilir. Aşağıdaki
          bağlantılardan devam edebilirsiniz.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { href: "/", label: "Ana Sayfa" },
            { href: "/araclar", label: "Araçlar ve Fiyatlar" },
            { href: "/sabiha-gokcen-arac-kiralama", label: "Sabiha Gökçen Kiralama" },
            { href: "/pendik-arac-kiralama", label: "Pendik Araç Kiralama" },
            { href: "/iletisim", label: "İletişim" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-block rounded-lg border border-border bg-surface px-4 py-2 text-sm text-primary-light transition-colors hover:border-accent/40 hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
