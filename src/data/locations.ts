/**
 * Lokasyon (ilçe) sayfaları.
 *
 * ÖNEMLİ — kopya içerik uyarısı: Her lokasyonun `intro`, `neighborhoods`,
 * `useCase` ve `airport` alanları o ilçeye ÖZGÜ olmalıdır. Aynı metni
 * ilçe adını değiştirerek çoğaltmak Google tarafından doorway page olarak
 * değerlendirilir ve sayfaların tamamı değer kaybeder.
 *
 * Teslimat sürelerini ve ücret politikasını kendi işleyişinize göre kontrol
 * edin — aşağıdakiler örnek değerlerdir.
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
  /** Teslimat yapılan semtler — ilçeye özgü, gerçek yer adları */
  neighborhoods: string[];
  /** Sabiha Gökçen'e mesafe/süre bilgisi */
  airport: string;
  /** İlçeye özgü kullanım senaryosu paragrafı */
  useCase: string;
  /** Ofisten yaklaşık teslimat süresi */
  deliveryTime: string;
  /** İlgili komşu ilçe slug'ları (internal linking) */
  nearby: string[];
  priority: number;
  updatedAt: string;
};

export const locations: Location[] = [
  {
    slug: "pendik-arac-kiralama",
    name: "Pendik",
    locative: "Pendik'te",
    title: "Pendik Araç Kiralama | Günlük Fiyatlar",
    description:
      "Pendik'te günlük, haftalık ve aylık araç kiralama. Adrese teslim, 7/24 hizmet, şeffaf fiyatlandırma. Çamçeşme'deki ofisimizden hemen teslim alın.",
    intro:
      "Aydemir Oto Kiralama'nın merkez ofisi Pendik Çamçeşme'de, Katip Çelebi Caddesi üzerindedir. Aracınızı doğrudan ofisten teslim alabilir ya da Pendik sınırları içindeki adresinize getirtebilirsiniz. Ofisimiz 7/24 açık olduğu için gece saatlerinde inen uçuşlarda veya erken saatli çıkışlarda da teslim yapabiliyoruz.",
    neighborhoods: [
      "Çamçeşme",
      "Kaynarca",
      "Güzelyalı",
      "Velibaba",
      "Kurtköy",
      "Batı Mahallesi",
      "Yenişehir",
      "Esenyalı",
    ],
    airport:
      "Ofisimiz Sabiha Gökçen Havalimanı'na yaklaşık 8 km, trafiğe bağlı olarak 15–20 dakika mesafededir.",
    useCase:
      "Pendik, Marmaray ve metro hatlarının kesiştiği, aynı zamanda İDO Pendik feribot iskelesinin bulunduğu bir ilçe. Bursa veya Yalova'dan feribotla gelip İstanbul'da araç ihtiyacı duyan misafirlerimiz için iskeleye teslimat yapıyoruz. Sabiha Gökçen'e yakınlığı sayesinde havalimanı transferi ihtiyacı olan misafirlerimizin de en çok tercih ettiği teslim noktası burası.",
    deliveryTime: "Ofisten 15–30 dakika içinde",
    nearby: ["kurtkoy-arac-kiralama", "tuzla-arac-kiralama", "kartal-arac-kiralama"],
    priority: 0.9,
    updatedAt: "2026-07-31",
  },
  {
    slug: "kurtkoy-arac-kiralama",
    name: "Kurtköy",
    locative: "Kurtköy'de",
    title: "Kurtköy Araç Kiralama | Havalimanına 5 Dk",
    description:
      "Kurtköy'de araç kiralama. Sabiha Gökçen Havalimanı'na en yakın teslim noktası, 7/24 araç teslimi ve uygun günlük fiyatlar.",
    intro:
      "Kurtköy, Sabiha Gökçen Havalimanı'nın hemen yanı başındaki mahalledir ve havalimanına en hızlı teslimat yaptığımız bölgedir. Otel, rezidans veya iş merkezi adresinize aracınızı getiriyoruz.",
    neighborhoods: [
      "Kurtköy Merkez",
      "Sanayi Mahallesi",
      "Yenişehir",
      "Havalimanı çevresi otelleri",
    ],
    airport:
      "Kurtköy, Sabiha Gökçen Havalimanı'na 3–5 km mesafede; teslimat ortalama 10 dakika sürüyor.",
    useCase:
      "Kurtköy'de yoğun bir iş merkezi ve otel bölgesi bulunuyor. Havalimanı çevresindeki otellerde konaklayıp birkaç günlük araç ihtiyacı olan iş seyahati misafirlerimiz ile Teknopark ve çevre sanayi bölgesinde çalışan kurumsal müşterilerimiz burada yoğunlaşıyor. Uçuş saatinize göre gece teslimi de yapabiliyoruz.",
    deliveryTime: "10–20 dakika içinde",
    nearby: [
      "pendik-arac-kiralama",
      "sancaktepe-arac-kiralama",
      "tuzla-arac-kiralama",
    ],
    priority: 0.8,
    updatedAt: "2026-07-31",
  },
  {
    slug: "kartal-arac-kiralama",
    name: "Kartal",
    locative: "Kartal'da",
    title: "Kartal Araç Kiralama | Adrese Teslim",
    description:
      "Kartal'da günlük ve aylık araç kiralama. Adrese teslim, sigortalı ve bakımlı araçlar, WhatsApp'tan hızlı rezervasyon.",
    intro:
      "Kartal, Pendik ofisimize komşu ilçe olduğu için en hızlı teslimat yaptığımız bölgelerden biridir. Aracınızı ev veya iş adresinize getiriyoruz; teslim ve iade işlemleri aynı noktadan yapılabiliyor.",
    neighborhoods: [
      "Kartal Sahil",
      "Soğanlık",
      "Yakacık",
      "Cevizli",
      "Orhantepe",
      "Kordonboyu",
    ],
    airport:
      "Kartal'dan Sabiha Gökçen Havalimanı'na yaklaşık 15 km, ortalama 20–25 dakika.",
    useCase:
      "Kartal Adliyesi ve Dr. Lütfi Kırdar Şehir Hastanesi çevresinde işi olan misafirlerimiz için günübirlik kiralama sık talep ediliyor. Ayrıca E-5 ve sahil yolu bağlantısı sayesinde Anadolu Yakası içi kısa seyahatlerde pratik bir teslim noktası.",
    deliveryTime: "30–45 dakika içinde",
    nearby: [
      "pendik-arac-kiralama",
      "maltepe-arac-kiralama",
      "sancaktepe-arac-kiralama",
    ],
    priority: 0.7,
    updatedAt: "2026-07-31",
  },
  {
    slug: "tuzla-arac-kiralama",
    name: "Tuzla",
    locative: "Tuzla'da",
    title: "Tuzla Araç Kiralama | Kurumsal ve Günlük",
    description:
      "Tuzla'da araç kiralama. Tersaneler bölgesi, Teknopark ve organize sanayiye teslimat. Günlük, haftalık ve aylık kiralama seçenekleri.",
    intro:
      "Tuzla'ya araç teslimatı yapıyoruz. Bölgedeki yoğun sanayi ve eğitim hareketliliği nedeniyle burada uzun dönem kiralama talepleri öne çıkıyor; aylık kiralamalarda fiyat avantajı sağlıyoruz.",
    neighborhoods: [
      "Tuzla Marina",
      "Teknopark İstanbul",
      "Aydınlı",
      "Orhanlı",
      "İçmeler",
      "Tersaneler Bölgesi",
    ],
    airport:
      "Tuzla'dan Sabiha Gökçen Havalimanı'na yaklaşık 12 km, ortalama 18 dakika.",
    useCase:
      "Tuzla tersaneler bölgesi, Teknopark İstanbul ve organize sanayi bölgesinde görev süresi birkaç haftayı bulan çalışanlar için aylık kiralama en mantıklı seçenek oluyor. Kurumsal müşterilerimize faturalı kiralama ve çoklu araç seçeneği sunuyoruz. Sabancı Üniversitesi çevresi de sık teslimat yaptığımız noktalardan.",
    deliveryTime: "30–45 dakika içinde",
    nearby: [
      "pendik-arac-kiralama",
      "kurtkoy-arac-kiralama",
      "kartal-arac-kiralama",
    ],
    priority: 0.7,
    updatedAt: "2026-07-31",
  },
  {
    slug: "maltepe-arac-kiralama",
    name: "Maltepe",
    locative: "Maltepe'de",
    title: "Maltepe Araç Kiralama | Adrese Teslim",
    description:
      "Maltepe'de günlük araç kiralama. Adrese teslim, temiz ve bakımlı araçlar, gizli ücret olmadan şeffaf fiyatlandırma.",
    intro:
      "Maltepe'deki ev veya iş adresinize araç teslimatı yapıyoruz. Kısa dönem şehir içi kullanım için ekonomik segment araçlarımız bu bölgede en çok tercih edilenler.",
    neighborhoods: [
      "Bağlarbaşı",
      "Cevizli",
      "Küçükyalı",
      "Altıntepe",
      "Başıbüyük",
      "Maltepe Sahil",
    ],
    airport:
      "Maltepe'den Sabiha Gökçen Havalimanı'na yaklaşık 22 km, trafiğe göre 25–35 dakika.",
    useCase:
      "Maltepe Sahil ve Bağdat Caddesi hattındaki hareketlilik nedeniyle burada daha çok hafta sonu ve kısa dönem kiralama talebi geliyor. Şehir içi kullanımda park kolaylığı için kompakt araçlarımızı öneriyoruz.",
    deliveryTime: "45–60 dakika içinde",
    nearby: ["kartal-arac-kiralama", "kadikoy-arac-kiralama", "pendik-arac-kiralama"],
    priority: 0.6,
    updatedAt: "2026-07-31",
  },
  {
    slug: "sancaktepe-arac-kiralama",
    name: "Sancaktepe",
    locative: "Sancaktepe'de",
    title: "Sancaktepe Araç Kiralama | Günlük ve Aylık",
    description:
      "Sancaktepe'de araç kiralama hizmeti. Adrese teslim, günlük ve aylık kiralama, WhatsApp üzerinden hızlı rezervasyon.",
    intro:
      "Sancaktepe ve çevresine araç teslimatı yapıyoruz. TEM otoyolu bağlantısı sayesinde şehirlerarası çıkış planlayan misafirlerimiz için pratik bir başlangıç noktası.",
    neighborhoods: [
      "Sarıgazi",
      "Samandıra",
      "Yenidoğan",
      "Abdurrahmangazi",
      "Emek",
    ],
    airport:
      "Sancaktepe'den Sabiha Gökçen Havalimanı'na yaklaşık 18 km, ortalama 25 dakika.",
    useCase:
      "TEM otoyoluna yakınlığı nedeniyle Sancaktepe'den araç kiralayan misafirlerimizin önemli bir kısmı şehirlerarası yolculuk planlıyor. Bu tür kullanımlarda günlük kilometre limiti ve dizel araç tercihi konusunda önceden bilgi veriyoruz.",
    deliveryTime: "45–60 dakika içinde",
    nearby: ["kartal-arac-kiralama", "pendik-arac-kiralama", "kurtkoy-arac-kiralama"],
    priority: 0.6,
    updatedAt: "2026-07-31",
  },
  {
    slug: "kadikoy-arac-kiralama",
    name: "Kadıköy",
    locative: "Kadıköy'de",
    title: "Kadıköy Araç Kiralama | Adrese Teslim",
    description:
      "Kadıköy'de araç kiralama. Adrese teslim, günlük ve haftalık seçenekler, temiz ve sigortalı araçlar.",
    intro:
      "Kadıköy'e araç teslimatı yapıyoruz. Yoğun trafik ve park sorunu nedeniyle bu bölgede otomatik vitesli ve kompakt araçlarımız öne çıkıyor.",
    neighborhoods: [
      "Bağdat Caddesi",
      "Rıhtım",
      "Fenerbahçe",
      "Göztepe",
      "Acıbadem",
      "Kozyatağı",
    ],
    airport:
      "Kadıköy'den Sabiha Gökçen Havalimanı'na yaklaşık 35 km, trafiğe göre 40–50 dakika.",
    useCase:
      "Kadıköy'de araç kiralayan misafirlerimizin çoğu şehir içi kullanım ve hafta sonu kaçamakları için tercih ediyor. Park alanı kısıtlı olduğundan küçük gövdeli otomatik araçları öneriyoruz. Ofisimize uzaklığı nedeniyle teslimat için bir gün önceden rezervasyon yapılmasını rica ediyoruz.",
    deliveryTime: "1 gün önceden rezervasyon önerilir",
    nearby: ["maltepe-arac-kiralama", "kartal-arac-kiralama", "istanbul-arac-kiralama"],
    priority: 0.6,
    updatedAt: "2026-07-31",
  },
  {
    slug: "istanbul-arac-kiralama",
    name: "İstanbul",
    locative: "İstanbul'da",
    title: "İstanbul Araç Kiralama | Anadolu Yakası",
    description:
      "İstanbul araç kiralama — Anadolu Yakası ağırlıklı teslimat, Sabiha Gökçen Havalimanı teslim, günlük ve aylık kiralama seçenekleri.",
    intro:
      "Pendik merkezli olarak İstanbul genelinde araç kiralama hizmeti veriyoruz. Anadolu Yakası'nda aynı gün teslimat yapabiliyor, Avrupa Yakası için ise teslimat planını önceden birlikte belirliyoruz.",
    neighborhoods: [
      "Pendik",
      "Kurtköy",
      "Kartal",
      "Tuzla",
      "Maltepe",
      "Sancaktepe",
      "Kadıköy",
      "Ataşehir",
    ],
    airport:
      "Sabiha Gökçen Havalimanı teslimatı standart hizmetimizdir; İstanbul Havalimanı teslimatı için önceden bilgi verilmesi gerekir.",
    useCase:
      "İstanbul'da araç kiralarken en çok karşılaşılan sorunlar teslim noktası ve trafik kaynaklı gecikmelerdir. Anadolu Yakası'nda merkezî konumumuz sayesinde teslim süresini kısa tutuyoruz. Şehir içi kullanımda günlük kilometre limitinin yeterli olduğunu, şehirlerarası planlarda ise ek kilometre paketini önceden konuşmanızı öneriyoruz.",
    deliveryTime: "Anadolu Yakası aynı gün, Avrupa Yakası planlı",
    nearby: ["pendik-arac-kiralama", "kadikoy-arac-kiralama", "kartal-arac-kiralama"],
    priority: 0.7,
    updatedAt: "2026-07-31",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
