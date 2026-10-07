import type { Metadata } from "next";
import CopyField from "@/components/CopyField";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ödeme Bilgileri",
  description: "Aydemir Oto Kiralama havale/EFT bilgileri.",
  alternates: { canonical: "/odeme" },
  robots: { index: false, follow: false },
};

export default function PaymentPage() {
  const { accountHolder, bankName, iban } = SITE.bank;

  return (
    <section className="bg-background pb-16 pt-28">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Ödeme Bilgileri
        </h1>
        <p className="mt-3 text-muted">
          Havale/EFT yaparken bilgileri tek dokunuşla kopyalayıp bankanızın
          uygulamasına yapıştırabilirsiniz.
        </p>

        <div className="mt-8 space-y-4">
          <CopyField label="Alıcı Adı Soyadı" value={accountHolder} />
          <CopyField label="IBAN" value={iban} />
          {bankName && (
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">Banka</div>
              <div className="mt-2 font-semibold text-primary">{bankName}</div>
            </div>
          )}
        </div>

        <p className="mt-6 text-sm text-muted">
          Ödeme sonrası dekontu WhatsApp&apos;tan ({SITE.phoneDisplay}) iletmenizi rica ederiz.
        </p>
      </div>
    </section>
  );
}
