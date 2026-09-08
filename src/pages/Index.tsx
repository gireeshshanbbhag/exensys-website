import HeroSection from "./_components/hero-section.tsx";
import ServicesOverview from "./_components/services-overview.tsx";
import AboutSection from "./_components/about-section.tsx";
import WhyChooseUs from "./_components/why-choose-us.tsx";
import WhatWeOffer from "./_components/what-we-offer.tsx";
import PrinciplesSection from "./_components/principles-section.tsx";
import TestimonialsSection from "./_components/testimonials-section.tsx";
import CtaSection from "./_components/cta-section.tsx";

export default function Index() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <WhyChooseUs />
      <WhatWeOffer />
      <PrinciplesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
