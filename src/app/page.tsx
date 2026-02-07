"use client";

import { I18nProvider } from "@/i18n/context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import BrandShowcase from "@/components/home/BrandShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import StoreLocation from "@/components/home/StoreLocation";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <BrandShowcase />
        <FeaturedProducts />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <StoreLocation />
        <ContactCTA />
      </main>
      <Footer />
    </I18nProvider>
  );
}
