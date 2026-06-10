"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Çamçeşme, Katip Çelebi Cd No:6/A",
    sub: "34899 Pendik/İstanbul",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "0533 070 36 54",
    href: "tel:+905330703654",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "7/24 Açık",
    sub: "Her gün, kesintisiz hizmet",
  },
];

export default function Contact() {
  return (
    <section id="iletisim" className="bg-primary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            İletişim
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Araç kiralama talepleriniz ve sorularınız için bizi arayın veya
            WhatsApp üzerinden yazın.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/50">{info.title}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="mt-1 block text-lg font-semibold text-white transition-colors hover:text-accent"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-semibold text-white">
                      {info.content}
                    </p>
                  )}
                  {info.sub && (
                    <p className="mt-0.5 text-sm text-white/50">{info.sub}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://maps.google.com/?q=Çamçeşme,+Katip+Çelebi+Cd+No:6/A,+34899+Pendik/İstanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              <Navigation className="h-4 w-4" />
              Yol Tarifi Al
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <iframe
              title="Aydemir Oto Kiralama Konum"
              src="https://maps.google.com/maps?q=%C3%87am%C3%A7e%C5%9Fme,+Katip+%C3%87elebi+Cd+No:6/A,+34899+Pendik/%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
