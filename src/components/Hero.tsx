"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Araç kiralama"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,169,81,0.12)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(15,23,42,0.6)_0%,_transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm"
          >
            <Clock className="h-4 w-4 text-accent" />
            7/24 Açık — Her An Hizmetinizdeyiz
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          >
            Güvenilir Araç
            <span className="block text-accent">Kiralama Hizmeti</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 lg:text-xl"
          >
            Pendik ve İstanbul genelinde ekonomik, konforlu ve bakımlı
            araçlarımızla yolculuğunuzu güvenle planlayın. Aydemir Oto Kiralama
            farkıyla tanışın.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/905330703654"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
            >
              Hemen Rezervasyon
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              İletişime Geç
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 flex flex-wrap gap-10 lg:gap-12"
          >
            {[
              { icon: Shield, label: "Sigortalı Araçlar" },
              { icon: Clock, label: "7/24 Destek" },
              { icon: MapPin, label: "Pendik Merkez" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-white/60"
              >
                <Icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#hizmetler"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80"
        aria-label="Aşağı kaydır"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-white/80"
          />
        </div>
      </motion.a>
    </section>
  );
}
