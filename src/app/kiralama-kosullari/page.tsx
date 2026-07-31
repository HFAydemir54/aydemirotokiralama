import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kiralama Koşulları | Yaş, Ehliyet, Depozito",
  description:
    "Aydemir Oto Kiralama kiralama koşulları: yaş sınırı, ehliyet süresi, depozito tutarları, gerekli belgeler, kilometre limiti, yakıt politikası ve iptal şartları.",
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
            Aşağıdaki koşullar tüm kiralamalarımız için geçerlidir. Araç bazında
            değişen yaş ve depozito şartlarını tabloda bulabilirsiniz. Sözleşmede
            yer almayan hiçbir ücret sonradan talep edilmez.
          </p>

          <Section title="Gerekli belgeler">
            <ul className="ml-5 list-disc space-y-2">
              <li>Geçerli sürücü belgesi (ehliyet)</li>
              <li>T.C. kimlik kartı veya pasaport</li>
              <li>
                Yabancı misafirler için pasaport ve uluslararası geçerliliği olan
                sürücü belgesi
              </li>
            </ul>
          </Section>

          <Section title="Yaş ve ehliyet şartı">
            <p>
              Yaş ve ehliyet şartı araç segmentine göre değişir. Ekonomik
              segmentte 21 yaş ve 2 yıllık ehliyet yeterliyken, SUV ve üst
              segment araçlarda 25 yaş ve 3 yıllık ehliyet aranır.
            </p>
          </Section>

          <Section title="Depozito">
            <p>
              Depozito, araç tesliminde alınır ve araç sorunsuz iade edildiğinde
              geri ödenir. Tutarı araç segmentine göre değişir ve rezervasyon
              sırasında size net olarak bildirilir. Trafik cezası, HGS geçişi veya hasar bedeli varsa
              depozitodan mahsup edilir. Depozitoyu nakit, havale veya kredi
              kartı provizyonu ile karşılayabilirsiniz — kredi kartı zorunlu
              değildir.
            </p>
          </Section>

          <Section title="Kilometre limiti">
            <p>
              Standart olarak günde 250 km (SUV araçlarda 300 km) kilometre limiti
              uygulanır. Şehirlerarası bir planınız varsa rezervasyon sırasında
              belirtin; ek kilometre paketini önceden fiyatlandıralım.
            </p>
          </Section>

          <Section title="Yakıt politikası">
            <p>
              Araç size hangi yakıt seviyesiyle teslim edildiyse aynı seviyede
              iade edilmelidir. Eksik yakıtla iade halinde güncel pompa fiyatı
              üzerinden ücretlendirme yapılır.
            </p>
          </Section>

          <Section title="Sigorta">
            <p>
              Tüm araçlarımız trafik sigortası ve kaskoludur. Kaza durumunda
              uygulanacak muafiyet tutarı sözleşmede açıkça belirtilir. Alkollü
              araç kullanımı, ehliyetsiz kullanım ve sözleşmede adı geçmeyen
              kişinin araç kullanması sigorta kapsamı dışındadır.
            </p>
          </Section>

          <Section title="HGS ve trafik cezaları">
            <p>
              Araçlarımızda HGS mevcuttur. Kiralama süresince yapılan köprü ve
              otoyol geçişleri ile kesilen trafik cezaları kiracıya aittir ve
              teslim sonrası faturalandırılır.
            </p>
          </Section>

          <Section title="Teslim, iade ve iptal">
            <p>
              Aracı ofisimizden, adresinizden veya Sabiha Gökçen
              Havalimanı&apos;ndan teslim alabilirsiniz. Farklı noktaya teslim
              (tek yön) mümkündür; mesafeye göre ek ücret uygulanabilir ve tutar
              önceden bildirilir. Kiralama başlangıcından 24 saat öncesine kadar
              yapılan iptallerde ücret alınmaz.
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
