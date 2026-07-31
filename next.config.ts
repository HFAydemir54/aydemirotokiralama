import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF önce denenir, desteklenmeyen tarayıcılarda WebP'ye düşer.
    formats: ["image/avif", "image/webp"],
  },
  // URL formatı: slash'sız. Next varsayılan olarak /araclar/ → /araclar
  // yönlendirmesi yapar; canonical ve sitemap de slash'sız yazılmıştır.
  trailingSlash: false,
};

export default nextConfig;
