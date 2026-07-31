import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Briefcase,
  CalendarDays,
  Fuel,
  Gauge,
  IdCard,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import RelatedPosts from "@/components/RelatedPosts";
import VehicleCard, { VehicleImage } from "@/components/VehicleCard";
import WhatsAppCta from "@/components/WhatsAppCta";
import { breadcrumbSchema, faqSchema, vehicleSchema } from "@/lib/schema";
import { formatPrice } from "@/lib/site";
import { vehicleFaqs } from "@/data/faq";
import {
  getVehicle,
  similarVehicles,
  vehicleTitle,
  vehicles,
} from "@/data/vehicles";

// Filodaki tüm araçlar build sırasında statik üretilir.
export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

// Listede olmayan slug'lar 404 döner (uydurma URL'lerin indexlenmesini engeller).
export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/araclar/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return {};

  const name = vehicleTitle(vehicle);
  return {
    title: `${name} Kiralama | Günlük ${formatPrice(vehicle.prices.daily)}`,
    description: `${name} kiralama günlük ${formatPrice(
      vehicle.prices.daily
    )} fiyatla. ${vehicle.transmission}, ${vehicle.fuel}, ${
      vehicle.seats
    } kişilik. Pendik ve Sabiha Gökçen Havalimanı teslim, WhatsApp'tan hızlı rezervasyon.`,
    alternates: { canonical: `/araclar/${vehicle.slug}` },
  };
}

export default async function VehiclePage(props: PageProps<"/araclar/[slug]">) {
  const { slug } = await props.params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();

  const name = vehicleTitle(vehicle);
  const faqs = vehicleFaqs(name, vehicle.minAge, vehicle.deposit);
  const crumbs = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Araçlar", path: "/araclar" },
    { name: `${name} Kiralama`, path: `/araclar/${vehicle.slug}` },
  ];

  const waMessage = `Merhaba, ${name} kiralamak istiyorum. Müsaitlik ve fiyat bilgisi alabilir miyim?`;

  return (
    <>
      <JsonLd
        data={[vehicleSchema(vehicle), faqSchema(faqs), breadcrumbSchema(crumbs)]}
      />
      <div className="pt-20">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="bg-background py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <VehicleImage
              vehicle={vehicle}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {name} Kiralama
            </h1>
            <p className="mt-5 leading-relaxed text-muted">{vehicle.intro}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Spec icon={Gauge} label="Vites" value={vehicle.transmission} />
              <Spec icon={Fuel} label="Yakıt" value={vehicle.fuel} />
              <Spec icon={Users} label="Kapasite" value={`${vehicle.seats} kişi`} />
              <Spec
                icon={Briefcase}
                label="Bagaj"
                value={`${vehicle.luggage} valiz`}
              />
            </dl>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
                Kiralama Fiyatları
              </h2>
              <table className="mt-4 w-full text-sm">
                <tbody className="divide-y divide-border">
                  <PriceRow
                    label="Günlük"
                    value={formatPrice(vehicle.prices.daily)}
                    highlight
                  />
                  <PriceRow
                    label="Haftalık (7 gün)"
                    value={formatPrice(vehicle.prices.weekly)}
                    note={`günlük ${formatPrice(
                      Math.round(vehicle.prices.weekly / 7)
                    )}`}
                  />
                  <PriceRow
                    label="Aylık (30 gün)"
                    value={formatPrice(vehicle.prices.monthly)}
                    note={`günlük ${formatPrice(
                      Math.round(vehicle.prices.monthly / 30)
                    )}`}
                  />
                </tbody>
              </table>
              <p className="mt-3 text-xs text-muted">
                Fiyatlara sigorta ve bakım dahildir. Günlük {vehicle.kmLimitDaily} km
                kilometre limiti uygulanır.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCta
                label={`arac_detay_${vehicle.slug}`}
                message={waMessage}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#20bd5a]"
              >
                WhatsApp&apos;tan Rezervasyon Yap
              </WhatsAppCta>
              <Link
                href="/kiralama-kosullari"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-accent/40 hover:text-accent"
              >
                Kiralama Koşulları
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Koşullar ve uygunluk */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              {name} Kiralama Koşulları
            </h2>
            <ul className="mt-6 space-y-4">
              <Condition icon={CalendarDays} label="Minimum yaş">
                {vehicle.minAge} yaş
              </Condition>
              <Condition icon={IdCard} label="Ehliyet süresi">
                En az {vehicle.minLicenseYears} yıllık sürücü belgesi
              </Condition>
              <Condition icon={Wallet} label="Depozito">
                {formatPrice(vehicle.deposit)} (araç sorunsuz teslim edildiğinde iade
                edilir)
              </Condition>
              <Condition icon={Gauge} label="Kilometre limiti">
                Günlük {vehicle.kmLimitDaily} km
              </Condition>
              <Condition icon={ShieldCheck} label="Sigorta">
                Trafik sigortası ve kasko dahildir
              </Condition>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Detaylı koşullar için{" "}
              <Link
                href="/kiralama-kosullari"
                className="font-medium text-accent hover:underline"
              >
                kiralama koşulları
              </Link>{" "}
              sayfamızı inceleyebilirsiniz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              {name} Kimler İçin Uygun?
            </h2>
            <ul className="mt-6 space-y-3">
              {vehicle.goodFor.map((g) => (
                <li
                  key={g}
                  className="rounded-xl border border-border bg-background px-5 py-4 text-sm text-primary-light"
                >
                  {g}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-background p-6">
              <h3 className="font-semibold text-primary">Teslim noktaları</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {name} aracını{" "}
                <Link href="/pendik-arac-kiralama" className="text-accent hover:underline">
                  Pendik&apos;teki ofisimizden
                </Link>
                , adresinizden veya{" "}
                <Link
                  href="/sabiha-gokcen-arac-kiralama"
                  className="text-accent hover:underline"
                >
                  Sabiha Gökçen Havalimanı&apos;ndan
                </Link>{" "}
                teslim alabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={faqs}
        title={`${name} Kiralama Hakkında Sık Sorulanlar`}
        className="bg-background"
      />

      <RelatedPosts
        slugs={[
          "pendik-arac-kiralama-fiyatlari",
          "arac-kiralarken-dikkat-edilmesi-gerekenler",
          "arac-kiralama-yas-siniri",
        ]}
        className="bg-surface"
      />

      {/* Benzer araçlar — internal linking */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary">
            Benzer Araçlar
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similarVehicles(vehicle).map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <dt className="flex items-center gap-1.5 text-xs text-muted">
        <Icon className="h-3.5 w-3.5 text-accent" />
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-primary">{value}</dd>
    </div>
  );
}

function PriceRow({
  label,
  value,
  note,
  highlight,
}: {
  label: string;
  value: string;
  note?: string;
  highlight?: boolean;
}) {
  return (
    <tr>
      <th scope="row" className="py-3 text-left font-medium text-muted">
        {label}
        {note && <span className="ml-2 text-xs opacity-70">({note})</span>}
      </th>
      <td
        className={`py-3 text-right font-bold ${
          highlight ? "text-xl text-accent" : "text-primary"
        }`}
      >
        {value}
      </td>
    </tr>
  );
}

function Condition({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block text-xs text-muted">{label}</span>
        <span className="text-sm font-medium text-primary">{children}</span>
      </span>
    </li>
  );
}
