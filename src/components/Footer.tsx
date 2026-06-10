import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <Car className="h-4 w-4" />
          </div>
          <div>
            <span className="block text-sm font-bold text-primary">Aydemir Oto Kiralama</span>
            <span className="block text-xs text-muted">Pendik/İstanbul</span>
          </div>
        </div>

        <p className="text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Aydemir Oto Kiralama. Tüm hakları saklıdır.
        </p>

        <a
          href="tel:+905330703654"
          className="text-sm font-semibold text-primary transition-colors hover:text-accent"
        >
          0533 070 36 54
        </a>
      </div>
    </footer>
  );
}
