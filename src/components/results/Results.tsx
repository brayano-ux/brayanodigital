import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "350", suffix: "+", label: "Messages générés" },
  { value: "84", suffix: "+", label: "Nouveaux abonnés" },
  { value: "X", suffix: "+", label: "Campagnes lancées" },
  { value: "X", suffix: "", label: "Clients accompagnés" },
];

export default function Results() {
  return (
    <section id="resultats" className="py-16 md:py-22">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-xl mb-10">
            <Eyebrow>Preuve</Eyebrow>
            <h2 className="mt-3 font-extrabold tracking-tight text-3xl md:text-[2.75rem]">
              Des actions qui produisent des résultats.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-border rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <strong className="block text-3xl md:text-4xl font-extrabold text-navy">
                  {s.value}
                  <span className="text-green-dark">{s.suffix}</span>
                </strong>
                <span className="text-[13.5px] font-semibold text-text-secondary">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
