"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { STORE_INFO } from "@/lib/constants";

export default function ContactCTA() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary-dark to-dark-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-heading font-bold text-base sm:text-lg transition-all hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto"
            >
              {t("contact.send")}
              <ArrowRight size={20} />
            </a>
            <a
              href={`tel:${STORE_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-heading font-bold text-base sm:text-lg transition-all hover:bg-white/10 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Phone size={20} />
              {STORE_INFO.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
