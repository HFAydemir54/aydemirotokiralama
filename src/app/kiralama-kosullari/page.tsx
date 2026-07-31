import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kiralama Koşulları",
  description:
    "Aydemir Oto Kiralama kiralama koşulları: yaş sınırı yok, 2 yıllık ehliyet yeterli, depozito alınmıyor. Gerekli belgeler, kilometre sınırı, ödeme ve teslim koşulları.",
  alternates: { canonical: "/kiralama-kosullari" },
};

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Kiralama Koşulları", path: "/kiralama-kosullari" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <article className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Kiralama Koşulları
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            Aşağıdaki koşullar tüm kiralamalarımız için geçerlidir. Kiralama
            öncesi aklınıza takılan bir konu olursa WhatsApp&apos;tan sorabilir,
            her şeyi baştan netleştirebilirsiniz.
          </p>

          <Section title="Gerekli belgeler">
            <ul className="ml-5 list-disc space-y-2">
              <li>En az 2 yıllık geçerli sürücü belgesi (ehliyet)</li>
              <li>Kimlik belgesi</li>
            </ul>
          </Section>

          <Section title="Yaş ve ehliyet şartı">
            <p>
              Yaş sınırı uygulamıyoruz. Aradığımız tek şart sürücü belgenizin
              en az <strong className="font-semibold text-primary">2 yıllık</strong>{" "}
              olmasıdır. Bu koşul tüm araçlarımız için aynıdır.
            </p>
          </Section>

          <Section title="Depozito ve kapora">
            <p>
              <strong className="font-semibold text-primary">Depozito almıyoruz.</strong>{" "}
              Aracı hemen teslim alacaksanız herhangi bir ön ödeme gerekmez.
            </p>
            <p>
              Yalnızca aracı ileri bir tarih için önceden ayırtmak isterseniz
              kapora alıyoruz. Kapora, aracın sizin adınıza rezerve edilmesini
              sağlar.
            </p>
          </Section>

          <Section title="Ödeme">
            <p>
              Nakit veya banka havalesi ile ödeme kabul ediyoruz.{" "}
              <strong className="font-semibold text-primary">
                Kredi kartı geçmemektedir.
              </strong>
            </p>
          </Section>

          <Section title="Sigorta">
            <p>
              Tüm araçlarımız sigortalı ve kaskoludur.
            </p>
          </Section>

          <Section title="Kilometre sınırı">
            <p>
              Günlük{" "}
              <strong className="font-semibold text-primary">200 km</strong>{" "}
              kilometre sınırı uygulanmaktadır. Sınırın aşılması durumunda ek
              ücret uygulanır. Uzun yol planınız varsa rezervasyon sırasında
              belirtin; koşulları önceden konuşalım.
            </p>
          </Section>

          <Section title="İptal">
            <p>
              Kapora vererek araç ayırttıysanız ve rezervasyonu iptal ederseniz
              kapora iade edilmemektedir.
            </p>
          </Section>

          <Section title="Teslim ve iade">
            <p>
              Araç teslimi Pendik Çamçeşme&apos;deki ofisimizden yapılmaktadır.
              Sabiha Gökçen Havalimanı&apos;na ise araç getiriyoruz; ofisimiz
              havalimanına yaklaşık 15 dakikalık mesafededir. Ayrıntılar için{" "}
              <Link
                href="/sabiha-gokcen-arac-kiralama"
                className="font-medium text-accent hover:underline"
              >
                Sabiha Gökçen araç kiralama
              </Link>{" "}
              sayfamıza bakabilirsiniz.
            </p>
            <p>
              Ofisimiz 7/24 açıktır; gece geç saatlerde veya sabah erkenden de
              teslim ve iade yapabilirsiniz.
            </p>
          </Section>

          <Section title="Kiralama süresi">
            <p>
              Minimum kiralama süresi 1 gündür. Günlük kiralamanın yanında
              haftalık ve aylık kiralama da yapıyoruz. Haftalık ve aylık
              fiyatlar kiralama süresine göre değiştiği için tarihlerinizi
              yazmanız yeterli, toplam tutarı paylaşalım.
            </p>
          </Section>

          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
            <h2 className="text-lg font-semibold text-primary">
              Koşullarla ilgili sorunuz mu var?
            </h2>
            <p className="mt-2 text-sm text-muted">
              WhatsApp&apos;tan yazın, teslim öncesi her şeyi netleştirelim.
            </p>
            <WhatsAppCta
              label="kosullar_sayfa"
              message="Merhaba, kiralama koşulları hakkında bir sorum var."
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              WhatsApp&apos;tan Sor
            </WhatsAppCta>
          </div>
        </div>
      </article>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold tracking-tight text-primary">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}
