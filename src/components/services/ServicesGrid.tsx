import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-22 bg-white border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-xl mb-10">
            <Eyebrow>Ce que nous faisons</Eyebrow>
            <h2 className="mt-3 font-extrabold tracking-tight text-3xl md:text-[2.75rem]">
              Un système digital pensé pour développer votre activité.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
