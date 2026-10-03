import Hero from "@/components/hero/Hero";
import Results from "@/components/results/Results";
import ServicesGrid from "@/components/services/ServicesGrid";
import CaseStudySection from "@/components/case-studies/CaseStudySection";
import Process from "@/components/process/Process";
import PricingSection from "@/components/pricing/PricingSection";
import Testimonials from "@/components/testimonials/Testimonials";
import About from "@/components/about/About";
import FaqSection from "@/components/faq/FaqSection";
import CtaFinal from "@/components/cta/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Results />
      <ServicesGrid />
      <CaseStudySection />
      <Process />
      <PricingSection />
      <Testimonials />
      <About />
      <FaqSection />
      <CtaFinal />
    </>
  );
}
