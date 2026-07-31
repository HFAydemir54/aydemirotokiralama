/**
 * ARAÇ FİLOSU — MERKEZİ VERİ KAYNAĞI
 * ============================================================================
 * Sitedeki tüm araç bilgisi buradan gelir. Dizi boşaltılırsa araç bölümleri
 * otomatik olarak "Araç Filomuz Yakında" durumuna döner.
 *
 * MEVCUT DURUM: 4 araç girili, fotoğraflar henüz yok (placeholder gösteriliyor).
 * Girilmemiş alanlar: bagaj hacmi, haftalık/aylık fiyat — sitede hiç
 * görünmüyorlar, uydurma değer yazılmadı.
 *
 * ARAÇ EKLEMEK İÇİN: aşağıdaki diziye bir nesne ekleyin. Başka hiçbir yeri
 * değiştirmeniz gerekmez — ana sayfa filo bölümü, /araclar listesi, araç
 * detay sayfası (/araclar/<slug>), sitemap ve schema.org çıktısı hep buradan
 * beslenir ve otomatik oluşur.
 *
 * Zorunlu alanlar: slug, brand, model, available
 * Diğer tüm alanlar opsiyoneldir ve YALNIZCA doldurulduklarında gösterilir:
 *   - fiyat alanları boş/null → "Fiyat için iletişime geçin"
 *   - fiyat dolu            → "₺X / Gün"
 *   - transmission/fuel/seats boş → o özellik kartta hiç görünmez
 *   - image boş             → nötr placeholder (asla stok fotoğraf kullanılmaz)
 *
 * Örnek (kopyalayıp doldurun):
 *
 *   {
 *     slug: "renault-clio-kiralama",   // URL: /araclar/renault-clio-kiralama
 *     brand: "Renault",
 *     model: "Clio",
 *     year: 2023,
 *     image: "/araclar/renault-clio.jpg",   // public/araclar/ altına koyun
 *     transmission: "Manuel",
 *     fuel: "Dizel",
 *     seats: 5,
 *     luggage: 2,
 *     dailyPrice: null,      // fiyat kesinleşince sayı yazın
 *     weeklyPrice: null,
 *     monthlyPrice: null,
 *     available: true,
 *     updatedAt: "2026-08-01",
 *   }
 * ============================================================================
 */

export type Vehicle = {
  /** URL segmenti — /araclar/<slug> */
  slug: string;
  brand: string;
  model: string;
  year?: number;
  /** public/ altındaki yol. Boşsa placeholder gösterilir. */
  image?: string;
  /** Fiyatlar: null veya tanımsızsa "Fiyat için iletişime geçin" gösterilir. */
  dailyPrice?: number | null;
  weeklyPrice?: number | null;
  monthlyPrice?: number | null;
  transmission?: string;
  fuel?: string;
  /** Motor hacmi, örn. "1.0" */
  engine?: string;
  seats?: number;
  luggage?: number;
  /** false ise sitede hiç listelenmez. */
  available: boolean;
  /** Ana sayfada öne çıkarılsın mı (boşsa hayır). */
  featured?: boolean;
  /** Araç sayfasındaki serbest tanıtım metni (opsiyonel). */
  intro?: string;
  updatedAt?: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "renault-clio-kiralama",
    brand: "Renault",
    model: "Clio",
    year: 2024,
    transmission: "Otomatik",
    fuel: "Benzin",
    engine: "1.0",
    seats: 5,
    dailyPrice: 2500,
    // Haftalık ve aylık fiyatlar araca ve süreye göre değişiyor →
    // null bırakıldı, sitede "Fiyat için iletişime geçin" gösterilir.
    weeklyPrice: null,
    monthlyPrice: null,
    available: true,
    featured: true,
    updatedAt: "2026-08-01",
  },
  {
    slug: "fiat-egea-kiralama",
    brand: "Fiat",
    model: "Egea",
    year: 2022,
    transmission: "Otomatik",
    fuel: "Dizel",
    engine: "1.6",
    seats: 5,
    dailyPrice: 2500,
    weeklyPrice: null,
    monthlyPrice: null,
    available: true,
    featured: true,
    updatedAt: "2026-08-01",
  },
  {
    slug: "renault-taliant-kiralama",
    brand: "Renault",
    model: "Taliant",
    year: 2022,
    transmission: "Otomatik",
    fuel: "Benzin",
    engine: "1.0",
    seats: 5,
    dailyPrice: 2500,
    weeklyPrice: null,
    monthlyPrice: null,
    available: true,
    featured: true,
    updatedAt: "2026-08-01",
  },
  {
    slug: "peugeot-301-kiralama",
    brand: "Peugeot",
    model: "301",
    year: 2018,
    transmission: "Manuel",
    fuel: "Dizel",
    engine: "1.5",
    seats: 5,
    dailyPrice: 2000,
    weeklyPrice: null,
    monthlyPrice: null,
    available: true,
    featured: true,
    updatedAt: "2026-08-01",
  },
];

/** Sitede gösterilecek araçlar. */
export const availableVehicles = vehicles.filter((v) => v.available);

/** Ana sayfada gösterilenler — featured yoksa ilk 6 araç. */
export const featuredVehicles = availableVehicles.some((v) => v.featured)
  ? availableVehicles.filter((v) => v.featured)
  : availableVehicles.slice(0, 6);

/** Filo boş mu — boş durum bileşenlerini tetikler. */
export const hasVehicles = availableVehicles.length > 0;

export function getVehicle(slug: string): Vehicle | undefined {
  return availableVehicles.find((v) => v.slug === slug);
}

export function vehicleTitle(v: Vehicle): string {
  return `${v.brand} ${v.model}`;
}

/** En düşük günlük fiyat; hiç fiyat girilmemişse null. */
export function minDailyPrice(): number | null {
  const prices = availableVehicles
    .map((v) => v.dailyPrice)
    .filter((p): p is number => typeof p === "number");
  return prices.length > 0 ? Math.min(...prices) : null;
}

/** Aynı markadan başlayarak diğer araçlar (internal linking). */
export function similarVehicles(v: Vehicle, limit = 3): Vehicle[] {
  const sameBrand = availableVehicles.filter(
    (x) => x.slug !== v.slug && x.brand === v.brand
  );
  const rest = availableVehicles.filter(
    (x) => x.slug !== v.slug && x.brand !== v.brand
  );
  return [...sameBrand, ...rest].slice(0, limit);
}
