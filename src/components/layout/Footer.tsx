"use client";

import { Bike, Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { STORE_INFO, NAV_LINKS } from "@/lib/constants";

const days = [
  { key: "footer.monday", hours: STORE_INFO.hours.monday },
  { key: "footer.tuesday", hours: STORE_INFO.hours.tuesday },
  { key: "footer.wednesday", hours: STORE_INFO.hours.wednesday },
  { key: "footer.thursday", hours: STORE_INFO.hours.thursday },
  { key: "footer.friday", hours: STORE_INFO.hours.friday },
  { key: "footer.saturday", hours: STORE_INFO.hours.saturday },
  { key: "footer.sunday", hours: STORE_INFO.hours.sunday },
] as const;

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Bike size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg">
                  {STORE_INFO.name}
                </h3>
                <p className="text-white/50 text-xs">{STORE_INFO.tagline}</p>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-sm">{t("footer.followUs")}:</span>
              <a
                href={STORE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4">
              {t("footer.quickLinks")}
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-primary text-sm transition-colors"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </nav>
          </div>

          {/* Store Hours */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              {t("footer.storeHours")}
            </h4>
            <div className="flex flex-col gap-1.5">
              {days.map((day) => (
                <div
                  key={day.key}
                  className="flex justify-between text-sm"
                >
                  <span className="text-white/60">{t(day.key)}</span>
                  <span
                    className={"text-white/80"}
                  >
                    {day.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4">
              {t("footer.contactUs")}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-white/60 hover:text-primary text-sm transition-colors"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                {STORE_INFO.phone}
              </a>
              <a
                href={`mailto:${STORE_INFO.email}`}
                className="flex items-start gap-3 text-white/60 hover:text-primary text-sm transition-colors break-all"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                {STORE_INFO.email}
              </a>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-primary text-sm transition-colors"
              >
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {STORE_INFO.address}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/40 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {STORE_INFO.name}. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-1">
            <span>Sector 104, Noida</span>
            <span className="mx-2">|</span>
            <span className="flex items-center gap-1 text-yellow-400">
              ★ {STORE_INFO.rating}
              <span className="text-white/40">({STORE_INFO.reviewCount})</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
