"use client";

import { useI18n } from "@/i18n/context";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { STORE_INFO } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import {
  Mountain,
  Gauge,
  Baby,
  Zap,
  Shuffle,
  Settings,
  Shield,
  Award,
  Phone,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    nameKey: "products.mountain.name",
    descKey: "products.mountain.description",
    icon: Mountain,
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-500/10",
    priceRange: "₹8,000 - ₹45,000",
    image: IMAGES.mountain,
  },
  {
    nameKey: "products.road.name",
    descKey: "products.road.description",
    icon: Gauge,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    priceRange: "₹6,000 - ₹35,000",
    image: IMAGES.road,
  },
  {
    nameKey: "products.kids.name",
    descKey: "products.kids.description",
    icon: Baby,
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
    priceRange: "₹3,000 - ₹12,000",
    image: IMAGES.kids,
  },
  {
    nameKey: "products.electric.name",
    descKey: "products.electric.description",
    icon: Zap,
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-500/10",
    priceRange: "₹25,000 - ₹80,000",
    image: IMAGES.electric,
  },
  {
    nameKey: "products.hybrid.name",
    descKey: "products.hybrid.description",
    icon: Shuffle,
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-500/10",
    priceRange: "₹10,000 - ₹40,000",
    image: IMAGES.hybrid,
  },
  {
    nameKey: "products.gear.name",
    descKey: "products.gear.description",
    icon: Settings,
    color: "from-orange-500 to-red-600",
    bg: "bg-orange-500/10",
    priceRange: "₹7,000 - ₹30,000",
    image: IMAGES.gear,
  },
] as const;

export default function ProductsPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {t("products.title")}
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
              <p className="text-white/60 text-lg">{t("products.subtitle")}</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Brands */}
        <section className="py-16 bg-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-2xl p-8 border border-red-100 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Shield size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-dark">
                      {t("brands.hero.name")}
                    </h2>
                  </div>
                  <p className="text-dark-muted leading-relaxed">
                    {t("brands.hero.description")}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Award size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-dark">
                      {t("brands.firefox.name")}
                    </h2>
                  </div>
                  <p className="text-dark-muted leading-relaxed">
                    {t("brands.firefox.description")}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <AnimatedSection key={product.nameKey} delay={index * 0.1}>
                  <div className="group bg-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-light-dim">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={t(product.nameKey)}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-light via-transparent to-transparent" />
                      <div
                        className={`absolute top-3 right-3 ${product.bg} backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20`}
                      >
                        <p className={`text-xs font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                          {product.priceRange}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 ${product.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <product.icon size={20} className="text-dark" />
                        </div>
                        <h3 className="text-xl font-bold text-dark">
                          {t(product.nameKey)}
                        </h3>
                      </div>
                      <p className="text-dark-muted text-sm leading-relaxed">
                        {t(product.descKey)}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.6}>
              <div className="text-center mt-12 bg-dark rounded-2xl p-8">
                <p className="text-white/60 mb-4">{t("products.visitStore")}</p>
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5"
                >
                  <Phone size={18} />
                  {STORE_INFO.phone}
                  <ArrowRight size={16} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
    </>
  );
}
