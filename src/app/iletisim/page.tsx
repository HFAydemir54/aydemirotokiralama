import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import LocationsGrid from "@/components/LocationsGrid";
import { breadcrumbSchema } from "@/lib/schema";
import { ADDRESS_ONE_LINE, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `Aydemir Oto Kiralama iletişim bilgileri. ${ADDRESS_ONE_LINE} · ${SITE.phoneDisplay} · 7/24 açık.`,
  alternates: { canonical: "/iletisim" },
};

const crumbs = [
  { name: "Ana Sayfa", path: "/" },
  { name: "İletişim", path: "/iletisim" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            İletişim
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            Ofisimiz Pendik Çamçeşme&apos;de, Katip Çelebi Caddesi üzerindedir ve
            7/24 açıktır. Araç teslimlerimiz buradan yapılır; Sabiha Gökçen
            Havalimanı&apos;na ise araç getiriyoruz. Kiralama talepleriniz için
            telefonla arayabilir veya WhatsApp&apos;tan yazabilirsiniz.
          </p>
        </div>
      </section>

      <Contact />
      <LocationsGrid
        title="Hizmet Verdiğimiz Bölgeler"
        description="Aşağıdaki bölgelerden misafirlerimiz araçlarını Pendik Çamçeşme'deki ofisimizden teslim alıyor."
      />
    </>
  );
}
