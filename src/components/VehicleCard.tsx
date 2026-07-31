import Image from "next/image";
import Link from "next/link";
import { Car } from "lucide-react";
import PriceDisplay from "./PriceDisplay";
import VehicleSpecs from "./VehicleSpecs";
import WhatsAppCta from "./WhatsAppCta";
import { vehicleTitle, type Vehicle } from "@/data/vehicles";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const name = vehicleTitle(vehicle);
  const href = `/araclar/${vehicle.slug}`;
  const waMessage = `Merhaba, ${name} kiralamak istiyorum. Müsaitlik ve fiyat bilgisi alabilir miyim?`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-primary/5">
      <Link href={href} className="block">
        <VehicleImage vehicle={vehicle} />
      </Link>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-primary">
          <Link href={href} className="transition-colors hover:text-accent">
            {name}
          </Link>
        </h3>

        <p className="mt-1">
          <PriceDisplay
            value={vehicle.dailyPrice}
            waLabel={`fiyat_kart_${vehicle.slug}`}
            waMessage={waMessage}
          />
        </p>

        <VehicleSpecs vehicle={vehicle} className="mt-4" />

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href={href}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            İncele
          </Link>
          <WhatsAppCta
            label={`arac_kart_${vehicle.slug}`}
            message={waMessage}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-[#25D366] px-4 py-2.5 text-sm font-semibold text-[#128C7E] transition-colors hover:bg-[#25D366]/10"
          >
            WhatsApp
          </WhatsAppCta>
        </div>
      </div>
    </article>
  );
}

/**
 * Fotoğrafı olmayan araçta nötr placeholder gösterilir.
 * İnternetten alınmış stok görsel KULLANILMAZ — aracın gerçek fotoğrafı
 * public/araclar/ altına konup data/vehicles.ts'teki `image` alanına yazılır.
 */
export function VehicleImage({
  vehicle,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  vehicle: Vehicle;
  sizes?: string;
}) {
  if (!vehicle.image) {
    return (
      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 border-b border-border bg-gradient-to-br from-primary/[0.04] to-primary/[0.09]">
        <Car className="h-11 w-11 text-primary/25" />
        <span className="text-sm font-semibold text-primary/70">
          {vehicleTitle(vehicle)}
        </span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-muted">
          Fotoğraf yakında
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
      <Image
        src={vehicle.image}
        alt={`${vehicleTitle(vehicle)} kiralama`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
