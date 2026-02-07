"use client";

import { useI18n } from "@/i18n/context";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  ShoppingBag,
  Wrench,
  HardHat,
  Paintbrush,
  Truck,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    nameKey: "services.sales.name",
    descKey: "services.sales.description",
    icon: ShoppingBag,
    accent: "text-primary",
    bg: "group-hover:bg-primary/10",
  },
  {
    nameKey: "services.repair.name",
    descKey: "services.repair.description",
    icon: Wrench,
    accent: "text-secondary",
    bg: "group-hover:bg-secondary/10",
  },
  {
    nameKey: "services.accessories.name",
    descKey: "services.accessories.description",
    icon: HardHat,
    accent: "text-emerald-500",
    bg: "group-hover:bg-emerald-500/10",
  },
  {
    nameKey: "services.custom.name",
    descKey: "services.custom.description",
    icon: Paintbrush,
    accent: "text-purple-500",
    bg: "group-hover:bg-purple-500/10",
  },
  {
    nameKey: "services.delivery.name",
    descKey: "services.delivery.description",
    icon: Truck,
    accent: "text-cyan-500",
    bg: "group-hover:bg-cyan-500/10",
  },
  {
    nameKey: "services.warranty.name",
    descKey: "services.warranty.description",
    icon: ShieldCheck,
    accent: "text-yellow-500",
    bg: "group-hover:bg-yellow-500/10",
  },
] as const;

export default function Services() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.nameKey} delay={index * 0.1}>
              <div
                className={`group relative bg-light rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-light-dim`}
              >
                <div
                  className={`w-14 h-14 bg-light-muted ${service.bg} rounded-xl flex items-center justify-center mb-4 transition-colors`}
                >
                  <service.icon size={26} className={service.accent} />
                </div>

                <h3 className="text-lg font-bold text-dark mb-2">
                  {t(service.nameKey)}
                </h3>

                <p className="text-dark-muted text-sm leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
