/**
 * Süre bazlı kiralama sayfaları: /gunluk-, /haftalik-, /aylik-arac-kiralama
 *
 * Bu sayfalar lokasyon sayfalarından farklı bir arama niyetini karşılar:
 * kullanıcı "nerede" değil "ne kadar süre" sorusuyla arıyor. İçerik bu yüzden
 * fiyat mantığı, kilometre limiti ve süreye özgü koşullar üzerine kuruludur.
 *
 * Her sayfanın `benefits`, `bestFor` ve `notes` alanları birbirinden farklı
 * olmalıdır — aksi halde üç sayfa da kopya içerik sayılır.
 */

export type Duration = {
  slug: string;
  /** "Günlük" */
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Fiyatlandırmanın hangi alana göre gösterileceği */
  priceKey: "daily" | "weekly" | "monthly";
  priceLabel: string;
  /** Kaç güne bölünerek "günlüğe denk gelen" hesaplanacak */
  divisor: number;
  benefits: { title: string; text: string }[];
  bestFor: string[];
  notes: { title: string; text: string }[];
  updatedAt: string;
};

export const durations: Duration[] = [
  {
    slug: "gunluk-arac-kiralama",
    name: "Günlük",
    title: "Günlük Araç Kiralama | 1 Günden İtibaren",
    description:
      "Günlük araç kiralama — 1 günden itibaren kiralama, adrese ve havalimanına teslim, 7/24 hizmet. Güncel günlük fiyatlar ve koşullar.",
    h1: "Günlük Araç Kiralama",
    intro:
      "Minimum kiralama süremiz 1 gündür (24 saat). Günlük kiralama, kendi aracı serviste olanlar, şehir dışından bir günlüğüne gelenler ve gün içinde birden fazla noktaya gitmesi gereken iş seyahatleri için en esnek seçenektir. Aracı sabah teslim alıp ertesi sabah aynı saatte iade edersiniz.",
    priceKey: "daily",
    priceLabel: "Günlük fiyat",
    divisor: 1,
    benefits: [
      {
        title: "Taahhüt yok",
        text: "Tek gün için kiralayıp uzatmak isterseniz süreyi telefonla uzatabilirsiniz; yeni sözleşme gerekmez.",
      },
      {
        title: "7/24 teslim ve iade",
        text: "Sabah erken çıkış veya gece geç iade fark etmez, ofisimiz kesintisiz açık.",
      },
      {
        title: "Aynı gün teslimat",
        text: "Anadolu Yakası'nda çoğu adrese aynı gün içinde araç ulaştırıyoruz.",
      },
    ],
    bestFor: [
      "Kendi aracı serviste olanlar",
      "Şehir dışından 1 günlüğüne gelenler",
      "Gün içinde çok noktaya gitmesi gereken iş seyahatleri",
      "Havalimanı transferi + gün içi kullanım",
    ],
    notes: [
      {
        title: "Kilometre limiti",
        text: "Günlük 250 km (SUV araçlarda 300 km) limit uygulanır. Şehir içi kullanım için fazlasıyla yeterlidir; şehirlerarası çıkış planlıyorsanız ek paket tanımlayalım.",
      },
      {
        title: "Gecikme",
        text: "İade saatini 1 saatten fazla aşan gecikmeler tam gün olarak ücretlendirilir. Gecikeceğinizi biliyorsanız haber verin, çoğu durumda çözüm buluyoruz.",
      },
    ],
    updatedAt: "2026-08-01",
  },
  {
    slug: "haftalik-arac-kiralama",
    name: "Haftalık",
    title: "Haftalık Araç Kiralama | 7 Günlük",
    description:
      "Haftalık araç kiralama fiyatları. 7 günlük kiralamada günlük maliyet düşer. Pendik ve Sabiha Gökçen teslim, sınırsız destek.",
    h1: "Haftalık Araç Kiralama",
    intro:
      "7 gün ve üzeri kiralamalarda günlük fiyat, tek gün kiralamaya göre belirgin şekilde düşer. Haftalık kiralama; tatil, uzun iş seyahati veya misafirlik dönemleri için en dengeli seçenektir. Süre sonunda uzatmak isterseniz aylık tarifeye geçiş yapabilirsiniz.",
    priceKey: "weekly",
    priceLabel: "Haftalık fiyat (7 gün)",
    divisor: 7,
    benefits: [
      {
        title: "Günlük maliyet düşer",
        text: "Aynı aracı 7 gün kiraladığınızda günlüğe denk gelen tutar tek gün fiyatının altına iner.",
      },
      {
        title: "Tek sözleşme",
        text: "Hafta boyunca tek sözleşme, tek ödeme. Her gün yeniden işlem yapmanız gerekmez.",
      },
      {
        title: "Aylığa geçiş",
        text: "Süre uzarsa haftalık kiralamayı aylık tarifeye çevirip fiyat avantajından yararlanabilirsiniz.",
      },
    ],
    bestFor: [
      "Tatil ve şehir dışı seyahatler",
      "Bir haftalık iş seyahati veya proje süresi",
      "Yurt dışından gelen misafirlerin İstanbul ziyareti",
      "Kendi aracı uzun süreli onarımda olanlar",
    ],
    notes: [
      {
        title: "Kilometre limiti",
        text: "Haftalık kiralamada kilometre limiti gün sayısıyla çarpılarak hesaplanır; günleri ayrı ayrı değil toplam üzerinden değerlendiriyoruz. Bu, bazı günler çok yol yapıp bazı günler az yapan kullanıcılara esneklik sağlar.",
      },
      {
        title: "Araç değişimi",
        text: "Uzun süreli kiralamalarda periyodik bakım zamanı gelirse aracı muadili ile ücretsiz değiştiriyoruz.",
      },
    ],
    updatedAt: "2026-08-01",
  },
  {
    slug: "aylik-arac-kiralama",
    name: "Aylık",
    title: "Aylık Araç Kiralama | Uzun Dönem",
    description:
      "Aylık (uzun dönem) araç kiralama. 30 gün ve üzeri kiralamalarda en düşük günlük maliyet, kurumsal faturalı seçenek, bakım dahil.",
    h1: "Aylık Araç Kiralama (Uzun Dönem)",
    intro:
      "30 gün ve üzeri kiralamalarda günlük maliyet en düşük seviyeye iner. Aylık kiralama, araç satın almadan araç sahibi olmanın esnek yoludur: sigorta, kasko ve periyodik bakım bize aittir, siz sadece yakıt ve kullanım maliyetini üstlenirsiniz. Kurumsal müşterilerimiz için faturalı ve çoklu araç seçenekleri mevcuttur.",
    priceKey: "monthly",
    priceLabel: "Aylık fiyat (30 gün)",
    divisor: 30,
    benefits: [
      {
        title: "En düşük günlük maliyet",
        text: "Aylık tarifede günlüğe denk gelen tutar, tek gün fiyatının belirgin şekilde altındadır.",
      },
      {
        title: "Bakım ve sigorta dahil",
        text: "Periyodik bakım, sigorta ve kasko bize ait. Lastik ve muayene takibiyle uğraşmazsınız.",
      },
      {
        title: "Kurumsal fatura",
        text: "Şirketler için faturalı kiralama; birden fazla araç ihtiyacında toplu fiyatlandırma yapıyoruz.",
      },
      {
        title: "Amortisman riski yok",
        text: "Aracın değer kaybı, satış süreci ve beklenmedik arıza maliyetleri sizi ilgilendirmez.",
      },
    ],
    bestFor: [
      "Tuzla Teknopark ve organize sanayide uzun süreli görevlendirmeler",
      "Şirketlerin filo ihtiyacı ve personel araçları",
      "Araç satın almadan önce modeli uzun süre denemek isteyenler",
      "Şehir değiştiren veya geçici olarak İstanbul'da bulunanlar",
    ],
    notes: [
      {
        title: "Kilometre paketi",
        text: "Aylık kiralamalarda kilometre limiti kullanım profilinize göre belirlenir. Günlük ortalama kaç km yapacağınızı baştan konuşalım; sonradan aşım ücreti sürpriz olmasın.",
      },
      {
        title: "Ödeme",
        text: "Aylık ödemeler peşin veya taksitli olarak planlanabilir. Kurumsal kiralamalarda fatura kesilir.",
      },
      {
        title: "Sözleşme uzatma",
        text: "Süre sonunda devam etmek isterseniz aynı araçla sözleşmeyi uzatıyoruz; araç değiştirmek zorunda kalmazsınız.",
      },
    ],
    updatedAt: "2026-08-01",
  },
];

export function getDuration(slug: string): Duration | undefined {
  return durations.find((d) => d.slug === slug);
}
