"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car, Phone } from "lucide-react";

const navLinks = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#anasayfa" className="flex items-center gap-2.5 group">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all group-hover:scale-105 ${
              scrolled ? "bg-primary text-white" : "bg-white/15 text-white backdrop-blur-sm"
            }`}
          >
            <Car className="h-5 w-5" />
          </div>
          <div>
            <span
              className={`block text-lg font-bold tracking-tight transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              Aydemir
            </span>
            <span
              className={`block text-[11px] font-medium uppercase tracking-widest transition-colors ${
                scrolled ? "text-muted" : "text-white/60"
              }`}
            >
              Oto Kiralama
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-primary-light" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+905330703654"
          className={`hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all md:inline-flex ${
            scrolled
              ? "bg-primary text-white hover:bg-primary-light"
              : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          }`}
        >
          <Phone className="h-4 w-4" />
          0533 070 36 54
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 md:hidden ${scrolled ? "text-primary" : "text-white"}`}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-primary-light transition-colors hover:bg-background hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:+905330703654"
                  className="mt-2 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  0533 070 36 54
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
