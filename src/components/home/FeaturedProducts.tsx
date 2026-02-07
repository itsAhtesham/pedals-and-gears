"use client";

import { useI18n } from "@/i18n/context";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import {
  Mountain,
  Gauge,
  Baby,
  Zap,
  Shuffle,
  Settings,
} from "lucide-react";

const products = [
  {
    nameKey: "products.mountain.name",
    descKey: "products.mountain.description",
    icon: Mountain,
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-500/10",
    image: IMAGES.mountain,
  },
  {
    nameKey: "products.road.name",
    descKey: "products.road.description",
    icon: Gauge,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    image: IMAGES.road,
  },
  {
    nameKey: "products.kids.name",
    descKey: "products.kids.description",
    icon: Baby,
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    image: IMAGES.kids,
  },
  {
    nameKey: "products.electric.name",
    descKey: "products.electric.description",
    icon: Zap,
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-500/10",
    image: IMAGES.electric,
  },
  {
    nameKey: "products.hybrid.name",
    descKey: "products.hybrid.description",
    icon: Shuffle,
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-500/10",
    image: IMAGES.hybrid,
  },
  {
    nameKey: "products.gear.name",
    descKey: "products.gear.description",
    icon: Settings,
    color: "from-orange-500 to-red-600",
    bg: "bg-orange-500/10",
    image: IMAGES.gear,
  },
] as const;

export default function FeaturedProducts() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden diagonal-top">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-8">
        <SectionHeading
          title={t("products.title")}
          subtitle={t("products.subtitle")}
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <AnimatedSection key={product.nameKey} delay={index * 0.1}>
              <div className="group relative bg-dark-light border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={t(product.nameKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-light via-dark-light/40 to-transparent" />
                  <div
                    className={`absolute top-3 left-3 w-10 h-10 ${product.bg} backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10`}
                  >
                    <product.icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t(product.nameKey)}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {t(product.descKey)}
                  </p>
                </div>

                {/* Hover gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${product.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <p className="text-center text-white/40 mt-10 text-sm">
            {t("products.visitStore")}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
