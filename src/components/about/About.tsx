import { Check } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const points = [
  "Compréhension du marché local",
  "Technologie & automatisation",
  "Marketing digital",
  "Intelligence artificielle",
  "Orientation résultats",
];

export default function About() {
  return (
    <section id="apropos" className="py-16 md:py-22">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid gap-10 md:grid-cols-[0.85fr_1.15fr] items-center">
        <Reveal>
          <ImagePlaceholder
            label="Photo professionnelle du fondateur"
            dims="800×1000 · WebP"
            aspect="aspect-[4/5]"
            rounded="rounded-[20px]"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <Eyebrow>À propos</Eyebrow>
          <h2 className="mt-3 font-extrabold tracking-tight text-3xl md:text-[2.75rem]">
            Une approche locale, une vision internationale.
          </h2>
          <p className="text-text-secondary text-lg mt-4">
            Brayano Service est une agence digitale camerounaise moderne, qui combine compréhension du marché
            local et exigence technologique pour aider les entreprises à générer des résultats concrets.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {points.map((p) => (
              <div key={p} className="flex gap-2.5 items-start">
                <Check size={18} className="flex-none mt-0.5 text-green-dark" />
                <span className="text-sm font-semibold">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
