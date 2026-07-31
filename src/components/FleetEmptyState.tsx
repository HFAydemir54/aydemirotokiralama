import { Car } from "lucide-react";
import WhatsAppCta from "./WhatsAppCta";
import { SITE } from "@/lib/site";

/**
 * Filo boşken gösterilen durum.
 *
 * Uydurma araç veya stok fotoğraf göstermek yerine dürüst bir bekleme durumu
 * sunar ve ziyaretçiyi doğrudan iletişime yönlendirir. data/vehicles.ts'e
 * gerçek araç eklendiği anda bu bölüm yerini araç kartlarına bırakır.
 */
export default function FleetEmptyState({
  title = "Araç Filomuz Yakında",
  description = "Güncel araç listemizi ve fiyatlarımızı çok yakında burada yayınlayacağız. Bu arada ihtiyacınız olan aracı bize yazın — uygun seçenekleri ve fiyatı hemen paylaşalım.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary">
        <Car className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>

      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <WhatsAppCta
          label="filo_bos_durum"
          message="Merhaba, araç kiralamak istiyorum. Uygun araçlarınız ve fiyatlar hakkında bilgi alabilir miyim?"
          className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
        >
          WhatsApp&apos;tan Bilgi Al
        </WhatsAppCta>
        <a
          href={`tel:${SITE.phoneE164}`}
          className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent/40 hover:text-accent"
        >
          {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
