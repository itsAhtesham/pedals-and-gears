"use client";

import { useI18n } from "@/i18n/context";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BadgeCheck, Users, IndianRupee, HeartHandshake } from "lucide-react";

const reasons = [
  {
    titleKey: "why.authorized",
    descKey: "why.authorizedDesc",
    icon: BadgeCheck,
    gradient: "from-primary to-blue-600",
  },
  {
    titleKey: "why.expert",
    descKey: "why.expertDesc",
    icon: Users,
    gradient: "from-secondary to-orange-600",
  },
  {
    titleKey: "why.pricing",
    descKey: "why.pricingDesc",
    icon: IndianRupee,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    titleKey: "why.service",
    descKey: "why.serviceDesc",
    icon: HeartHandshake,
    gradient: "from-purple-500 to-violet-600",
  },
] as const;

export default function WhyChooseUs() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-dark-light relative overflow-hidden diagonal-top">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-8">
        <SectionHeading
          title={t("why.title")}
          subtitle={t("why.subtitle")}
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.titleKey} delay={index * 0.1}>
              <div className="text-center group">
                <div
                  className={`w-20 h-20 mx-auto mb-5 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  <reason.icon size={36} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
