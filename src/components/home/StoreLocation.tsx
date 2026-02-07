"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/context";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { STORE_INFO } from "@/lib/constants";

export default function StoreLocation() {
  const { t, locale } = useI18n();
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("location.title")}
          subtitle={t("location.subtitle")}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-light-dim h-[400px] lg:h-full min-h-[400px] relative">
              {!mapLoaded && (
                <div className="absolute inset-0 bg-light-dim animate-pulse flex items-center justify-center">
                  <MapPin size={32} className="text-dark-muted" />
                </div>
              )}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7!2d${STORE_INFO.coordinates.lng}!3d${STORE_INFO.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7686c1ce76b%3A0x4b61bdbcc61a8bea!2sPedals%20and%20Gears%20-%20Hero%20%26%20Firefox%20Cycles!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Pedals & Gears Store Location"
                onLoad={() => setMapLoaded(true)}
              />
            </div>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection direction="right">
            <div className="bg-dark rounded-2xl p-8 text-white h-full flex flex-col justify-center">
              {/* Address */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">
                    {t("location.address")}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {locale === "hi"
                      ? STORE_INFO.addressHindi
                      : STORE_INFO.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">
                    {t("location.hours")}
                  </h4>
                  <p className="text-white/60 text-sm">
                    Mon - Sun: 11:00 AM - 8:00 PM
                  </p>
                  <p className="text-emerald-400 text-sm font-medium">
                    {t("location.openAllDays")}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">
                    {t("location.phone")}
                  </h4>
                  <a
                    href={`tel:${STORE_INFO.phone.replace(/\s/g, "")}`}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">
                    {t("location.email")}
                  </h4>
                  <a
                    href={`mailto:${STORE_INFO.email}`}
                    className="text-white/60 hover:text-primary text-sm transition-colors break-all"
                  >
                    {STORE_INFO.email}
                  </a>
                </div>
              </div>

              {/* CTA */}
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl font-heading font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                {t("location.getDirections")}
                <ExternalLink size={16} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
