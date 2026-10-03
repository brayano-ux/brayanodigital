import { Check } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  return (
    <section id="offres" className="py-16 md:py-22">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-xl mx-auto text-center mb-12">
            <Eyebrow>Offres</Eyebrow>
            <h2 className="mt-3 font-extrabold tracking-tight text-3xl md:text-[2.75rem]">
              Choisissez le niveau d&apos;accompagnement adapté à votre activité.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid gap-5 md:grid-cols-3 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "rounded-2xl p-8 flex flex-col gap-4.5 border",
                  plan.featured
                    ? "bg-navy text-white border-navy shadow-xl md:scale-[1.02]"
                    : "bg-white border-border"
                )}
              >
                {plan.featured && (
                  <span className="self-start text-[11px] font-extrabold uppercase tracking-wide bg-green text-[#06210F] px-2.5 py-1 rounded-full">
                    Recommandé
                  </span>
                )}
                <h3 className="text-xl font-extrabold">{plan.name}</h3>
                <p className={cn("text-sm min-h-11", plan.featured ? "text-slate-300" : "text-text-secondary")}>
                  {plan.description}
                </p>
                <div className="text-2xl font-extrabold leading-tight">
                  À partir de
                  <br />
                  <span className={cn("text-xs font-semibold", plan.featured ? "text-slate-400" : "text-text-secondary")}>
                    … FCFA
                  </span>
                </div>
                <ul className={cn("flex flex-col gap-2.5 text-sm", plan.featured ? "text-slate-300" : "text-text-secondary")}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 items-start">
                      <Check size={16} className="flex-none mt-0.5 text-green" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant={plan.featured ? "primary" : "outline"}>
                  Demander un devis
                </Button>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
