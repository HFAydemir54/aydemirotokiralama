/**
 * ============================================================================
 * ⚠️  ÖRNEK (MOCK) VERİ — YAYINA ALMADAN ÖNCE MUTLAKA GÜNCELLENMELİ
 * ============================================================================
 * Aşağıdaki araçlar, fiyatlar ve koşullar gerçek değildir; sadece sayfaların
 * yapısını kurmak için yerleştirilmiştir. Gerçek filo bilgisi geldiğinde
 * sadece bu dosyayı düzenlemeniz yeterli: ana sayfa kartları, /araclar listesi,
 * araç detay sayfaları, sitemap ve schema.org çıktısı hep buradan beslenir.
 *
 * `image: null` olan araçlarda fotoğraf yerine placeholder gösterilir.
 * Fotoğraf ekledikçe `public/araclar/<slug>.jpg` koyup yolunu buraya yazın.
 * ============================================================================
 */

export type Transmission = "Manuel" | "Otomatik";
export type Fuel = "Benzin" | "Dizel" | "Benzin/LPG" | "Hibrit" | "Elektrik";
export type Segment = "ekonomik" | "orta" | "suv" | "lux";

export type Vehicle = {
  slug: string;
  brand: string;
  model: string;
  year: number;
  segment: Segment;
  transmission: Transmission;
  fuel: Fuel;
  seats: number;
  luggage: number;
  engine: string;
  prices: { daily: number; weekly: number; monthly: number };
  /** Günlük kilometre limiti */
  kmLimitDaily: number;
  minAge: number;
  minLicenseYears: number;
  deposit: number;
  /** Ana sayfada gösterilsin mi */
  popular: boolean;
  image: string | null;
  /** Araç sayfasındaki tanıtım paragrafı */
  intro: string;
  /** "Kimler için uygun" maddeleri */
  goodFor: string[];
  updatedAt: string;
};

export const SEGMENT_LABELS: Record<Segment, string> = {
  ekonomik: "Ekonomik",
  orta: "Orta Sınıf",
  suv: "SUV",
  lux: "Lüks",
};

export const vehicles: Vehicle[] = [
  {
    slug: "renault-clio-kiralama",
    brand: "Renault",
    model: "Clio",
    year: 2023,
    segment: "ekonomik",
    transmission: "Manuel",
    fuel: "Dizel",
    seats: 5,
    luggage: 2,
    engine: "1.5 dCi",
    prices: { daily: 1400, weekly: 8400, monthly: 28000 },
    kmLimitDaily: 250,
    minAge: 21,
    minLicenseYears: 2,
    deposit: 5000,
    popular: true,
    image: null,
    intro:
      "Renault Clio, şehir içi kullanımda düşük yakıt tüketimi ve kolay park edilebilirliğiyle en çok tercih edilen ekonomik segment aracıdır. Dizel motoru sayesinde uzun yolda da ortalama tüketimi düşük tutar.",
    goodFor: [
      "Şehir içi günlük kullanım",
      "Bütçe odaklı kısa dönem kiralama",
      "Sabiha Gökçen transferi ve İstanbul içi seyahat",
    ],
    updatedAt: "2026-07-31",
  },
  {
    slug: "fiat-egea-kiralama",
    brand: "Fiat",
    model: "Egea",
    year: 2023,
    segment: "orta",
    transmission: "Manuel",
    fuel: "Dizel",
    seats: 5,
    luggage: 3,
    engine: "1.6 Multijet",
    prices: { daily: 1500, weekly: 9000, monthly: 30000 },
    kmLimitDaily: 250,
    minAge: 21,
    minLicenseYears: 2,
    deposit: 5000,
    popular: true,
    image: null,
    intro:
      "Fiat Egea, geniş bagajı ve ferah iç hacmiyle hem aile seyahatleri hem de uzun dönem kiralamalar için ideal bir orta sınıf sedandır. Türkiye'nin en yaygın servis ağına sahip modellerinden biridir.",
    goodFor: [
      "Havalimanı transferi ve bagajlı seyahat",
      "Aile kullanımı",
      "Uzun dönem / aylık kiralama",
    ],
    updatedAt: "2026-07-31",
  },
  {
    slug: "renault-taliant-kiralama",
    brand: "Renault",
    model: "Taliant",
    year: 2024,
    segment: "orta",
    transmission: "Otomatik",
    fuel: "Benzin",
    seats: 5,
    luggage: 3,
    engine: "1.0 Turbo X-Tronic",
    prices: { daily: 1700, weekly: 10200, monthly: 34000 },
    kmLimitDaily: 250,
    minAge: 23,
    minLicenseYears: 3,
    deposit: 7500,
    popular: true,
    image: null,
    intro:
      "Renault Taliant, otomatik vitesi ve 500 litreyi aşan bagaj hacmiyle konforlu bir sedan alternatifidir. İstanbul trafiğinde otomatik vites arayanların ilk tercihlerindendir.",
    goodFor: [
      "İstanbul trafiğinde konforlu sürüş",
      "Otomatik vites tercih edenler",
      "İş seyahatleri",
    ],
    updatedAt: "2026-07-31",
  },
  {
    slug: "hyundai-i20-kiralama",
    brand: "Hyundai",
    model: "i20",
    year: 2023,
    segment: "ekonomik",
    transmission: "Otomatik",
    fuel: "Benzin",
    seats: 5,
    luggage: 2,
    engine: "1.4 MPI",
    prices: { daily: 1550, weekly: 9300, monthly: 31000 },
    kmLimitDaily: 250,
    minAge: 21,
    minLicenseYears: 2,
    deposit: 5000,
    popular: true,
    image: null,
    intro:
      "Hyundai i20, otomatik vitesli ekonomik segment arayanlar için dengeli bir seçimdir. Kompakt ölçüleri sayesinde şehir içinde park sorunu yaşatmaz.",
    goodFor: [
      "Şehir içi otomatik vites kullanımı",
      "Kısa dönem kiralama",
      "Yeni sürücüler",
    ],
    updatedAt: "2026-07-31",
  },
  {
    slug: "volkswagen-polo-kiralama",
    brand: "Volkswagen",
    model: "Polo",
    year: 2023,
    segment: "orta",
    transmission: "Otomatik",
    fuel: "Benzin",
    seats: 5,
    luggage: 2,
    engine: "1.0 TSI DSG",
    prices: { daily: 1800, weekly: 10800, monthly: 36000 },
    kmLimitDaily: 250,
    minAge: 23,
    minLicenseYears: 3,
    deposit: 7500,
    popular: true,
    image: null,
    intro:
      "Volkswagen Polo, sınıfının üzerinde sürüş konforu ve yalıtımı sunar. DSG şanzımanıyla uzun yolda yorulmadan seyahat etmek isteyenler için uygundur.",
    goodFor: [
      "Uzun yol ve şehirlerarası seyahat",
      "Konfor önceliği olan kullanıcılar",
      "Kurumsal kiralama",
    ],
    updatedAt: "2026-07-31",
  },
  {
    slug: "dacia-duster-kiralama",
    brand: "Dacia",
    model: "Duster",
    year: 2024,
    segment: "suv",
    transmission: "Manuel",
    fuel: "Dizel",
    seats: 5,
    luggage: 4,
    engine: "1.5 Blue dCi",
    prices: { daily: 2100, weekly: 12600, monthly: 42000 },
    kmLimitDaily: 300,
    minAge: 25,
    minLicenseYears: 3,
    deposit: 10000,
    popular: true,
    image: null,
    intro:
      "Dacia Duster, yüksek sürüş pozisyonu ve geniş bagajıyla hem şehir dışı hem de bagaj ihtiyacı yüksek seyahatler için uygun bir SUV'dur.",
    goodFor: [
      "Şehir dışı ve tatil seyahatleri",
      "Yüksek bagaj ihtiyacı",
      "Kalabalık aileler",
    ],
    updatedAt: "2026-07-31",
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export const popularVehicles = vehicles.filter((v) => v.popular);

/** En düşük günlük fiyat — "₺X'den başlayan fiyatlarla" metinleri için. */
export const minDailyPrice = Math.min(...vehicles.map((v) => v.prices.daily));

export function vehicleTitle(v: Vehicle): string {
  return `${v.brand} ${v.model}`;
}

/** Aynı segmentteki diğer araçlar (internal linking). */
export function similarVehicles(v: Vehicle, limit = 3): Vehicle[] {
  const sameSegment = vehicles.filter(
    (x) => x.slug !== v.slug && x.segment === v.segment
  );
  const rest = vehicles.filter(
    (x) => x.slug !== v.slug && x.segment !== v.segment
  );
  return [...sameSegment, ...rest].slice(0, limit);
}
