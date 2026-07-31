import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import WhatsAppCta from "./WhatsAppCta";
import { SITE } from "@/lib/site";

/**
 * İletişim + NAP bloğu.
 * Adres ve telefon `lib/site.ts`'ten gelir — Google Business Profile ile
 * tutarlılık (NAP consistency) tek noktadan korunur.
 */
export default function Contact() {
  return (
    <section id="iletisim" className="bg-primary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            İletişim
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="mt-4 leading-relaxed text-white/60">
            Araç kiralama talepleriniz ve sorularınız için bizi arayın veya
            WhatsApp&apos;tan yazın. 7/24 dönüş yapıyoruz.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <address className="space-y-4 not-italic">
              <InfoCard icon={MapPin} title="Adres">
                <p className="mt-1 text-lg font-semibold text-white">
                  {SITE.address.street}
                </p>
                <p className="mt-0.5 text-sm text-white/50">
                  {SITE.address.postalCode} {SITE.address.district}/{SITE.address.city}
                </p>
              </InfoCard>

              <InfoCard icon={Phone} title="Telefon">
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="mt-1 block text-lg font-semibold text-white transition-colors hover:text-accent"
                >
                  {SITE.phoneDisplay}
                </a>
              </InfoCard>

              <InfoCard icon={Clock} title="Çalışma Saatleri">
                <p className="mt-1 text-lg font-semibold text-white">7/24 Açık</p>
                <p className="mt-0.5 text-sm text-white/50">
                  Her gün, kesintisiz hizmet
                </p>
              </InfoCard>
            </address>

            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
              >
                <Navigation className="h-4 w-4" />
                Yol Tarifi Al
              </a>
              <WhatsAppCta
                label="iletisim_bolum"
                message="Merhaba, araç kiralama hakkında bilgi almak istiyorum."
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                WhatsApp&apos;tan Yaz
              </WhatsAppCta>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Aydemir Oto Kiralama Konum"
              src="https://maps.google.com/maps?q=%C3%87am%C3%A7e%C5%9Fme,+Katip+%C3%87elebi+Cd+No:6/A,+34899+Pendik/%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-white/50">{title}</p>
        {children}
      </div>
    </div>
  );
}
