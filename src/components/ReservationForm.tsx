"use client";

import { useState } from "react";
import { ArrowRight, CalendarDays, Car } from "lucide-react";
import { track } from "@/lib/analytics";
import { waLink } from "@/lib/site";

type Option = { slug: string; label: string };

/**
 * Rezervasyon formu — backend yoktur.
 * Form, girilen bilgileri ön-doldurulmuş bir WhatsApp mesajına çevirir.
 * Amaç: gelen talebin "bilgi almak istiyorum" yerine tarih ve araç içermesi.
 */
export default function ReservationForm({ options }: { options: Option[] }) {
  const today = new Date().toISOString().slice(0, 10);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicle, setVehicle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const parts = ["Merhaba, araç kiralamak istiyorum."];
    if (pickup) parts.push(`Alış: ${formatDate(pickup)}`);
    if (dropoff) parts.push(`Teslim: ${formatDate(dropoff)}`);
    parts.push(`Araç: ${vehicle || "Uygun olan aracınız"}`);
    parts.push("Uygun araçları ve fiyatı paylaşabilir misiniz?");

    track("reservation_form_submit", {
      pickup_date: pickup,
      dropoff_date: dropoff,
      vehicle: vehicle || "belirtilmedi",
    });

    window.open(waLink(parts.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-6"
      aria-label="Araç rezervasyon formu"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Alış Tarihi" htmlFor="pickup" icon={CalendarDays}>
          <input
            id="pickup"
            type="date"
            min={today}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/95 px-3 py-2.5 text-sm text-primary outline-none focus:border-accent"
          />
        </Field>

        <Field label="Teslim Tarihi" htmlFor="dropoff" icon={CalendarDays}>
          <input
            id="dropoff"
            type="date"
            min={pickup || today}
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/95 px-3 py-2.5 text-sm text-primary outline-none focus:border-accent"
          />
        </Field>

        <Field label="Araç" htmlFor="vehicle" icon={Car}>
          <select
            id="vehicle"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/95 px-3 py-2.5 text-sm text-primary outline-none focus:border-accent"
          >
            <option value="">Fark etmez</option>
            {options.map((o) => (
              <option key={o.slug} value={o.label}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
      >
        Uygun Araçları Gör
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-3 text-center text-xs text-white/60">
        Bilgileriniz WhatsApp mesajına aktarılır, saniyeler içinde dönüş yapıyoruz.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-white/80"
      >
        <Icon className="h-3.5 w-3.5 text-accent" />
        {label}
      </label>
      {children}
    </div>
  );
}

function formatDate(value: string): string {
  const [y, m, d] = value.split("-");
  return `${d}.${m}.${y}`;
}
