"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Car, Phone } from "lucide-react";
import { track } from "@/lib/analytics";
import { SITE } from "@/lib/site";

const navLinks = [
  { href: "/araclar", label: "Araçlar" },
  { href: "/sabiha-gokcen-arac-kiralama", label: "Sabiha Gökçen" },
  { href: "/pendik-arac-kiralama", label: "Pendik" },
  { href: "/kiralama-kosullari", label: "Koşullar" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ana sayfa dışında hero yok; navbar her zaman katı zeminde durur.
  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all group-hover:scale-105 ${
              solid ? "bg-primary text-white" : "bg-white/15 text-white backdrop-blur-sm"
            }`}
          >
            <Car className="h-5 w-5" />
          </div>
          <div>
            <span
              className={`block text-lg font-bold leading-tight tracking-tight ${
                solid ? "text-primary" : "text-white"
              }`}
            >
              Aydemir
            </span>
            <span
              className={`block text-[11px] font-medium uppercase tracking-widest ${
                solid ? "text-muted" : "text-white/60"
              }`}
            >
              Oto Kiralama
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  solid ? "text-primary-light" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${SITE.phoneE164}`}
          onClick={() => track("phone_click", { event_label: "navbar" })}
          className={`hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all lg:inline-flex ${
            solid
              ? "bg-primary text-white hover:bg-primary-light"
              : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          }`}
        >
          <Phone className="h-4 w-4" />
          {SITE.phoneDisplay}
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 lg:hidden ${solid ? "text-primary" : "text-white"}`}
          aria-label="Menü"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-primary-light transition-colors hover:bg-background hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:${SITE.phoneE164}`}
                onClick={() => track("phone_click", { event_label: "mobil_menu" })}
                className="mt-2 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
