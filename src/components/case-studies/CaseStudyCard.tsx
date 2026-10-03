import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { CaseStudy } from "@/types";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="relative overflow-hidden bg-navy rounded-3xl text-white p-7 md:p-14 grid gap-8 md:grid-cols-2">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(600px 300px at 100% 100%, rgba(34,197,94,.15), transparent 60%)" }}
      />
      <div className="relative">
        <span className="inline-block bg-green/15 text-green font-bold text-xs px-3 py-1.5 rounded-full mb-4.5">
          {study.client} — {study.location}
        </span>
        <h3 className="text-white text-2xl font-extrabold mb-4.5">
          Campagne publicitaire pour un {study.client.toLowerCase()} à {study.location.split(",")[0]}
        </h3>
        <div className="mb-3.5">
          <b className="block text-xs uppercase tracking-wide text-slate-400 mb-1">Objectif</b>
          <span className="text-[15px] text-slate-200">{study.objective}</span>
        </div>
        <div className="mb-3.5">
          <b className="block text-xs uppercase tracking-wide text-slate-400 mb-1">Stratégie</b>
          <span className="text-[15px] text-slate-200">{study.strategy}</span>
        </div>
        <div className="flex gap-7 mt-6 pt-6 border-t border-white/10">
          {study.results.map((r) => (
            <div key={r.label}>
              <strong className="block text-3xl font-extrabold text-white">{r.value}</strong>
              <span className="text-[12.5px] text-slate-400 font-semibold">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col gap-3.5 justify-center">
        <ImagePlaceholder label="Capture réelle — Statistiques Meta Ads" dims="1200×675 · WebP" />
        <ImagePlaceholder label="Capture réelle — Conversation WhatsApp" dims="1200×675 · WebP" />
        <ImagePlaceholder label="Flyer utilisé pour la campagne" dims="1200×675 · WebP" />
      </div>
    </div>
  );
}
