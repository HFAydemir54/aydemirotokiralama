import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { allFaqs } from "@/data/faq";
import UpdatedNote from "@/components/UpdatedNote";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { PAGE_UPDATED, pageMetadata, withBrand } from "@/lib/seo";

const PATH = "/sss";
const UPDATED = PAGE_UPDATED[PATH];
const DESCRIPTION =
  "Araç kiralama yaş sınırı, depozito, ehliyet süresi, gerekli belgeler, kilometre limiti ve havalimanı teslimi hakkında merak edilen her şey.";

export const metadata: Metadata = pageMetadata({
  title: withBrand("Araç Kiralama Sık Sorulan Sorular"),
  description: DESCRIPTION,
  path: PATH,
});

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Sık Sorulan Sorular", path: "/sss" },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            name: "Araç Kiralama Sık Sorulan Sorular",
            description: DESCRIPTION,
            dateModified: UPDATED,
          }),
          faqSchema(allFaqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-background pb-4 pt-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Sık Sorulan Sorular
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            Araç kiralarken en çok sorulan soruları ve cevaplarını bir araya
            getirdik. Aradığınız cevabı bulamazsanız WhatsApp&apos;tan yazın,
            hemen dönelim.
          </p>
        </div>
      </section>

      <FaqSection faqs={allFaqs} title="Tüm Sorular" className="bg-background" />
      <UpdatedNote date={UPDATED} />
    </>
  );
}
