import Link from "next/link";
import { Car, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { durations } from "@/data/durations";
import { locations } from "@/data/locations";
import { vehicles, vehicleTitle } from "@/data/vehicles";

/**
 * Footer aynı zamanda sitewide internal linking katmanıdır:
 * her sayfadan lokasyon ve araç sayfalarına link akıtır.
 * Link sayısını şişirmeyin — liste uzarsa her linkin ilettiği değer düşer.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-24 pt-14 md:pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Car className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold text-primary">{SITE.name}</span>
            </div>

            <address className="mt-5 space-y-3 text-sm not-italic text-muted">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.district}/{SITE.address.city}
                </span>
              </p>
              <p className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="font-semibold text-primary transition-colors hover:text-accent"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="pl-6">7/24 Açık</p>
            </address>

            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>

          <FooterCol title="Araçlar">
            {vehicles.slice(0, 6).map((v) => (
              <FooterLink key={v.slug} href={`/araclar/${v.slug}`}>
                {vehicleTitle(v)} Kiralama
              </FooterLink>
            ))}
            <FooterLink href="/araclar">Tüm Araçlar</FooterLink>
          </FooterCol>

          <FooterCol title="Bölgeler">
            {locations.map((l) => (
              <FooterLink key={l.slug} href={`/${l.slug}`}>
                {l.name} Araç Kiralama
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Kurumsal">
            <FooterLink href="/sabiha-gokcen-arac-kiralama">
              Sabiha Gökçen Araç Kiralama
            </FooterLink>
            {durations.map((d) => (
              <FooterLink key={d.slug} href={`/${d.slug}`}>
                {d.name} Araç Kiralama
              </FooterLink>
            ))}
            <FooterLink href="/kiralama-kosullari">Kiralama Koşulları</FooterLink>
            <FooterLink href="/sss">Sık Sorulan Sorular</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/iletisim">İletişim</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

/** lucide-react v1'de marka ikonları kaldırıldığı için inline SVG. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-primary">{title}</h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        {children}
      </Link>
    </li>
  );
}
