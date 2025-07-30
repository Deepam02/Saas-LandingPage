import React from "react"
import Navigation from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import PricingSection from "@/components/sections/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FAQSection from "@/components/sections/FAQSection"
import Footer from "@/components/sections/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
