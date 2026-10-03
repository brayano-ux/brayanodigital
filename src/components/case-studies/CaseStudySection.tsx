import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CaseStudyCard from "./CaseStudyCard";
import { cases } from "@/app/data/cases";
export default function CaseStudySection() {
  return (
    <section id="etudes" className="py-16 md:py-22">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-xl mb-10">
            <Eyebrow>Étude de cas</Eyebrow>
            <h2 className="mt-3 font-extrabold tracking-tight text-3xl md:text-[2.75rem]">
              Les résultats parlent mieux que les promesses.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <CaseStudyCard study={cases[0]} />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="text-center mt-9">
            <Button href="/etudes-de-cas" variant="outline">
              Voir toutes les études de cas
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
