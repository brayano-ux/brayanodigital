import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section className="py-16 md:py-22 bg-white border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-xl mb-12">
            <Eyebrow>Méthode</Eyebrow>
            <h2 className="mt-3 font-extrabold tracking-tight text-3xl md:text-[2.75rem]">
              De la stratégie aux résultats.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
            <div className="hidden md:block absolute top-[13px] left-[6%] right-[6%] h-px bg-border" />
            {processSteps.map((step) => (
              <div key={step.number} className="relative border-l-2 md:border-l-0 border-border pl-5 md:pl-0">
                <span className="text-[13px] font-extrabold text-green-dark bg-white inline-block pb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-extrabold mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
