import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import WhatsAppCta from "./WhatsAppCta";

const steps = [
  {
    n: "1",
    title: "Uçuş bilginizi gönderin",
    text: "WhatsApp'tan uçuş numaranızı, iniş saatinizi ve kiralama sürenizi yazın.",
  },
  {
    n: "2",
    title: "Uçuşunuzu takip edelim",
    text: "Rötar olsa bile teslim saatini biz güncelleriz; ek ücret çıkmaz.",
  },
  {
    n: "3",
    title: "Çıkışta aracınızı teslim alın",
    text: "Bagajınızı aldıktan sonra sözleşme birkaç dakikada tamamlanır, yola çıkarsınız.",
  },
];

export default function SabihaSection() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <Plane className="h-4 w-4" />
              Havalimanı Hizmeti
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sabiha Gökçen Havalimanı Araç Kiralama
            </h2>
            <p className="mt-6 leading-relaxed text-white/70">
              Pendik&apos;teki ofisimiz Sabiha Gökçen Havalimanı&apos;na yaklaşık 8 km
              mesafede. Bu yakınlık sayesinde havalimanına hızlı teslimat yapabiliyor,
              gece inen uçuşlarda dahi aracınızı zamanında hazır edebiliyoruz.
              Havalimanı ofis kuyruğunda beklemeden, doğrudan çıkışta aracınızı
              teslim alırsınız.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/sabiha-gokcen-arac-kiralama"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
              >
                Havalimanı Kiralama Detayları
                <ArrowRight className="h-4 w-4" />
              </Link>
              <WhatsAppCta
                label="sabiha_bolum"
                message="Merhaba, Sabiha Gökçen Havalimanı'ndan araç kiralamak istiyorum."
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                WhatsApp&apos;tan Sor
              </WhatsAppCta>
            </div>
          </div>

          <ol className="space-y-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 font-bold text-accent">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
