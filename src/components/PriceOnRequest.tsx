import WhatsAppCta from "./WhatsAppCta";

/**
 * Fiyat gösterimi kapalıyken (lib/site.ts → SHOW_PRICES) fiyatın olması
 * gereken yerde gösterilen çağrı. Boş bırakmak yerine dönüşüme yönlendirir.
 */
export default function PriceOnRequest({
  label,
  message,
  size = "md",
}: {
  label: string;
  message: string;
  size?: "sm" | "md";
}) {
  return (
    <WhatsAppCta
      label={label}
      message={message}
      className={
        size === "sm"
          ? "font-semibold text-accent hover:underline"
          : "inline-flex items-center gap-1.5 text-lg font-bold text-accent hover:underline"
      }
    >
      WhatsApp&apos;tan fiyat alın
    </WhatsAppCta>
  );
}
