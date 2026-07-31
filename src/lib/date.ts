/** ISO tarihi "1 Ağustos 2026" biçiminde yazar. */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
