import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import FleetEmptyState from "@/components/FleetEmptyState";
import VehicleCard from "@/components/VehicleCard";
import SabihaSection from "@/components/SabihaSection";
import RelatedPosts from "@/components/RelatedPosts";
import Reviews from "@/components/Reviews";
import LocationsGrid from "@/components/LocationsGrid";
import FaqSection from "@/components/FaqSection";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { homeFaqs } from "@/data/faq";
import { featuredVehicles, hasVehicles } from "@/data/vehicles";
import { faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero
        title="Pendik Araç Kiralama"
        description="Pendik merkez ofisimizden ve Sabiha Gökçen Havalimanı'ndan 7/24 araç teslimi yapıyoruz. Tarihlerinizi yazın, size uygun aracı ve fiyatı hemen paylaşalım."
      />

      {/* Araç filosu — veri girilene kadar boş durum gösterilir */}
      <section id="araclar" className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Filomuz
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Araç Filomuz
            </h2>
          </div>

          {hasVehicles ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredVehicles.map((v) => (
                  <VehicleCard key={v.slug} vehicle={v} />
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link
                  href="/araclar"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-accent/40 hover:text-accent"
                >
                  Tüm Araçları Gör
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </>
          ) : (
            <FleetEmptyState />
          )}
        </div>
      </section>

      <WhyUs />
      <SabihaSection />
      <Reviews />
      <LocationsGrid />
      <RelatedPosts title="Araç Kiralama Rehberi" className="bg-background" />
      <FaqSection faqs={homeFaqs} />
      <Contact />
    </>
  );
}
