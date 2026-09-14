import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Clock, Wallet } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import RelatedPosts from "@/components/RelatedPosts";
import FleetEmptyState from "@/components/FleetEmptyState";
import VehicleCard from "@/components/VehicleCard";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema, faqSchema, localServiceSchema } from "@/lib/schema";
import { formatPrice } from "@/lib/site";
import type { Faq } from "@/data/faq";
import { availableVehicles, hasVehicles, minDailyPrice } from "@/data/vehicles";

/**
 * Genel "araç kiralama / araba kiralama / kiralık araba / rent a car"
 * sorgularını hedefleyen sayfa. Ana sayfa "Pendik araç kiralama"yı hedefler;
 * bu sayfa lokasyonsuz genel niyeti karşılar.
 */
const minPrice = minDailyPrice();

const DESCRIPTION = `Araç kiralama ve araba kiralama (rent a car) Aydemir Oto Kiralama'da.${
  minPrice ? ` Günlük ${formatPrice(minPrice)}'den başlayan fiyatlar,` : ""
} depozito yok, 7/24 açık. Pendik ofisi ve Sabiha Gökçen teslim.`;

export const metadata: Metadata = {
  title: { absolute: "Araç Kiralama | Uygun Fiyatlı Araba Kiralama – Aydemir" },
  description: DESCRIPTION,
  alternates: { canonical: "/arac-kiralama" },
};

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Araç Kiralama", path: "/arac-kiralama" },
];

const WA = "Merhaba, araç kiralamak istiyorum. Uygun araçlarınızı ve fiyatı paylaşabilir misiniz?";

const faqs: Faq[] = [
  {
    q: "En uygun araç kiralama fiyatı ne kadar?",
    a: minPrice
      ? `Günlük araç kiralama fiyatlarımız ${formatPrice(minPrice)}'den başlıyor. Haftalık ve aylık fiyatlar araca ve süreye göre değiştiği için tarihlerinizi WhatsApp'tan yazmanız yeterli.`
      : "Fiyatlar araca ve süreye göre değişiyor. Tarihlerinizi WhatsApp'tan yazın, size özel fiyatı hemen paylaşalım.",
  },
  {
    q: "Araba kiralamak için ne gerekli?",
    a: "En az 2 yıllık sürücü belgesi ve kimlik belgeniz yeterlidir. Yaş sınırımız bulunmuyor.",
  },
  {
    q: "Kiralık araba için depozito veya kredi kartı gerekiyor mu?",
    a: "Hayır. Depozito almıyoruz ve ödemeyi nakit veya havale ile kabul ediyoruz; kredi kartı geçmemektedir. Aracı önceden ayırtmak isterseniz yalnızca kapora alınır.",
  },
  {
    q: "Aracı nereden teslim alabilirim?",
    a: "Araçlar Pendik Çamçeşme'deki ofisimizden teslim edilir. Sabiha Gökçen Havalimanı'na ise araç getiriyoruz.",
  },
  {
    q: "Kilometre sınırı var mı?",
    a: "Günlük 200 km kilometre sınırı uygulanmaktadır.",
  },
];

export default function CarRentalPage() {
  return (
    <>
      <JsonLd
        data={[
          localServiceSchema("İstanbul", DESCRIPTION),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Araç Kiralama
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/75">
            Kiralık araba mı arıyorsunuz? Aydemir Oto Kiralama olarak günlük,
            haftalık ve aylık araç kiralama hizmeti veriyoruz. Depozito almıyor,
            7/24 teslim yapıyoruz. Araçlarımızı Pendik ofisimizden teslim ediyor,
            Sabiha Gökçen Havalimanı&apos;na da getiriyoruz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppCta
              label="arac_kiralama_hero"
              message={WA}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              WhatsApp&apos;tan Fiyat Al
            </WhatsAppCta>
            <Link
              href="/araclar"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Tüm Araçları Gör
            </Link>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            <Highlight icon={Wallet} title={minPrice ? `Günlük ${formatPrice(minPrice)}'den` : "Uygun fiyat"}>
              En uygun araç kiralama seçenekleri.
            </Highlight>
            <Highlight icon={BadgeCheck} title="Depozito yok">
              Nakit veya havale ile ödeme.
            </Highlight>
            <Highlight icon={Clock} title="7/24 açık">
              Gece saatlerinde de araç teslimi.
            </Highlight>
          </ul>
        </div>
      </section>

      {/* Uzun içerik — genel sorgular için. Yalnızca doğrulanmış koşullar yazıldı. */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl space-y-5 px-6 leading-relaxed text-muted">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Araç Kiralama Hakkında Bilmeniz Gerekenler
          </h2>
          <p>
            Araç kiralama, kendi aracı olmayan ya da aracı serviste olan herkes
            için şehir içinde ve şehir dışında özgürce hareket etmenin en pratik
            yoludur. Toplu taşımanın yetişmediği saatlerde, iş toplantıları
            arasında ya da aileyle yapılan bir hafta sonu gezisinde kiralık araba,
            zamanınızı kendiniz planlamanızı sağlar. Aydemir Oto Kiralama olarak
            Pendik Çamçeşme&apos;deki ofisimizden günlük, haftalık ve aylık araba
            kiralama hizmeti veriyoruz. Amacımız karmaşık sözleşmeler ve gizli
            şartlar olmadan, baştan net konuşarak size uygun aracı teslim etmek.
          </p>

          <h3 className="pt-2 text-xl font-semibold text-primary">
            Kimler araç kiralayabilir?
          </h3>
          <p>
            Bizde yaş sınırı bulunmuyor. Aradığımız tek şart, sürücü belgenizin
            en az 2 yıllık olmasıdır. Kiralama sırasında geçerli ehliyetiniz ve
            kimlik belgeniz yeterlidir. Pek çok firmanın uyguladığı yaş
            kısıtlamaları nedeniyle araç bulmakta zorlanan genç sürücüler de
            ehliyet süresi şartını karşıladıkları sürece bizden rahatlıkla araç
            kiralayabilir.
          </p>

          <h3 className="pt-2 text-xl font-semibold text-primary">
            Depozitosuz ve kredi kartsız araba kiralama
          </h3>
          <p>
            Araç kiralarken en çok sorulan konulardan biri depozitodur. Biz
            depozito almıyoruz; kartınızda günlerce bloke edilen bir tutar
            olmuyor. Ödemeleri nakit veya banka havalesi ile kabul ediyoruz,
            kredi kartı geçmemektedir. Aracı ileri bir tarih için önceden ayırtmak
            isterseniz yalnızca kapora alıyoruz. Kapora, rezervasyonun iptal
            edilmesi durumunda iade edilmemektedir; bu nedenle tarihlerinizi
            netleştirdikten sonra rezervasyon yapmanızı öneriyoruz.
          </p>

          <h3 className="pt-2 text-xl font-semibold text-primary">
            En uygun araç kiralama fiyatları
          </h3>
          <p>
            {minPrice
              ? `Günlük araç kiralama fiyatlarımız ${formatPrice(minPrice)}'den başlıyor. `
              : ""}
            Fiyat; seçtiğiniz araca, kiralama süresine ve tarihlere göre
            değişir. Kiralama süresi uzadıkça günlük maliyet genellikle düşer, bu
            yüzden birkaç günlük ihtiyaçlarınızda haftalık, uzun süreli
            ihtiyaçlarınızda ise aylık kiralama seçeneğini sormanızı tavsiye
            ediyoruz. Haftalık ve aylık fiyatlar araca göre belirlendiği için
            tarihlerinizi WhatsApp&apos;tan yazmanız yeterli; size özel toplam
            tutarı hemen paylaşıyoruz. Teklifte göreceğiniz tutar, ödeyeceğiniz
            tutardır.
          </p>

          <h3 className="pt-2 text-xl font-semibold text-primary">
            Günlük, haftalık veya aylık: hangisi size uygun?
          </h3>
          <p>
            Günlük araç kiralama; havalimanı transferi, tek günlük bir iş
            ziyareti, taşınma günü ya da kısa bir şehir içi ihtiyaç için
            idealdir. Birkaç gün süren tatillerde, misafir ağırlarken veya kendi
            aracınız birkaç gün serviste kaldığında haftalık kiralama hem daha
            pratik hem de genellikle daha ekonomiktir. Şehre uzun süreliğine
            gelenler, proje bazlı çalışanlar ya da araç satın almadan önce bir
            süre beklemek isteyenler için ise aylık araç kiralama, her gün yeni
            bir sözleşme yapmadan aracı kesintisiz kullanmanın en kolay yoludur.
            Hangi seçeneğin size daha uygun olduğundan emin değilseniz,
            ihtiyacınızı anlatmanız yeterli; tarihlerinize göre en mantıklı
            süreyi ve fiyatı birlikte hesaplayalım.
          </p>

          <h3 className="pt-2 text-xl font-semibold text-primary">
            Neden Aydemir Oto Kiralama?
          </h3>
          <p>
            Kiralama öncesinde tüm koşulları açıkça paylaşıyoruz: yaş sınırı
            yok, depozito yok, kilometre sınırı ve ödeme yöntemleri baştan belli.
            Ofisimiz 7/24 açık, WhatsApp&apos;tan yazdığınızda hızlıca dönüş
            yapıyoruz. Google&apos;daki müşteri yorumlarımız, bu yaklaşımın
            karşılığını gösteriyor.
          </p>

          <h3 className="pt-2 text-xl font-semibold text-primary">
            Kiralık araba seçenekleri
          </h3>
          <p>
            Filomuzda şehir içi kullanıma uygun, yakıt tüketimi düşük binek
            araçlar bulunuyor. Otomatik vites tercih edenler için benzinli ve
            dizel seçeneklerimiz, manuel vites kullananlar için ise daha
            ekonomik bir alternatifimiz var. Tüm araçlarımız 5 kişiliktir;
            sigortalı ve kaskoludur. Güncel araç listesini, model yıllarını ve
            günlük fiyatları aşağıdaki araç kartlarında görebilirsiniz.
          </p>

          <h3 className="pt-2 text-xl font-semibold text-primary">
            Teslim noktası: Pendik ofisi ve Sabiha Gökçen
          </h3>
          <p>
            Araç teslimlerimizi Pendik Çamçeşme&apos;de, Katip Çelebi Caddesi
            üzerindeki ofisimizden yapıyoruz. Ofisimiz Sabiha Gökçen
            Havalimanı&apos;na yaklaşık 15 dakika mesafededir ve havalimanına
            araç getiriyoruz. Uçağınız indiğinde beklemeden yola çıkabilmeniz
            için teslim saatini önceden WhatsApp&apos;tan birlikte belirliyoruz.
            Ofisimiz 7/24 açık olduğu için gece geç saatlerde ya da sabahın
            erken saatlerinde de araç teslim alabilirsiniz. Kartal, Tuzla,
            Kurtköy, Maltepe ve Sancaktepe gibi yakın ilçelerden gelen
            müşterilerimiz de araçlarını Pendik ofisimizden teslim alıyor.
          </p>

          <h3 className="pt-2 text-xl font-semibold text-primary">
            Kilometre sınırı ve kullanım
          </h3>
          <p>
            Kiralamalarımızda günlük 200 km kilometre sınırı uygulanır. Şehir
            içi kullanımda bu sınır çoğu ihtiyaç için fazlasıyla yeterlidir.
            Şehir dışına çıkmayı veya uzun yol yapmayı planlıyorsanız bunu
            rezervasyon sırasında belirtmeniz, sürpriz bir durumla
            karşılaşmamanız açısından önemlidir.
          </p>

          <h3 className="pt-2 text-xl font-semibold text-primary">
            Rent a car nasıl yapılır?
          </h3>
          <p>
            Bizimle araç kiralamak birkaç adımdan ibaret. Önce WhatsApp&apos;tan
            ya da telefonla kiralama tarihlerinizi ve varsa araç tercihinizi
            iletin. Müsait araçları ve toplam fiyatı sizinle paylaşalım. Teslim
            yeri ve saatini netleştirdikten sonra, belirlenen zamanda ehliyetiniz
            ve kimliğinizle gelip sözleşmeyi tamamlayın ve yola çıkın. Sorularınız
            için 7/24 bize ulaşabilirsiniz; en uygun araç kiralama seçeneğini
            birlikte bulalım.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Rent a Car: Kiralama Seçenekleri
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            İhtiyacınıza göre farklı sürelerde araba kiralama yapabilirsiniz.
            Kısa şehir içi kullanımdan uzun dönem kiralamaya kadar size en
            uygun seçeneği birlikte belirliyoruz.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/gunluk-arac-kiralama", label: "Günlük Araç Kiralama" },
              { href: "/haftalik-arac-kiralama", label: "Haftalık Araç Kiralama" },
              { href: "/aylik-arac-kiralama", label: "Aylık Araç Kiralama" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-primary transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-primary">Kiralama koşulları</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>Yaş sınırı yok; sürücü belgenizin en az 2 yıllık olması yeterli.</li>
              <li>Depozito almıyoruz. Aracı önceden ayırtmak isterseniz kapora alınır.</li>
              <li>Ödeme nakit veya havale ile yapılır; kredi kartı geçmemektedir.</li>
              <li>Günlük 200 km kilometre sınırı uygulanır.</li>
              <li>Tüm araçlarımız sigortalı ve kaskoludur.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Ayrıntılar için{" "}
              <Link href="/kiralama-kosullari" className="font-medium text-accent hover:underline">
                kiralama koşulları
              </Link>{" "}
              sayfamıza bakabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Kiralık Araba Seçeneklerimiz
          </h2>
          {hasVehicles ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {availableVehicles.map((v) => (
                <VehicleCard key={v.slug} vehicle={v} />
              ))}
            </div>
          ) : (
            <FleetEmptyState />
          )}
        </div>
      </section>

      <FaqSection faqs={faqs} title="Araç Kiralama SSS" className="bg-background" />

      <RelatedPosts
        slugs={[
          "pendik-arac-kiralama-fiyatlari",
          "arac-kiralama-icin-gerekli-belgeler",
          "arac-kiralarken-dikkat-edilmesi-gerekenler",
        ]}
        className="bg-surface"
      />

      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-xl font-bold text-primary">İlgili Sayfalar</h2>
          <ul className="flex flex-wrap gap-3">
            {[
              { href: "/pendik-arac-kiralama", label: "Pendik Araç Kiralama" },
              { href: "/istanbul-arac-kiralama", label: "İstanbul Araç Kiralama" },
              { href: "/sabiha-gokcen-arac-kiralama", label: "Sabiha Gökçen Araç Kiralama" },
              { href: "/kurtkoy-arac-kiralama", label: "Kurtköy Araç Kiralama" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block rounded-lg border border-border bg-background px-4 py-2 text-sm text-primary-light transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Highlight({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <Icon className="h-5 w-5 text-accent" />
      <p className="mt-3 font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-white/60">{children}</p>
    </li>
  );
}
