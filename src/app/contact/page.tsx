"use client";

import { useState, useEffect, FormEvent } from "react";
import { useI18n } from "@/i18n/context";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { STORE_INFO } from "@/lib/constants";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const { t, locale } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMapLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                {t("contact.title")}
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
              <p className="text-white/60 text-lg">{t("contact.subtitle")}</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <AnimatedSection direction="left">
                <form
                  onSubmit={handleSubmit}
                  className="bg-light rounded-2xl p-8 border border-light-dim"
                >
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-dark mb-2">
                        {t("contact.name")}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-light-dim bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder={locale === "hi" ? "आपका नाम" : "Enter your name"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark mb-2">
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-light-dim bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder={locale === "hi" ? "आपका ईमेल" : "Enter your email"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark mb-2">
                        {t("contact.phone")}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-light-dim bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder={locale === "hi" ? "आपका फ़ोन नंबर" : "Enter your phone number"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-dark mb-2">
                        {t("contact.message")}
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-light-dim bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                        placeholder={
                          locale === "hi"
                            ? "अपना संदेश लिखें..."
                            : "Write your message..."
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-4 rounded-xl font-heading font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 cursor-pointer"
                    >
                      {submitted ? (
                        <>
                          <CheckCircle size={20} />
                          {t("contact.success")}
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          {t("contact.send")}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection direction="right">
                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href={`tel:${STORE_INFO.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 bg-light rounded-2xl p-6 border border-light-dim hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">
                        {t("location.phone")}
                      </h3>
                      <p className="text-primary font-bold text-lg">
                        {STORE_INFO.phone}
                      </p>
                      <p className="text-dark-muted text-sm mt-1">
                        {t("contact.orCall")}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${STORE_INFO.email}`}
                    className="flex items-start gap-4 bg-light rounded-2xl p-6 border border-light-dim hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">
                        {t("location.email")}
                      </h3>
                      <p className="text-dark-muted break-all">{STORE_INFO.email}</p>
                    </div>
                  </a>

                  {/* Address */}
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 bg-light rounded-2xl p-6 border border-light-dim hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">
                        {t("location.address")}
                      </h3>
                      <p className="text-dark-muted text-sm">
                        {locale === "hi"
                          ? STORE_INFO.addressHindi
                          : STORE_INFO.address}
                      </p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-4 bg-light rounded-2xl p-6 border border-light-dim">
                    <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={24} className="text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">
                        {t("location.hours")}
                      </h3>
                      <p className="text-dark-muted text-sm">
                        Mon - Sun: 11:00 AM - 8:00 PM
                      </p>
                      <p className="text-primary text-sm font-medium">
                        {t("location.openAllDays")}
                      </p>
                    </div>
                  </div>

                  {/* Instagram */}
                  <a
                    href={STORE_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0">
                      <Instagram size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">Instagram</h3>
                      <p className="text-purple-600 font-medium">
                        {STORE_INFO.instagramHandle}
                      </p>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-[400px] w-full relative">
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
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pedals & Gears Store Location"
            onLoad={() => setMapLoaded(true)}
          />
        </section>
    </>
  );
}
