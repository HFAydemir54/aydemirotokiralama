"use client";

import { motion } from "framer-motion";
import { Car, Clock, CreditCard, Headphones, Key, Wrench } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Geniş Araç Filosu",
    description:
      "Ekonomik sınıftan lüks segmente kadar ihtiyacınıza uygun bakımlı ve temiz araçlar.",
  },
  {
    icon: Clock,
    title: "7/24 Kiralama",
    description:
      "Gece gündüz demeden araç kiralama ve teslim hizmeti. Zamanınız bizim için değerli.",
  },
  {
    icon: CreditCard,
    title: "Uygun Fiyatlar",
    description:
      "Şeffaf fiyatlandırma, gizli masraf yok. Bütçenize uygun esnek kiralama seçenekleri.",
  },
  {
    icon: Headphones,
    title: "Müşteri Desteği",
    description:
      "Kiralama öncesi ve sonrası profesyonel destek ekibimiz her an yanınızda.",
  },
  {
    icon: Key,
    title: "Hızlı Teslimat",
    description:
      "Minimum evrak ile hızlı sözleşme ve araç teslimi. Yolda kaybetmeyin.",
  },
  {
    icon: Wrench,
    title: "Bakımlı Araçlar",
    description:
      "Periyodik bakımı yapılmış, sigortalı ve güvenli araçlarla yolculuk edin.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="hizmetler" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Hizmetlerimiz
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Size Özel Kiralama Çözümleri
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            İster iş seyahati, ister tatil — Aydemir Oto Kiralama ile her yolculuğunuz
            konforlu ve güvenli.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
