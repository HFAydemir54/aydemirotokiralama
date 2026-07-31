import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /*
     * Vercel'in görsel optimizasyon kotası dolduğu için /_next/image uç noktası
     * 402 (Payment required) dönüyordu ve SİTEDEKİ TÜM GÖRSELLER kırılıyordu.
     * unoptimized ile dosyalar public/ altından doğrudan servis edilir; kota
     * tüketilmez ve maliyet oluşmaz.
     *
     * Karşılığında otomatik yeniden boyutlandırma ve WebP/AVIF dönüşümü yok —
     * bu yüzden public/ altındaki görseller gösterim boyutuna göre önceden
     * küçültülmüş olmalıdır (logolar 300px, hero 1920px).
     *
     * Vercel planı yükseltilir veya kota yenilenirse bu satır kaldırılabilir.
     */
    unoptimized: true,
  },
  // URL formatı: slash'sız. Next varsayılan olarak /araclar/ → /araclar
  // yönlendirmesi yapar; canonical ve sitemap de slash'sız yazılmıştır.
  trailingSlash: false,
};

export default nextConfig;
