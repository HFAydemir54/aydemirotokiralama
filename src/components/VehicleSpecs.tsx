import { Briefcase, CalendarDays, Fuel, Gauge, Users } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

/**
 * Araç özellikleri — YALNIZCA dolu olan alanlar gösterilir.
 * Veri girilmemiş bir özellik (örn. bagaj) hiç render edilmez; boş etiket
 * veya "-" gibi doldurma değerleri kullanılmaz.
 */
export default function VehicleSpecs({
  vehicle,
  className = "",
}: {
  vehicle: Vehicle;
  className?: string;
}) {
  const specs = [
    vehicle.year && { icon: CalendarDays, text: `${vehicle.year} Model` },
    vehicle.transmission && { icon: Gauge, text: vehicle.transmission },
    vehicle.fuel && {
      icon: Fuel,
      text: vehicle.engine ? `${vehicle.fuel} · ${vehicle.engine}` : vehicle.fuel,
    },
    vehicle.seats && { icon: Users, text: `${vehicle.seats} Kişilik` },
    vehicle.luggage && { icon: Briefcase, text: `${vehicle.luggage} Valiz` },
  ].filter(Boolean) as { icon: React.ElementType; text: string }[];

  if (specs.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted ${className}`}>
      {specs.map((s) => (
        <li key={s.text} className="flex items-center gap-1.5">
          <s.icon className="h-4 w-4 text-accent" />
          {s.text}
        </li>
      ))}
    </ul>
  );
}
