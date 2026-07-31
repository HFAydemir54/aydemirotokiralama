import Image from "next/image";
import Link from "next/link";
import { Car, Fuel, Gauge, Users } from "lucide-react";
import WhatsAppCta from "./WhatsAppCta";
import { formatPrice } from "@/lib/site";
import { vehicleTitle, type Vehicle } from "@/data/vehicles";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const name = vehicleTitle(vehicle);
  const href = `/araclar/${vehicle.slug}`;

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
          <span className="text-2xl font-bold text-accent">
            {formatPrice(vehicle.prices.daily)}
          </span>
          <span className="text-sm text-muted"> / gün</span>
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          <Spec icon={Gauge}>{vehicle.transmission}</Spec>
          <Spec icon={Fuel}>{vehicle.fuel}</Spec>
          <Spec icon={Users}>{vehicle.seats} Kişilik</Spec>
        </ul>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href={href}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Hemen Kirala
          </Link>
          <WhatsAppCta
            label={`arac_kart_${vehicle.slug}`}
            message={`Merhaba, ${name} kiralamak istiyorum. Müsaitlik ve fiyat bilgisi alabilir miyim?`}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-[#25D366] px-4 py-2.5 text-sm font-semibold text-[#128C7E] transition-colors hover:bg-[#25D366]/10"
          >
            WhatsApp
          </WhatsAppCta>
        </div>
      </div>
    </article>
  );
}

function Spec({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-1.5">
      <Icon className="h-4 w-4 text-accent" />
      {children}
    </li>
  );
}

/**
 * Gerçek araç fotoğrafı yoksa placeholder gösterilir.
 * Uydurma/stok fotoğraf koymak yerine, fotoğraf eklenene kadar
 * bilinçli olarak nötr bir görsel alanı kullanıyoruz.
 * Fotoğraf eklemek için: public/araclar/<slug>.jpg → data/vehicles.ts `image`
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
      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/5 to-primary/10 text-muted">
        <Car className="h-10 w-10 opacity-40" />
        <span className="text-xs">{vehicleTitle(vehicle)}</span>
        <span className="text-[10px] opacity-60">Fotoğraf yakında</span>
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
