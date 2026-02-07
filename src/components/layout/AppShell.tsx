"use client";

import { useEffect } from "react";
import { I18nProvider, useI18n } from "@/i18n/context";
import Header from "./Header";
import Footer from "./Footer";

function AppShellInner({ children }: { children: React.ReactNode }) {
  const { locale } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale === "hi" ? "hi" : "en";
  }, [locale]);

  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <AppShellInner>{children}</AppShellInner>
    </I18nProvider>
  );
}
