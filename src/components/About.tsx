"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Pendik merkezli güvenilir hizmet",
  "Sigortalı ve bakımlı araç filosu",
  "Esnek kiralama süreleri",
  "Şeffaf ve rekabetçi fiyatlar",
  "7/24 müşteri desteği",
  "Hızlı ve kolay teslim süreci",
];

export default function About() {
  return (
    <section id="hakkimizda" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Hakkımızda
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Aydemir Oto Kiralama
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Pendik/İstanbul&apos;da faaliyet gösteren Aydemir Oto Kiralama, müşterilerine
              güvenilir, konforlu ve uygun fiyatlı araç kiralama hizmeti sunmaktadır.
              Geniş araç filomuz ve deneyimli ekibimizle her türlü ihtiyacınıza çözüm
              üretiyoruz.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              7/24 açık olmamız sayesinde istediğiniz saatte araç kiralayabilir,
              yolculuğunuza kesintisiz devam edebilirsiniz. Müşteri memnuniyeti
              odaklı yaklaşımımızla sektörde fark yaratıyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-background p-8 lg:p-10"
          >
            <h3 className="mb-6 text-lg font-semibold text-primary">
              Neden Bizi Tercih Etmelisiniz?
            </h3>
            <ul className="space-y-4">
              {highlights.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-primary-light">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
