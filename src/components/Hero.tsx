import Image from "next/image";
import { Clock, MapPin, Plane, ShieldCheck } from "lucide-react";
import ReservationForm from "./ReservationForm";
import { SHOW_PRICES, formatPrice } from "@/lib/site";
import { minDailyPrice, vehicles, vehicleTitle } from "@/data/vehicles";

/**
 * Server component — LCP metni (H1) hydration beklemeden boyanır.
 * Daha önce framer-motion `initial={{ opacity: 0 }}` kullanıldığı için
 * başlık, JS yüklenene kadar görünmüyordu; bu LCP'yi doğrudan bozuyordu.
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
  const options = vehicles.map((v) => ({
    slug: v.slug,
    label: vehicleTitle(v),
  }));

  return (
    <section id="rezervasyon" className="relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          preload
          quality={70}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-primary/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
          <Clock className="h-4 w-4 text-accent" />
          7/24 Açık — Sabiha Gökçen&apos;e Araç Teslimatı
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
          {title}
          {highlight && <span className="block text-accent">{highlight}</span>}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          {description}
        </p>

        <p className="mt-4 text-sm text-white/60">
          {SHOW_PRICES
            ? `Günlük kiralama ${formatPrice(minDailyPrice)}'den başlayan fiyatlarla.`
            : "Tarihlerinizi girin, uygun araçları ve fiyatı dakikalar içinde paylaşalım."}
        </p>

        <div className="mt-8 max-w-4xl">
          <ReservationForm options={options} />
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {[
            { icon: Plane, label: "Sabiha Gökçen teslimat" },
            { icon: ShieldCheck, label: "Sigortalı araçlar" },
            { icon: Clock, label: "7/24 teslim ve iade" },
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
