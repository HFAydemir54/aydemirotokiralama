import { Clock, MapPin, Plane, ShieldCheck } from "lucide-react";
import ReservationForm from "./ReservationForm";
import WhatsAppCta from "./WhatsAppCta";

/**
 * Server component — LCP metni (H1) hydration beklemeden boyanır.
 * Daha önce framer-motion `initial={{ opacity: 0 }}` kullanıldığı için başlık
 * JS yüklenene kadar görünmüyordu; bu LCP'yi doğrudan bozuyordu.
 *
 * Hero'da fiyat veya araç modeli gösterilmez — bu bilgiler kesinleşmeden
 * hiçbir sayısal iddiada bulunulmuyor.
 */
export default function Hero({
  title,
  highlight,
  description,
}: {
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section id="rezervasyon" className="relative overflow-hidden pt-20">
      {/*
        Vercel görsel optimizasyonu kapalı (kota) olduğu için responsive
        kaynak seçimini <picture> ile kendimiz yapıyoruz: mobilde 900px/40 KB,
        masaüstünde 1920px/192 KB. next/image bu modda srcSet üretmiyordu.
        fetchPriority="high" LCP görselini erken sıraya alır.
      */}
      <picture className="absolute inset-0">
        <source media="(max-width: 768px)" srcSet="/hero-bg-mobile.jpg" />
        <img
          src="/hero-bg.jpg"
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      <div className="absolute inset-0 bg-primary/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
          <Clock className="h-4 w-4 text-accent" />
          7/24 Açık — Sabiha Gökçen&apos;e 15 Dakika
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
          {title}
          {highlight && <span className="block text-accent">{highlight}</span>}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          {description}
        </p>

        <div className="mt-8 max-w-4xl">
          <ReservationForm />
        </div>

        <div className="mt-6">
          <WhatsAppCta
            label="hero_bilgi_al"
            message="Merhaba, araç kiralama hakkında bilgi almak istiyorum."
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            WhatsApp&apos;tan Bilgi Al
          </WhatsAppCta>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {[
            { icon: Plane, label: "Sabiha Gökçen'e araç getiriyoruz" },
            { icon: ShieldCheck, label: "Depozito yok" },
            { icon: Clock, label: "7/24 açık" },
            { icon: MapPin, label: "Pendik merkez ofis" },
          ].map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-white/70">
              <Icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
