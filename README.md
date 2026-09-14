# Aydemir Oto Kiralama

Pendik'teki Aydemir Oto Kiralama'nın web sitesi: https://www.aydemirotokiralama.com

Next.js 16 (App Router), React 19, TypeScript ve Tailwind CSS v4. Veritabanı veya backend yoktur; tüm içerik `src/data/` altındaki TypeScript dosyalarından gelir. Rezervasyon formu, girilen bilgileri hazır doldurulmuş bir WhatsApp mesajına çevirir.

> Next.js 16'da API'ler eskisinden farklıdır. Kod yazmadan önce `node_modules/next/dist/docs/` altındaki ilgili rehbere bakın (bkz. `AGENTS.md`).

## Geliştirme

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production derlemesi
npm run lint
```

## Yayına alma

`main` dalına yapılan her push Vercel'de otomatik production yayını başlatır.

Remote SSH adresiyle tanımlı. Bilgisayarda SSH anahtarı yoksa push'u GitHub CLI oturumuyla HTTPS üzerinden yapın:

```bash
git remote set-url origin https://github.com/HFAydemir54/aydemirotokiralama.git
gh auth setup-git
```

## İçerik nerede güncellenir?

| Ne | Dosya |
|---|---|
| İşletme adı, adres, telefon, WhatsApp, konum, Google linkleri | `src/lib/site.ts` |
| Araçlar ve fiyatlar | `src/data/vehicles.ts` |
| Lokasyon sayfaları (`/pendik-arac-kiralama` vb.) | `src/data/locations.ts` |
| Süre sayfaları (günlük / haftalık / aylık) | `src/data/durations.ts` |
| Blog yazıları | `src/data/posts.ts` |
| Sık sorulan sorular | `src/data/faq.ts` |
| Google yorumları | `src/data/reviews.ts` |

### Araç eklemek

`src/data/vehicles.ts` içindeki diziye bir nesne ekleyin. Ana sayfa, `/araclar`, araç detay sayfası, sitemap ve schema.org çıktısı otomatik güncellenir. Dosyanın başındaki açıklamada örnek bir kayıt var.

- Fiyat `null` bırakılırsa sitede "Fiyat için iletişime geçin" yazar.
- Fotoğraf yoksa nötr bir placeholder gösterilir. Stok fotoğraf kullanılmaz.
- `available: false` olan araç sitede listelenmez.

### Önemli kurallar

- **İşletme bilgileri tek kaynaktan gelir.** `site.ts` Google Business Profile ile birebir aynı olmalıdır.
- **Uydurma bilgi yazılmaz.** Kesinleşmemiş fiyat, özellik veya koşul sitede gösterilmez.
- **SSS metinleri schema'ya da gider.** `faq.ts`'deki cevaplar hem sayfada hem Google'ın okuduğu FAQ verisinde kullanılır; kiralama koşulları değişirse burayı güncelleyin.
- **Elle yazılmış fiyat metinleri.** "₺2.000'den başlayan" ifadesi `src/app/layout.tsx`, `src/data/faq.ts` ve `src/data/locations.ts` içinde elle yazılıdır; en düşük fiyat değişirse bu üç dosyayı da güncelleyin. `/arac-kiralama` sayfası fiyatı `vehicles.ts`'ten otomatik alır.
- **Sitemap tarihleri** veri dosyalarındaki `updatedAt` alanından gelir. İçeriği değiştirdiğinizde bu tarihi de güncelleyin.

## Görseller

Vercel görsel optimizasyonu kota nedeniyle kapalıdır (`next.config.ts` → `images.unoptimized`). `public/` altına koyduğunuz görselleri önceden küçültün: logolar yaklaşık 300px, hero görseli 1920px (mobil sürümü 900px).
