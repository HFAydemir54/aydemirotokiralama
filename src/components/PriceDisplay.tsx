import WhatsAppCta from "./WhatsAppCta";

/**
 * Fiyat gösterimi tek noktadan.
 *
 * value null / undefined  → "Fiyat için iletişime geçin" + WhatsApp bağlantısı
 * value sayı              → "₺X / Gün"
 *
 * Böylece fiyat girilmemiş bir araç asla uydurma tutarla gösterilmez;
 * fiyat girildiği anda da hiçbir kod değişikliği gerekmeden görünür.
 */
export default function PriceDisplay({
  value,
  unit = "Gün",
  waLabel,
  waMessage,
  size = "md",
}: {
  value?: number | null;
  unit?: string;
  waLabel: string;
  waMessage: string;
  size?: "sm" | "md";
}) {
  if (typeof value === "number") {
    return (
      <span>
        <span
          className={
            size === "sm"
              ? "font-semibold text-primary"
              : "text-2xl font-bold text-accent"
          }
        >
          ₺{value.toLocaleString("tr-TR")}
        </span>
        <span className="text-sm text-muted"> / {unit}</span>
      </span>
    );
  }

  return (
    <WhatsAppCta
      label={waLabel}
      message={waMessage}
      className={
        size === "sm"
          ? "text-sm font-medium text-accent hover:underline"
          : "font-semibold text-accent hover:underline"
      }
    >
      Fiyat için iletişime geçin
    </WhatsAppCta>
  );
}
