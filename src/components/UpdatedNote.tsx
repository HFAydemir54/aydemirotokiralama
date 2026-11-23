import { formatDate } from "@/lib/date";

/**
 * Sayfanın son güncelleme tarihi — görünür <time>. Aynı tarih sayfanın
 * WebPage schema'sındaki dateModified ile birebir aynı olmalıdır (Google:
 * tarih hem yapılandırılmış veride hem sayfada görünmeli).
 */
export default function UpdatedNote({
  date,
  className = "bg-background",
}: {
  date: string;
  className?: string;
}) {
  return (
    <p className={`py-6 text-center text-xs text-muted ${className}`}>
      Bu sayfa en son <time dateTime={date}>{formatDate(date)}</time>{" "}
      tarihinde güncellendi.
    </p>
  );
}
