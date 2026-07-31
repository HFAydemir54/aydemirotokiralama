import { Banknote, CalendarRange, Clock, MessageCircle, Plane, Sparkles } from "lucide-react";

/**
 * "Neden Aydemir?" — klişe ifadeler yerine somut, doğrulanabilir avantajlar.
 * Metinleri gerçek işleyişinize göre güncelleyin; sitede yazan her taahhüt
 * hem müşteri beklentisi hem de Google için güven sinyalidir.
 */
const reasons = [
  {
    icon: Clock,
    title: "7/24 açık ofis",
    text: "Gece geç saatte de, sabah erkenden de araç teslim alabilirsiniz. Ofisimiz kesintisiz açık.",
  },
  {
    icon: Plane,
    title: "Sabiha Gökçen'e araç getiriyoruz",
    text: "Ofisimiz havalimanına 15 dakika mesafede. Teslim saatini önceden birlikte belirliyoruz.",
  },
  {
    icon: CalendarRange,
    title: "Günlük, haftalık, aylık kiralama",
    text: "Minimum 1 günden başlayan kiralama. Uzun süreli kiralamalarda fiyatı birlikte belirliyoruz.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp'tan 2 dakikada rezervasyon",
    text: "Üyelik yok, uzun form yok. Tarih ve araç bilgisini yazın, fiyatı hemen paylaşalım.",
  },
  {
    icon: Sparkles,
    title: "Temiz ve bakımlı araçlar",
    text: "Araçlarımız her teslim öncesi temizlenir, periyodik bakımları düzenli yapılır. Tüm araçlarımız sigortalı ve kaskoludur.",
  },
  {
    icon: Banknote,
    title: "Depozito yok",
    text: "Depozito almıyoruz. Yalnızca aracı ileri bir tarih için ayırtmak isterseniz kapora alınır.",
  },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Neden Aydemir?
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Pendik&apos;te Araç Kiralamanın Kolay Yolu
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
