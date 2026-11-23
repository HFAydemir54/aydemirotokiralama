import type { Metadata } from "next";
import DurationPage from "@/components/DurationPage";
import { getDuration } from "@/data/durations";
import { pageMetadata } from "@/lib/seo";

// İçerik data/durations.ts'te; bu dosya yalnızca rotayı ve metadata'yı tanımlar.
const duration = getDuration("uzun-donem-arac-kiralama")!;

export const metadata: Metadata = pageMetadata({
  // Kısa marka eki: tam ek başlığı 60 karakteri aşırıp SERP'te kestiriyordu.
  title: `${duration.title} | Aydemir`,
  description: duration.description,
  path: "/uzun-donem-arac-kiralama",
});

export default function Page() {
  return <DurationPage duration={duration} />;
}
