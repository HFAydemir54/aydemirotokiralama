import type { Metadata } from "next";
import DurationPage from "@/components/DurationPage";
import { getDuration } from "@/data/durations";
import { pageMetadata } from "@/lib/seo";

// İçerik data/durations.ts'te; bu dosya yalnızca rotayı ve metadata'yı tanımlar.
const duration = getDuration("aylik-arac-kiralama")!;

export const metadata: Metadata = pageMetadata({
  title: `${duration.title} | Aydemir Oto Kiralama`,
  description: duration.description,
  path: "/aylik-arac-kiralama",
});

export default function Page() {
  return <DurationPage duration={duration} />;
}
