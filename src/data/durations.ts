/**
 * Süre bazlı kiralama sayfaları: /gunluk-, /haftalik-, /aylik-,
 * /uzun-donem-arac-kiralama
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
 *   - Bakım işletmeye ait, müşteriden bakım ücreti alınmıyor (23.11.2026)
 *   - Uzun dönem / yıllık kiralama var, fiyat iletişimle (23.11.2026)
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
    // "Uzun dönem" ifadesi /uzun-donem-arac-kiralama sayfasına bırakıldı —
    // iki sayfa aynı aramada birbirine rakip olmasın.
    title: "Aylık Araç Kiralama | 1 Aydan İtibaren",
    description:
      "Aylık araç kiralama: 1 aydan itibaren kiralık araç. Sigorta, kasko ve bakım dahil; depozito yok. Aylık fiyat için WhatsApp'tan bilgi alın.",
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
      {
        title: "6 ay ve üzeri için",
        text: "Daha uzun süreli ihtiyaçlar için uzun dönem ve yıllık araç kiralama sayfamıza bakabilirsiniz.",
      },
    ],
    updatedAt: "2026-11-23",
  },
  {
    // İşletme sahibi 23 Kasım 2026'da uzun dönem/yıllık kiralama yaptıklarını,
    // fiyatın iletişimle verildiğini ve bakımın kendilerine ait olduğunu teyit
    // etti. Kurumsal fatura, taksit gibi doğrulanmamış hizmetler YAZILMADI.
    slug: "uzun-donem-arac-kiralama",
    name: "Uzun Dönem",
    title: "Uzun Dönem ve Yıllık Araç Kiralama – 6, 12 Ay",
    description:
      "Uzun dönem ve yıllık araç kiralama: 6 ay, 12 ay ve daha uzun süreli kiralık araç. Sigorta, kasko ve bakım dahil, depozito yok. Fiyat için WhatsApp'tan teklif alın.",
    h1: "Uzun Dönem ve Yıllık Araç Kiralama",
    intro:
      "6 ay, 12 ay ya da daha uzun süre araca ihtiyacınız varsa uzun dönem araç kiralama yapıyoruz. Uzun dönem fiyatları kiralama süresine ve araca göre belirlendiği için sabit bir fiyat listesi yayınlamıyoruz; ne kadar süreyle hangi araca ihtiyacınız olduğunu yazın, size özel teklifi paylaşalım.",
    pricing:
      "6 aylık, 12 aylık ve yıllık araç kiralama fiyatları süreye ve seçtiğiniz araca göre belirlenir. Fiyat için WhatsApp'tan ya da telefonla bize ulaşın.",
    benefits: [
      {
        title: "Süreye göre teklif",
        text: "6 ay, 12 ay veya daha uzun süre için fiyatı ihtiyacınıza göre birlikte belirliyoruz.",
      },
      {
        title: "Bakım, sigorta ve kasko bize ait",
        text: "Aracın bakımını biz yapıyoruz ve sizden bakım ücreti almıyoruz. Tüm araçlarımız sigortalı ve kaskolu; siz yalnızca yakıt ve kullanım masrafını üstlenirsiniz.",
      },
      {
        title: "Depozito yok",
        text: "Uzun dönem kiralamada da depozito almıyoruz. Ödeme nakit veya banka havalesiyle yapılır.",
      },
    ],
    bestFor: [
      "Bir yıl veya daha uzun süre İstanbul'da görevli olanlar",
      "Araç satın almak yerine kiralamayı tercih edenler",
      "İşi için aylarca sürekli araca ihtiyaç duyanlar",
      "Yeni aracının teslimini uzun süre bekleyenler",
    ],
    notes: [
      {
        title: "Kilometre planı",
        text: "Günlük 200 km sınırı uzun dönem kiralamalarda da geçerli. Aylık ortalama kaç km yapacağınızı teklif aşamasında konuşalım.",
      },
      {
        title: "Ödeme",
        text: "Ödeme nakit veya banka havalesiyle yapılır; kredi kartı geçmemektedir.",
      },
    ],
    updatedAt: "2026-11-23",
  },
];

export function getDuration(slug: string): Duration | undefined {
  return durations.find((d) => d.slug === slug);
}
