"use client";

import { useI18n } from "@/i18n/context";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, Shield, Award } from "lucide-react";

const brands = [
  {
    nameKey: "brands.hero.name",
    descKey: "brands.hero.description",
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-500/10 to-orange-500/10",
    borderColor: "border-red-500/20",
    icon: Shield,
    features: ["India's #1", "Since 1956", "7.5M+ bikes/year"],
  },
  {
    nameKey: "brands.firefox.name",
    descKey: "brands.firefox.description",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    icon: Award,
    features: ["Premium Range", "Performance", "Innovation"],
  },
] as const;

export default function BrandShowcase() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading title={t("brands.title")} subtitle={t("brands.subtitle")} />

        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <AnimatedSection
              key={brand.nameKey}
              delay={index * 0.15}
              direction={index === 0 ? "left" : "right"}
            >
              <div
                className={`group relative bg-white rounded-2xl p-8 border ${brand.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${brand.gradient}`}
                />

                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${brand.gradient} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <brand.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-dark">
                      {t(brand.nameKey)}
                    </h3>
                    <div className="flex gap-2 mt-2">
                      {brand.features.map((f) => (
                        <span
                          key={f}
                          className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${brand.bgGradient} font-medium text-dark-muted`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-dark-muted leading-relaxed mb-6">
                  {t(brand.descKey)}
                </p>

                <a
                  href="/products"
                  className={`inline-flex items-center gap-2 font-heading font-bold text-sm bg-gradient-to-r ${brand.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                >
                  {t("brands.viewCollection")}
                  <ArrowRight
                    size={16}
                    className="text-current opacity-70"
                    style={{
                      color:
                        index === 0
                          ? "rgb(239, 68, 68)"
                          : "rgb(59, 130, 246)",
                    }}
                  />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
