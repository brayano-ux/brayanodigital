import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { testimonials } from "@/app/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-22 bg-white border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-xl mb-10">
            <Eyebrow>Témoignages</Eyebrow>
            <h2 className="mt-3 font-extrabold tracking-tight text-3xl md:text-[2.75rem]">
              Ils nous font confiance.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid gap-4.5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border rounded-2xl p-7">
                <p className="text-[15px] mb-5.5">&laquo; {t.quote} &raquo;</p>
                <div className="flex items-center gap-3">
                  <ImagePlaceholder label="" aspect="aspect-square" className="w-[46px] flex-none" round />
                  <div>
                    <strong className="block text-sm">{t.name}</strong>
                    <span className="text-[12.5px] text-text-secondary">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="text-[11.5px] text-slate-400 italic mt-3.5">
          Contenu de démonstration — à remplacer par de vrais témoignages clients avant mise en ligne.
        </p>
      </div>
    </section>
  );
}
