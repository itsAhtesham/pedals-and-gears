"use client";

import { useI18n } from "@/i18n/context";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { STORE_INFO } from "@/lib/constants";
import {
  Target,
  Eye,
  BadgeCheck,
  Users,
  IndianRupee,
  HeartHandshake,
  Star,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {t("about.title")}
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                {t("about.subtitle")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="bg-light rounded-2xl p-8 md:p-12 border border-light-dim">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-xl text-dark">
                      {STORE_INFO.name}
                    </h2>
                    <p className="text-dark-muted text-sm">
                      Sector 104, Noida
                    </p>
                  </div>
                </div>
                <p className="text-dark-muted text-lg leading-relaxed">
                  {t("about.story")}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-2xl p-8 border border-light-dim h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <Target size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-dark mb-4">
                    {t("about.mission")}
                  </h3>
                  <p className="text-dark-muted leading-relaxed">
                    {t("about.missionText")}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl p-8 border border-light-dim h-full">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                    <Eye size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-dark mb-4">
                    {t("about.vision")}
                  </h3>
                  <p className="text-dark-muted leading-relaxed">
                    {t("about.visionText")}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 bg-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
                {t("why.title")}
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BadgeCheck, title: t("why.authorized"), desc: t("why.authorizedDesc"), gradient: "from-primary to-blue-600" },
                { icon: Users, title: t("why.expert"), desc: t("why.expertDesc"), gradient: "from-secondary to-orange-600" },
                { icon: IndianRupee, title: t("why.pricing"), desc: t("why.pricingDesc"), gradient: "from-emerald-500 to-green-600" },
                { icon: HeartHandshake, title: t("why.service"), desc: t("why.serviceDesc"), gradient: "from-purple-500 to-violet-600" },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <item.icon size={30} className="text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Rating */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={28}
                    className={
                      i < Math.floor(STORE_INFO.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-white/30"
                    }
                  />
                ))}
              </div>
              <p className="text-3xl font-extrabold text-white">
                {STORE_INFO.rating}{" "}
                <span className="text-white/60 text-lg font-normal">
                  / 5 ({STORE_INFO.reviewCount} reviews on Google)
                </span>
              </p>
            </AnimatedSection>
          </div>
        </section>
    </>
  );
}
