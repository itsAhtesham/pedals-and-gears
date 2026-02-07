"use client";

import { motion } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { IMAGES } from "@/lib/images";
import Image from "next/image";

const stats = [
  { valueKey: "hero.stat.bikes", labelKey: "hero.stat.bikesLabel" },
  { valueKey: "hero.stat.customers", labelKey: "hero.stat.customersLabel" },
  { valueKey: "hero.stat.years", labelKey: "hero.stat.yearsLabel" },
] as const;

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Cyclist riding at night"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark/75" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent" />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/70 text-sm font-medium">
                Hero & Firefox Authorized Dealer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 sm:mb-6"
            >
              {t("hero.title")}
              <br />
              <span className="gradient-text">{t("hero.titleHighlight")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-base sm:text-lg md:text-xl max-w-lg mb-6 sm:mb-8 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-heading font-bold text-base sm:text-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
              >
                {t("hero.cta")}
                <ChevronRight size={20} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-heading font-bold text-base sm:text-lg transition-all hover:bg-white/10 hover:-translate-y-1"
              >
                <MapPin size={20} />
                {t("hero.ctaSecondary")}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 sm:gap-8 md:gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.valueKey}>
                  <div className="text-2xl sm:text-3xl font-extrabold gradient-text">
                    {t(stat.valueKey)}
                  </div>
                  <div className="text-white/40 text-sm mt-1">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual - Hero Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10">
                <Image
                  src={IMAGES.mountain}
                  alt="Mountain bike"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[450px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 animate-[bounce_3s_ease-in-out_infinite] shadow-lg">
                <span className="text-yellow-400 text-sm font-bold">★ 4.3</span>
                <span className="text-white/50 text-xs ml-1">(101)</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-xl px-4 py-2 animate-[bounce_3s_ease-in-out_infinite_0.5s] shadow-lg">
                <span className="text-white text-sm font-bold">Sector 104</span>
              </div>

              {/* Small secondary image */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-xl overflow-hidden border-2 border-white/10 shadow-xl">
                <Image
                  src={IMAGES.road}
                  alt="Road bike"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
