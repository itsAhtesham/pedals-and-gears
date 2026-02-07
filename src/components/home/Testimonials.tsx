"use client";

import { useI18n } from "@/i18n/context";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    nameHi: "राहुल शर्मा",
    text: "Bought a Firefox Roadrunner from Pedals & Gears. The team helped me choose the perfect bike for my daily commute. Great after-sales service too!",
    textHi: "पेडल्स एंड गियर्स से Firefox Roadrunner खरीदी। टीम ने मेरी डेली कम्यूट के लिए परफेक्ट बाइक चुनने में मदद की। आफ्टर-सेल्स सर्विस भी बहुत अच्छी है!",
    rating: 5,
    bike: "Firefox Roadrunner",
  },
  {
    name: "Priya Verma",
    nameHi: "प्रिया वर्मा",
    text: "Best bicycle shop in Sector 104! Got a Hero Sprint for my son. The staff was patient and helped with the right size. Highly recommended.",
    textHi: "सेक्टर 104 की सबसे अच्छी साइकिल दुकान! बेटे के लिए Hero Sprint ली। स्टाफ ने धैर्य से सही साइज़ चुनने में मदद की। बहुत सिफारिश करूंगी।",
    rating: 5,
    bike: "Hero Sprint",
  },
  {
    name: "Amit Kumar",
    nameHi: "अमित कुमार",
    text: "Got my Hero gear cycle repaired here. Quick turnaround, genuine parts, and very reasonable pricing. Will definitely come back.",
    textHi: "यहां अपनी Hero गियर साइकिल रिपेयर कराई। जल्दी काम हुआ, असली पार्ट्स मिले, और कीमत भी बहुत सही थी। ज़रूर दोबारा आऊंगा।",
    rating: 4,
    bike: "Hero Gear Cycle",
  },
  {
    name: "Sneha Gupta",
    nameHi: "स्नेहा गुप्ता",
    text: "Amazing collection of cycles! Bought a Firefox Flipflop for myself and a kids cycle for my daughter. Home delivery was free and on time!",
    textHi: "शानदार साइकिल कलेक्शन! खुद के लिए Firefox Flipflop और बेटी के लिए किड्स साइकिल ली। होम डिलीवरी फ्री थी और समय पर मिली!",
    rating: 5,
    bike: "Firefox Flipflop",
  },
];

export default function Testimonials() {
  const { t, locale } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review, index) => (
            <AnimatedSection key={review.name} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-light-dim">
                {/* Quote icon */}
                <Quote
                  size={24}
                  className="text-primary/20 mb-3 shrink-0"
                />

                {/* Review text */}
                <p className="text-dark-muted text-sm leading-relaxed flex-1 mb-4">
                  {locale === "hi" ? review.textHi : review.text}
                </p>

                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200"
                      }
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-light-muted">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm">
                      {locale === "hi" ? review.nameHi : review.name}
                    </p>
                    <p className="text-dark-muted text-xs">{review.bike}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
