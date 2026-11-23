import type { Metadata } from "next";
import DurationPage from "@/components/DurationPage";
import { getDuration } from "@/data/durations";

// İçerik data/durations.ts'te; bu dosya yalnızca rotayı ve metadata'yı tanımlar.
const duration = getDuration("uzun-donem-arac-kiralama")!;

export const metadata: Metadata = {
  // Kısa marka eki: tam ek ("| Aydemir Oto Kiralama") başlığı 60 karakteri
  // aşırıp SERP'te kestiriyordu.
  title: { absolute: `${duration.title} | Aydemir` },
  description: duration.description,
  alternates: { canonical: "/uzun-donem-arac-kiralama" },
};

export default function Page() {
  return <DurationPage duration={duration} />;
}
