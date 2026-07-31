/**
 * Süre bazlı kiralama sayfaları: /gunluk-, /haftalik-, /aylik-arac-kiralama
 *
 * Bu sayfalar lokasyon sayfalarından farklı bir arama niyetini karşılar:
 * kullanıcı "nerede" değil "ne kadar süre" sorusuyla arıyor.
 *
 * ⚠️ İçerik yalnızca DOĞRULANMIŞ koşullara dayanır:
 *   - Minimum kiralama süresi 1 gün
 *   - Günlük fiyatlar sabit; haftalık ve aylık fiyatlar süreye göre değişiyor
 *   - Günlük 200 km sınırı
 *   - Depozito yok; ön rezervasyonda kapora
 *   - Nakit veya havale; kredi kartı geçmiyor
 *   - Teslim Pendik ofisinden, Sabiha Gökçen'e araç getiriliyor
 *   - Ofis 7/24 açık, araçlar sigortalı ve kaskolu
 *
 * Kurumsal fatura, taksitli ödeme, ücretsiz araç değişimi gibi doğrulanmamış
 * hiçbir hizmet yazılmaz. Üç sayfanın `benefits`, `bestFor` ve `notes`
 * alanları birbirinden farklı olmalıdır.
 */

export type Duration = {
  slug: string;
  /** "Günlük" */
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Bu sürede fiyatın nasıl belirlendiği */
  pricing: string;
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
      "Günlük araç kiralama — 1 günden itibaren, Pendik ofisimizden teslim. Depozito yok, günlük 200 km, 7/24 açık. Güncel günlük fiyatlar.",
    h1: "Günlük Araç Kiralama",
    intro:
      "Minimum kiralama süremiz 1 gündür. Günlük kiralama; kendi aracı serviste olanlar, şehir dışından kısa süreliğine gelenler ve gün içinde birden fazla noktaya gitmesi gereken iş seyahatleri için en esnek seçenek. Aracı teslim aldığınız saatte, ertesi gün aynı saatte iade edersiniz.",
    pricing:
      "Günlük fiyatlarımız araca göre sabittir ve aşağıdaki tabloda yer alıyor. Toplam tutarı teslim öncesi yazılı olarak paylaşıyoruz.",
    benefits: [
      {
        title: "Taahhüt yok",
        text: "Tek gün için kiralayıp süreyi uzatmak isterseniz bize haber vermeniz yeterli.",
      },
      {
        title: "7/24 teslim ve iade",
        text: "Ofisimiz kesintisiz açık; sabah erken çıkış veya gece geç iade fark etmiyor.",
      },
      {
        title: "Depozito yok",
        text: "Aracı hemen teslim alacaksanız ön ödeme gerekmiyor.",
      },
    ],
    bestFor: [
      "Kendi aracı serviste olanlar",
      "Şehir dışından bir günlüğüne gelenler",
      "Gün içinde çok noktaya gitmesi gereken iş seyahatleri",
      "Sabiha Gökçen'e inip şehir içinde araca ihtiyaç duyanlar",
    ],
    notes: [
      {
        title: "Kilometre sınırı",
        text: "Günlük 200 km sınırı uygulanır. Şehir içi kullanım için fazlasıyla yeterlidir; şehir dışına çıkacaksanız rezervasyon sırasında konuşalım.",
      },
      {
        title: "Önceden ayırtma",
        text: "Aracı ileri bir tarih için ayırtmak isterseniz kapora alıyoruz. Yoğun dönemlerde önceden yazmanızda fayda var.",
      },
    ],
    updatedAt: "2026-08-01",
  },
  {
    slug: "haftalik-arac-kiralama",
    name: "Haftalık",
    title: "Haftalık Araç Kiralama | 7 Gün ve Üzeri",
    description:
      "Haftalık araç kiralama. Pendik ofisimizden teslim, depozito yok, 7/24 açık. Haftalık fiyat için WhatsApp'tan yazın.",
    h1: "Haftalık Araç Kiralama",
    intro:
      "Bir hafta ve üzeri kiralamalarda süreye göre fiyat belirliyoruz. Haftalık kiralama; tatil, uzun iş seyahati veya misafirlik dönemleri için dengeli bir seçenek. Tek sözleşmeyle, aracı hafta boyunca kesintisiz kullanırsınız.",
    pricing:
      "Haftalık fiyatlar kiralama süresine ve araca göre değiştiği için sabit liste yayınlamıyoruz. Tarihlerinizi yazmanız yeterli, toplam tutarı hemen paylaşıyoruz.",
    benefits: [
      {
        title: "Tek sözleşme",
        text: "Hafta boyunca tek sözleşme ve tek ödeme; her gün yeniden işlem yapmanız gerekmiyor.",
      },
      {
        title: "Süreye göre fiyat",
        text: "Kiralama uzadıkça fiyatı birlikte belirliyoruz. Tarihlerinizi yazın, teklifi paylaşalım.",
      },
      {
        title: "Depozito yok",
        text: "Uzun süreli kiralamada da depozito almıyoruz.",
      },
    ],
    bestFor: [
      "Tatil ve şehir dışı seyahatler",
      "Bir haftalık iş seyahati veya proje süresi",
      "Şehir dışından gelip bir hafta kalacak misafirler",
      "Kendi aracı uzun süreli onarımda olanlar",
    ],
    notes: [
      {
        title: "Kilometre sınırı",
        text: "Günlük 200 km sınırı haftalık kiralamalarda da geçerlidir. Uzun yol planınız varsa baştan konuşalım.",
      },
      {
        title: "Araç müsaitliği",
        text: "Filomuzda dört araç bulunuyor. Uzun süreli kiralamalarda müsaitlik sınırlı olabildiği için önceden yazmanızı öneririz.",
      },
    ],
    updatedAt: "2026-08-01",
  },
  {
    slug: "aylik-arac-kiralama",
    name: "Aylık",
    title: "Aylık Araç Kiralama | Uzun Dönem",
    description:
      "Aylık (uzun dönem) araç kiralama. Sigorta, kasko ve bakım dahil; depozito yok. Aylık fiyat için WhatsApp'tan bilgi alın.",
    h1: "Aylık Araç Kiralama",
    intro:
      "Bir ay ve üzeri kiralamalarda fiyatı süreye göre belirliyoruz. Aylık kiralama, araç satın almadan araç kullanmanın esnek yolu: sigorta, kasko ve periyodik bakım bize ait, siz yalnızca yakıt ve kullanım masrafını üstlenirsiniz.",
    pricing:
      "Aylık fiyatlar kiralama süresine ve araca göre belirlenir. Ne kadar süreyle ihtiyacınız olduğunu yazın, size özel teklifi paylaşalım.",
    benefits: [
      {
        title: "Bakım ve sigorta bize ait",
        text: "Periyodik bakım, sigorta ve kasko bizim sorumluluğumuzda. Takip etmeniz gereken bir şey kalmıyor.",
      },
      {
        title: "Süreye göre fiyat",
        text: "Uzun dönemde fiyatı birlikte belirliyoruz. İhtiyaç süresini yazmanız yeterli.",
      },
      {
        title: "Amortisman derdi yok",
        text: "Aracın değer kaybı, satış süreci ve beklenmedik arıza maliyetleri sizi ilgilendirmiyor.",
      },
    ],
    bestFor: [
      "Geçici olarak İstanbul'da bulunanlar",
      "Uzun süreli görevlendirmeyle şehre gelenler",
      "Araç satın almadan önce uzun süre denemek isteyenler",
      "Kendi aracı uzun süre kullanılamayacak olanlar",
    ],
    notes: [
      {
        title: "Kilometre planı",
        text: "Günlük 200 km sınırı uzun dönem kiralamalarda da geçerli. Aylık ortalama kaç km yapacağınızı baştan konuşmakta fayda var.",
      },
      {
        title: "Ödeme",
        text: "Ödeme nakit veya banka havalesiyle yapılır; kredi kartı geçmemektedir.",
      },
    ],
    updatedAt: "2026-08-01",
  },
];

export function getDuration(slug: string): Duration | undefined {
  return durations.find((d) => d.slug === slug);
}
