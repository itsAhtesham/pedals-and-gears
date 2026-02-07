"use client";

import { useI18n } from "@/i18n/context";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { STORE_INFO } from "@/lib/constants";
import {
  ShoppingBag,
  Wrench,
  HardHat,
  Paintbrush,
  Truck,
  ShieldCheck,
  Phone,
} from "lucide-react";

const services = [
  { nameKey: "services.sales.name", descKey: "services.sales.description", icon: ShoppingBag, gradient: "from-primary to-blue-600" },
  { nameKey: "services.repair.name", descKey: "services.repair.description", icon: Wrench, gradient: "from-secondary to-orange-600" },
  { nameKey: "services.accessories.name", descKey: "services.accessories.description", icon: HardHat, gradient: "from-emerald-500 to-green-600" },
  { nameKey: "services.custom.name", descKey: "services.custom.description", icon: Paintbrush, gradient: "from-purple-500 to-violet-600" },
  { nameKey: "services.delivery.name", descKey: "services.delivery.description", icon: Truck, gradient: "from-cyan-500 to-blue-500" },
  { nameKey: "services.warranty.name", descKey: "services.warranty.description", icon: ShieldCheck, gradient: "from-yellow-500 to-amber-600" },
] as const;

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {t("services.title")}
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
              <p className="text-white/60 text-lg">
                {t("services.subtitle")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.nameKey} delay={index * 0.1}>
                  <div className="group bg-light rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-light-dim h-full">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}
                    >
                      <service.icon size={30} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">
                      {t(service.nameKey)}
                    </h3>
                    <p className="text-dark-muted leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                {t("contact.subtitle")}
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  {t("contact.send")}
                </a>
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/10"
                >
                  <Phone size={20} />
                  {STORE_INFO.phone}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
    </>
  );
}
