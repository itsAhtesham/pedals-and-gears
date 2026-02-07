"use client";

import { useI18n } from "@/i18n/context";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useI18n();

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-sm font-medium transition-all duration-300 text-white hover:bg-white/10 cursor-pointer"
      aria-label="Toggle language"
    >
      <Languages size={16} />
      <span className="uppercase font-heading font-bold">
        {locale === "en" ? "हिं" : "EN"}
      </span>
    </button>
  );
}
