import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import WhatsAppCta from "@/components/WhatsAppCta";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schema";
import { ADDRESS_ONE_LINE, SITE } from "@/lib/site";
import { availableVehicles } from "@/data/vehicles";

/**
 * Hakkımızda — işletmenin kim olduğunu, nerede olduğunu ve nasıl çalıştığını
 * tek sayfada anlatır (arama motorları ve yapay zekâ asistanları için kimlik
 * sayfası).
 *
 * Buradaki her bilgi sitede zaten doğrulanmış olan bilgilerdir
 * (lib/site.ts NAP, data/faq.ts koşullar, data/vehicles.ts filo).
 * Kuruluş yılı, işletmenin hikâyesi gibi bilgiler işletme sahibinden
 * öğrenilince eklenebilir — uydurma bilgi YAZMAYIN.
 */

const DESCRIPTION =
  "Aydemir Oto Kiralama, Pendik Çamçeşme'deki ofisinden 7/24 günlük, haftalık ve aylık araç kiralama hizmeti veren yerel bir işletmedir. Sabiha Gökçen Havalimanı'na araç getiriyoruz.";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: DESCRIPTION,
  alternates: { canonical: "/hakkimizda" },
};

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hakkımızda", path: "/hakkimizda" },
];

const fleetUnits = availableVehicles.reduce((sum, v) => sum + (v.count ?? 1), 0);
// Varyantlar (ör. Clio Manuel) tek model olarak sayılır.
const fleetModels = [...new Set(availableVehicles.map((v) => `${v.brand} ${v.model}`))];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[aboutPageSchema(DESCRIPTION), breadcrumbSchema(crumbs)]} />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <article className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Hakkımızda
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            {SITE.name}, Pendik Çamçeşme&apos;de Katip Çelebi Caddesi
            üzerindeki ofisinden araç kiralama hizmeti veren yerel bir
            işletmedir. Ofisimiz 7/24 açıktır; günlük, haftalık, aylık ve{" "}
            <Link href="/uzun-donem-arac-kiralama" className="text-accent hover:underline">
              uzun dönem
            </Link>{" "}
            kiralama yapıyor, Sabiha Gökçen Havalimanı&apos;na araç
            getiriyoruz.
          </p>

          <Section title="Nasıl çalışıyoruz">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Araç teslimi Pendik Çamçeşme&apos;deki ofisimizden yapılır.
                Tek istisna{" "}
                <Link
                  href="/sabiha-gokcen-arac-kiralama"
                  className="text-accent hover:underline"
                >
                  Sabiha Gökçen Havalimanı
                </Link>
                ; ofisimiz havalimanına yaklaşık 15 dakika mesafede ve oraya
                araç getiriyoruz.
              </li>
              <li>Depozito almıyoruz. Yaş sınırı yok; en az 2 yıllık ehliyet yeterli.</li>
              <li>Ödeme nakit veya havale ile yapılır; kredi kartı geçmemektedir.</li>
              <li>Günlük 200 km kilometre sınırı uygulanır.</li>
              <li>Tüm araçlarımız sigortalı ve kaskoludur; bakımlarını biz yapıyoruz.</li>
            </ul>
            <p>
              Tüm ayrıntılar{" "}
              <Link href="/kiralama-kosullari" className="text-accent hover:underline">
                kiralama koşulları
              </Link>{" "}
              sayfamızda yazılıdır.
            </p>
          </Section>

          {fleetUnits > 0 && (
            <Section title="Filomuz">
              <p>
                Filomuzda {fleetUnits} araç bulunuyor: {fleetModels.join(", ")}.
                Güncel araçlar ve günlük fiyatlar{" "}
                <Link href="/araclar" className="text-accent hover:underline">
                  araç filomuz
                </Link>{" "}
                sayfasında.
              </p>
            </Section>
          )}

          <Section title="İletişim bilgileri">
            <dl className="space-y-3">
              <div>
                <dt className="font-medium text-primary">Adres</dt>
                <dd>
                  <a
                    href={SITE.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {ADDRESS_ONE_LINE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-primary">Telefon ve WhatsApp</dt>
                <dd>
                  <a href={`tel:${SITE.phoneE164}`} className="text-accent hover:underline">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-primary">Çalışma saatleri</dt>
                <dd>7/24 açık</dd>
              </div>
              <div>
                <dt className="font-medium text-primary">Instagram</dt>
                <dd>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    @aydemirotokiralama
                  </a>
                </dd>
              </div>
            </dl>
          </Section>

          <div className="mt-12">
            <WhatsAppCta
              label="hakkimizda"
              message="Merhaba, araç kiralamak istiyorum. Uygun araçlarınızı ve fiyatları öğrenebilir miyim?"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              WhatsApp&apos;tan Yazın
            </WhatsAppCta>
          </div>
        </div>
      </article>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold tracking-tight text-primary">{title}</h2>
      <div className="mt-4 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}
