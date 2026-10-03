import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "./FaqAccordion";
import { faqItems } from "@/app/data/faq";

export default function FaqSection() {
  return (
    <section className="py-16 md:py-22 bg-white border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-xl mx-auto text-center mb-10">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 font-extrabold tracking-tight text-3xl md:text-[2.75rem]">
              Questions fréquentes.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <FaqAccordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
