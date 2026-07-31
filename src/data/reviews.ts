/**
 * GERÇEK Google yorumları.
 *
 * ⚠️ Bu dizi bilerek BOŞ bırakılmıştır. Buraya yalnızca Google Business
 * Profile'da gerçekten yayınlanmış yorumları, yazan kişinin adı ve tarihiyle
 * birlikte ekleyin. Uydurma yorum eklemek:
 *   - Google Yorum Politikası ihlalidir,
 *   - aggregateRating schema'sı ile birleştiğinde manuel aksiyon riski taşır,
 *   - tespit edildiğinde işletme profilinize zarar verir.
 *
 * Dizi boş olduğu sürece sitede yorum bölümü yerine "Google'da değerlendirin"
 * çağrısı gösterilir (bkz. components/Reviews.tsx).
 *
 * Yorumları ekledikten sonra `ratingSummary` alanını da GBP'deki GERÇEK
 * ortalama puan ve toplam yorum sayısı ile doldurun; ancak o zaman
 * aggregateRating schema'sını açabiliriz.
 */

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** ISO tarih: "2026-06-14" */
  date: string;
  text: string;
};

export const reviews: Review[] = [];

export const ratingSummary: { value: number; count: number } | null = null;
