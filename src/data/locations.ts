/**
 * Lokasyon (ilçe) sayfaları.
 *
 * ÖNEMLİ — GERÇEK İŞLEYİŞ (1 Ağustos 2026'da işletme sahibi tarafından teyit
 * edildi): Araç teslimi YALNIZCA Pendik Çamçeşme'deki ofisten yapılır.
 * Adrese teslim hizmeti YOKTUR. Tek istisna Sabiha Gökçen Havalimanı'dır;
 * oraya araç getirilmektedir.
 *
 * Bu yüzden sayfalardaki içerik "size getiriyoruz" değil, "ofisimize nasıl
 * ulaşırsınız" ekseninde yazılmıştır. İleride adrese teslim hizmeti
 * başlatılırsa metinler buna göre güncellenmelidir.
 *
 * Kopya içerik uyarısı: her ilçenin `intro`, `access` ve `useCase` alanları
 * o ilçeye özgüdür. Yeni ilçe eklerken aynı metni kopyalamayın; ilçeye özel
 * ulaşım bilgisi ve gerçek bir kullanım senaryosu yazın.
 */

export type Location = {
  slug: string;
  /** "Pendik" */
  name: string;
  /** "Pendik'te" gibi kullanımlar için ek almış hali */
  locative: string;
  title: string;
  description: string;
  intro: string;
  /** Ofisimize ulaşım — ilçeye özgü, gerçek güzergâh bilgisi */
  access: string;
  /** Ofise yaklaşık mesafe */
  distance: string;
  /** İlçeye özgü kullanım senaryosu */
  useCase: string;
  /** İlgili komşu ilçe slug'ları (internal linking) */
  nearby: string[];
  /**
   * İlçeye özel SSS — sayfada görünür ve FAQPage schema'sına gider.
   * Cevaplar yalnızca bu dosyadaki ulaşım bilgisine ve data/faq.ts'teki
   * doğrulanmış koşullara dayanır; ilçeler arası kopyalamayın.
   */
  faqs?: { q: string; a: string }[];
  priority: number;
  updatedAt: string;
};

export const locations: Location[] = [
  {
    slug: "pendik-arac-kiralama",
    name: "Pendik",
    locative: "Pendik'te",
    // Ana sayfa da "Pendik Araç Kiralama" hedefliyor ve Google bu sorguda ana
    // sayfayı seçiyor (Search Console, Kasım 2026). Bu sayfa ikinci kopya
    // olmasın diye "oto kiralama" ve ofise yakın mahallelere ayrıştırıldı.
    title: "Pendik Oto Kiralama: Çamçeşme, Kaynarca, Güzelyalı",
    description:
      "Pendik araç kiralama ve oto kiralama: Çamçeşme'deki ofisimizden günlük ₺2.000'den başlayan fiyatlarla kiralık araba. Depozito yok, 7/24 açık.",
    intro:
      "Aydemir Oto Kiralama'nın ofisi Pendik Çamçeşme'de, Katip Çelebi Caddesi üzerindedir. Araç teslimlerimizi buradan yapıyoruz ve ofisimiz 7/24 açık; gece geç saatte veya sabah erkenden de araç teslim alabilirsiniz.",
    access:
      "Ofisimiz Çamçeşme'de, Katip Çelebi Caddesi üzerinde. Pendik merkez, Kaynarca ve Güzelyalı yönünden toplu taşıma ve özel araçla kolayca ulaşılıyor.",
    distance: "Pendik merkeze birkaç dakika",
    useCase:
      "Pendik, Marmaray ve metro hatlarının kesiştiği, İDO Pendik feribot iskelesinin bulunduğu ve Sabiha Gökçen Havalimanı'na komşu bir ilçe. Şehir dışından Pendik'e gelip İstanbul içinde araca ihtiyaç duyan misafirlerimiz ile havalimanı bağlantısı olanlar için ofisimizin konumu avantajlı.",
    nearby: [
      "kurtkoy-arac-kiralama",
      "kartal-arac-kiralama",
      "tuzla-arac-kiralama",
    ],
    faqs: [
      {
        q: "Pendik'teki ofisiniz tam olarak nerede?",
        a: "Ofisimiz Pendik Çamçeşme Mahallesi'nde, Katip Çelebi Caddesi No:6/A adresindedir. Araç teslimlerimizi buradan yapıyoruz ve ofisimiz 7/24 açık.",
      },
      {
        q: "Kaynarca veya Güzelyalı'dan ofisinize nasıl gelirim?",
        a: "Çamçeşme'deki ofisimize Pendik merkez, Kaynarca ve Güzelyalı yönünden toplu taşıma ve özel araçla kolayca ulaşılıyor. Konum için iletişim sayfamızdaki haritayı kullanabilirsiniz.",
      },
      {
        q: "Pendik'te oto kiralama fiyatları ne kadar?",
        a: "Günlük araç kiralama fiyatlarımız ₺2.000'den başlıyor. Haftalık ve aylık fiyatlar süreye göre belirlendiği için tarihlerinizi WhatsApp'tan yazmanız yeterli.",
      },
    ],
    priority: 0.9,
    updatedAt: "2026-11-23",
  },
  {
    slug: "kurtkoy-arac-kiralama",
    name: "Kurtköy",
    locative: "Kurtköy'de",
    title: "Kurtköy Araç Kiralama – Sabiha Gökçen'e 15 dk",
    description:
      "Kurtköy ve çevresinde araç kiralama. Sabiha Gökçen Havalimanı'na araç getiriyoruz, ofisimiz havalimanına 15 dakika mesafede.",
    intro:
      "Kurtköy, Sabiha Gökçen Havalimanı'nın bulunduğu bölgedir. Havalimanına araç getirdiğimiz için Kurtköy çevresinden bize ulaşan misafirlerimiz aracı havalimanında veya Pendik Çamçeşme'deki ofisimizde teslim alabiliyor.",
    access:
      "Ofisimiz Kurtköy'e ve Sabiha Gökçen Havalimanı'na yaklaşık 15 dakikalık mesafede. Havalimanı teslimleri için ayrıca ofise gelmenize gerek yok.",
    distance: "Havalimanına yaklaşık 15 dakika",
    useCase:
      "Kurtköy'de havalimanı çevresinde yoğun bir otel ve iş merkezi bölgesi bulunuyor. Uçuşla gelip birkaç günlük araç ihtiyacı olan misafirlerimiz için havalimanına araç getirebiliyoruz; teslim saatini önceden WhatsApp'tan konuşuyoruz.",
    nearby: [
      "pendik-arac-kiralama",
      "sancaktepe-arac-kiralama",
      "tuzla-arac-kiralama",
    ],
    faqs: [
      {
        q: "Kurtköy'de kiraladığım aracı nereden teslim alırım?",
        a: "Aracı Sabiha Gökçen Havalimanı'nda ya da Pendik Çamçeşme'deki ofisimizde teslim alabilirsiniz. Kurtköy'deki adreslere teslim yapmıyoruz; havalimanı dışındaki teslimler ofisimizden yapılır.",
      },
      {
        q: "Ofisiniz Kurtköy'e ne kadar uzaklıkta?",
        a: "Ofisimiz Kurtköy'e ve Sabiha Gökçen Havalimanı'na yaklaşık 15 dakikalık mesafededir.",
      },
      {
        q: "Kurtköy'de gece araç kiralayabilir miyim?",
        a: "Evet, ofisimiz 7/24 açık. Havalimanında teslim alacaksanız varış saatinizi önceden WhatsApp'tan yazmanız yeterli.",
      },
    ],
    priority: 0.8,
    updatedAt: "2026-11-23",
  },
  {
    slug: "kartal-arac-kiralama",
    name: "Kartal",
    locative: "Kartal'da",
    title: "Kartal Araç Kiralama | Pendik Ofisimizden Teslim",
    description:
      "Kartal'dan araç kiralama. Pendik Çamçeşme'deki ofisimizden günlük, haftalık ve aylık kiralama. Depozito yok, 7/24 açık.",
    intro:
      "Kartal, ofisimize komşu ilçedir. Araç teslimlerimiz Pendik Çamçeşme'deki ofisten yapıldığı için Kartal'dan gelen misafirlerimiz kısa bir yolculukla aracı teslim alabiliyor.",
    access:
      "Kartal'dan ofisimize E-5 ve sahil yolu üzerinden ulaşılabiliyor. M4 metro hattı ve Marmaray da Kartal ile Pendik arasında doğrudan bağlantı sağlıyor.",
    distance: "Ofisimize yaklaşık 10 km",
    useCase:
      "Kartal Adliyesi, Dr. Lütfi Kırdar Şehir Hastanesi ve Kartal Sahil çevresinde işi olan misafirlerimiz için günübirlik kiralama sık tercih ediliyor. Anadolu Yakası içi kısa seyahatlerde ofisimizin konumu pratik bir başlangıç noktası.",
    nearby: [
      "pendik-arac-kiralama",
      "maltepe-arac-kiralama",
      "tuzla-arac-kiralama",
    ],
    faqs: [
      {
        q: "Kartal'dan ofisinize nasıl gelirim?",
        a: "Kartal'dan ofisimize E-5 ve sahil yolu üzerinden ulaşabilirsiniz; M4 metro hattı ve Marmaray da Kartal ile Pendik arasında doğrudan bağlantı sağlıyor. Ofisimiz Kartal'a yaklaşık 10 km mesafede.",
      },
      {
        q: "Kartal'da günübirlik araç kiralayabilir miyim?",
        a: "Evet, minimum kiralama süremiz 1 gün. Günlük araç kiralama fiyatlarımız ₺2.000'den başlıyor ve günlük 200 km sınırı uygulanıyor.",
      },
      {
        q: "Kartal'a araç getiriyor musunuz?",
        a: "Hayır, adrese teslim hizmetimiz yok. Kartal'dan kiralayan misafirlerimiz aracı Pendik Çamçeşme'deki ofisimizden teslim alıyor.",
      },
    ],
    priority: 0.7,
    updatedAt: "2026-11-23",
  },
  {
    slug: "tuzla-arac-kiralama",
    name: "Tuzla",
    locative: "Tuzla'da",
    title: "Tuzla Araç Kiralama | Günlük ve Uzun Dönem",
    description:
      "Tuzla'dan araç kiralama. Pendik'teki ofisimizden günlük, haftalık ve aylık kiralama. Depozito alınmıyor, ofis 7/24 açık.",
    intro:
      "Tuzla, ofisimize komşu ilçelerden biridir. Araç teslimi Pendik Çamçeşme'deki ofisimizden yapılır; Tuzla'dan ulaşım kısa sürüyor.",
    access:
      "Tuzla'dan ofisimize E-5 ve sahil yolu üzerinden ulaşabilirsiniz. Marmaray hattı da Tuzla ile Pendik arasında doğrudan bağlantı sağlıyor.",
    distance: "Ofisimize yaklaşık 10 km",
    useCase:
      "Tuzla'da tersaneler bölgesi, Teknopark İstanbul, organize sanayi ve Sabancı Üniversitesi çevresinde yoğun bir hareketlilik var. Bölgede birkaç haftalık görevlendirmeyle bulunan misafirlerimiz için haftalık ve aylık kiralama öne çıkıyor.",
    nearby: [
      "pendik-arac-kiralama",
      "kurtkoy-arac-kiralama",
      "kartal-arac-kiralama",
    ],
    faqs: [
      {
        q: "Tuzla'da haftalık veya aylık araç kiralayabilir miyim?",
        a: "Evet. Günlük kiralamanın yanında haftalık, aylık ve uzun dönem kiralama da yapıyoruz. Bu sürelerdeki fiyatlar süreye göre belirlendiği için ihtiyacınızı WhatsApp'tan yazmanız yeterli.",
      },
      {
        q: "Tuzla'dan ofisinize nasıl gelirim?",
        a: "Tuzla'dan ofisimize E-5 ve sahil yolu üzerinden ulaşabilirsiniz; Marmaray hattı da Tuzla ile Pendik arasında doğrudan bağlantı sağlıyor. Ofisimiz Tuzla'ya yaklaşık 10 km mesafede.",
      },
      {
        q: "Tuzla'ya kiralık araba getiriyor musunuz?",
        a: "Hayır, adrese teslim hizmetimiz yok. Araç Pendik Çamçeşme'deki ofisimizden teslim edilir; tek istisna Sabiha Gökçen Havalimanı'dır.",
      },
    ],
    priority: 0.7,
    updatedAt: "2026-11-23",
  },
  {
    slug: "maltepe-arac-kiralama",
    name: "Maltepe",
    locative: "Maltepe'de",
    title: "Maltepe Araç ve Oto Kiralama – Depozitosuz, 7/24",
    description:
      "Maltepe'den araç kiralama. Pendik'teki ofisimizden teslim, günlük ve haftalık kiralama, depozito yok.",
    intro:
      "Maltepe'den araç kiralamak isteyen misafirlerimiz aracı Pendik Çamçeşme'deki ofisimizden teslim alıyor. Ofisimiz 7/24 açık olduğu için teslim saatini kendinize göre belirleyebilirsiniz.",
    access:
      "Maltepe'den ofisimize E-5 veya sahil yolu üzerinden ulaşılıyor. M4 metro hattı Maltepe ile Pendik arasında doğrudan bağlantı sağlıyor.",
    distance: "Ofisimize yaklaşık 20 km",
    useCase:
      "Maltepe Sahil ve Bağdat Caddesi hattındaki hareketlilik nedeniyle bu bölgeden gelen talepler daha çok hafta sonu ve kısa dönem kiralama oluyor. Şehir içi kullanımda park kolaylığı için kompakt araçlarımızı öneriyoruz.",
    nearby: [
      "kartal-arac-kiralama",
      "pendik-arac-kiralama",
    ],
    faqs: [
      {
        q: "Maltepe'ye araç getiriyor musunuz?",
        a: "Hayır, adrese teslim hizmetimiz yok. Maltepe'den kiralayan misafirlerimiz aracı Pendik Çamçeşme'deki ofisimizden teslim alıyor; ofisimiz 7/24 açık.",
      },
      {
        q: "Maltepe'den ofisinize nasıl gelirim?",
        a: "Maltepe'den ofisimize E-5 veya sahil yolu üzerinden ulaşılıyor; M4 metro hattı da Maltepe ile Pendik arasında doğrudan bağlantı sağlıyor. Ofisimiz Maltepe'ye yaklaşık 20 km mesafede.",
      },
      {
        q: "Maltepe'de oto kiralama için depozito gerekiyor mu?",
        a: "Hayır, depozito almıyoruz. En az 2 yıllık ehliyet ve kimlik yeterli; ödeme nakit veya havaleyle yapılıyor.",
      },
    ],
    priority: 0.6,
    updatedAt: "2026-11-23",
  },
  {
    slug: "sancaktepe-arac-kiralama",
    name: "Sancaktepe",
    locative: "Sancaktepe'de",
    title: "Sancaktepe Araç Kiralama | Günlük Kiralama",
    description:
      "Sancaktepe'den araç kiralama. Pendik'teki ofisimizden teslim, günlük ve aylık kiralama, depozito alınmıyor.",
    intro:
      "Sancaktepe'den araç kiralamak isteyen misafirlerimiz aracı Pendik Çamçeşme'deki ofisimizden teslim alıyor. Ofisimiz 7/24 açıktır.",
    access:
      "Sancaktepe'den ofisimize TEM otoyolu ve Kurtköy bağlantısı üzerinden ulaşılıyor. Sabiha Gökçen Havalimanı yönü de aynı güzergâh üzerinde.",
    distance: "Ofisimize yaklaşık 15 km",
    useCase:
      "TEM otoyoluna yakınlığı nedeniyle Sancaktepe'den araç kiralayan misafirlerimizin bir kısmı şehirlerarası yolculuk planlıyor. Bu durumda günlük 200 km kilometre sınırını rezervasyon sırasında konuşmakta fayda var.",
    nearby: [
      "kurtkoy-arac-kiralama",
      "pendik-arac-kiralama",
      "kartal-arac-kiralama",
    ],
    faqs: [
      {
        q: "Sancaktepe'den ofisinize nasıl ulaşırım?",
        a: "Sancaktepe'den ofisimize TEM otoyolu ve Kurtköy bağlantısı üzerinden ulaşılıyor; Sabiha Gökçen Havalimanı yönü de aynı güzergâh üzerinde. Ofisimiz Sancaktepe'ye yaklaşık 15 km mesafede.",
      },
      {
        q: "Sancaktepe'den kiraladığım araçla şehir dışına çıkabilir miyim?",
        a: "Günlük 200 km kilometre sınırı uygulanıyor; sınır aşılırsa ek ücret alınır. Şehirlerarası bir yolculuk planlıyorsanız rezervasyon sırasında belirtin, koşulları önceden netleştirelim.",
      },
      {
        q: "Sancaktepe'ye kiralık araç teslim ediyor musunuz?",
        a: "Hayır, adrese teslim hizmetimiz yok. Araç Pendik Çamçeşme'deki ofisimizden teslim edilir; Sabiha Gökçen Havalimanı'na ise araç getiriyoruz.",
      },
    ],
    priority: 0.6,
    updatedAt: "2026-11-23",
  },
  {
    slug: "istanbul-arac-kiralama",
    name: "İstanbul",
    locative: "İstanbul'da",
    title: "İstanbul Araç Kiralama | Anadolu Yakası",
    description:
      "İstanbul araç kiralama — Pendik merkezli, Anadolu Yakası'na yakın konum. Sabiha Gökçen Havalimanı'na araç getiriyoruz. Depozito yok.",
    intro:
      "Pendik Çamçeşme merkezli olarak İstanbul'da araç kiralama hizmeti veriyoruz. Araç teslimi ofisimizden yapılıyor; Sabiha Gökçen Havalimanı'na ise araç getiriyoruz.",
    access:
      "Ofisimiz Anadolu Yakası'nda, Marmaray ve M4 metro hatlarının geçtiği Pendik'te. Şehrin farklı noktalarından toplu taşımayla ulaşım mümkün.",
    distance: "Anadolu Yakası'nın merkezinde",
    useCase:
      "İstanbul'da araç kiralarken en çok karşılaşılan sorunlar teslim noktası ve trafik kaynaklı gecikmeler. Ofisimizin Sabiha Gökçen Havalimanı'na yakınlığı, uçuşla gelen misafirlerimiz için ulaşımı kolaylaştırıyor. Şehir içi kullanımda günlük 200 km sınırı çoğu ihtiyacı karşılıyor.",
    nearby: [
      "pendik-arac-kiralama",
      "kartal-arac-kiralama",
    ],
    priority: 0.7,
    updatedAt: "2026-08-01",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
