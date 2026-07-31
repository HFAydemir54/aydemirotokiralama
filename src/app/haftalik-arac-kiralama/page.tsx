import type { Metadata } from "next";
import DurationPage from "@/components/DurationPage";
import { getDuration } from "@/data/durations";

// İçerik data/durations.ts'te; bu dosya yalnızca rotayı ve metadata'yı tanımlar.
const duration = getDuration("haftalik-arac-kiralama")!;

export const metadata: Metadata = {
  title: { absolute: `${duration.title} | Aydemir Oto Kiralama` },
  description: duration.description,
  alternates: { canonical: "/haftalik-arac-kiralama" },
};

export default function Page() {
  return <DurationPage duration={duration} />;
}
