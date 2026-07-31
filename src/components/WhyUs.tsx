import { Banknote, CalendarRange, Clock, MessageCircle, Plane, Sparkles } from "lucide-react";

/**
 * "Neden Aydemir?" — klişe ifadeler yerine somut, doğrulanabilir avantajlar.
 * Metinleri gerçek işleyişinize göre güncelleyin; sitede yazan her taahhüt
 * hem müşteri beklentisi hem de Google için güven sinyalidir.
 */
const reasons = [
  {
    icon: Clock,
    title: "7/24 araç teslimatı",
    text: "Gece yarısı inen uçuşta da, sabah 06:00'daki çıkışta da teslim yapıyoruz. Ofisimiz kesintisiz açık.",
  },
  {
    icon: Plane,
    title: "Sabiha Gökçen Havalimanı teslimatı",
    text: "Uçuş numaranızı gönderin, uçuşunuzu takip edelim. Siz çıkışa geldiğinizde aracınız hazır olsun.",
  },
  {
    icon: CalendarRange,
    title: "Günlük, haftalık, aylık kiralama",
    text: "1 günlük şehir içi kullanımdan aylık kurumsal kiralamaya kadar süreye göre fiyat avantajı.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp'tan 2 dakikada rezervasyon",
    text: "Üyelik yok, uzun form yok. Tarih ve araç bilgisini yazın, fiyatı hemen paylaşalım.",
  },
  {
    icon: Sparkles,
    title: "Temiz ve bakımlı araçlar",
    text: "Her teslim öncesi iç-dış temizlik ve periyodik bakım kontrolü yapılır. Araçlarımız sigortalı ve kaskoludur.",
  },
  {
    icon: Banknote,
    title: "Şeffaf fiyatlandırma",
    text: "Teslim öncesi toplam tutarı yazılı olarak paylaşıyoruz. Sözleşmede olmayan hiçbir ücret çıkmaz.",
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
