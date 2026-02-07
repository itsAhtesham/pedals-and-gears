"use client";

import { useI18n } from "@/i18n/context";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { IMAGES } from "@/lib/images";
import Image from "next/image";

const galleryItems = [
  { title: "Mountain Bikes Collection", titleHi: "माउंटेन बाइक कलेक्शन", image: IMAGES.gallery.mountainTrail, span: "md:col-span-2", tall: false },
  { title: "Road & City Bikes", titleHi: "रोड और सिटी बाइक", image: IMAGES.gallery.roadCycling, span: "", tall: false },
  { title: "Kids Bikes Range", titleHi: "किड्स बाइक रेंज", image: IMAGES.gallery.kidsRiding, span: "", tall: false },
  { title: "Our Workshop", titleHi: "हमारी वर्कशॉप", image: IMAGES.gallery.workshop, span: "md:col-span-2", tall: false },
  { title: "Store Front", titleHi: "स्टोर फ्रंट", image: IMAGES.gallery.shopInterior, span: "md:col-span-2", tall: true },
  { title: "Electric Bikes", titleHi: "इलेक्ट्रिक बाइक", image: IMAGES.gallery.eBike, span: "", tall: false },
  { title: "City Cycling", titleHi: "सिटी साइकलिंग", image: IMAGES.gallery.cityCycling, span: "", tall: false },
  { title: "Gear Cycles Lineup", titleHi: "गियर साइकिल लाइनअप", image: IMAGES.gallery.gearCloseup, span: "md:col-span-2", tall: false },
];

export default function GalleryPage() {
  const { t, locale } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {t("gallery.title")}
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
              <p className="text-white/60 text-lg">
                {t("gallery.subtitle")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <AnimatedSection
                  key={item.title}
                  delay={index * 0.08}
                  className={item.span}
                >
                  <div
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.tall ? "h-80" : "h-64"} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                  >
                    <Image
                      src={item.image}
                      alt={locale === "hi" ? item.titleHi : item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes={item.span ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {locale === "hi" ? item.titleHi : item.title}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.8}>
              <p className="text-center text-dark-muted mt-12 text-sm">
                {locale === "hi"
                  ? "हमारा पूरा कलेक्शन देखने दुकान पर आएं!"
                  : "Visit our store to see our full collection in person!"}
              </p>
            </AnimatedSection>
          </div>
        </section>
    </>
  );
}
