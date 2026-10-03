import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CaseStudiesFilterGrid from "@/components/case-studies/CaseStudiesFilterGrid";

export const metadata: Metadata = {
  title: "Études de cas",
  description: "Les résultats obtenus par Brayano Service pour ses clients au Cameroun.",
};

export default function CaseStudiesPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-10">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-4 font-extrabold tracking-tight text-4xl md:text-5xl leading-tight">
            Les résultats parlent mieux que les promesses.
          </h1>
        </div>
        <CaseStudiesFilterGrid />
      </div>
    </section>
  );
}
