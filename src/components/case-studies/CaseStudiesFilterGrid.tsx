"use client";

import { useState } from "react";
import CaseStudyCard from "./CaseStudyCard";
import { cases } from "@/app/data/cases";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

const filters: { label: string; value: CaseStudy["category"] | "tous" }[] = [
  { label: "Tous", value: "tous" },
  { label: "Publicité", value: "publicite" },
  { label: "Sites Web", value: "site-web" },
  { label: "IA", value: "ia" },
  { label: "Automatisation", value: "automatisation" },
];

export default function CaseStudiesFilterGrid() {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>("tous");
  const filtered = active === "tous" ? cases : cases.filter((c) => c.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-bold border transition-colors",
              active === f.value ? "bg-navy text-white border-navy" : "bg-white text-text border-border hover:border-slate-400"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-secondary">Aucune étude de cas dans cette catégorie pour le moment.</p>
      ) : (
        <div className="flex flex-col gap-8">
          {filtered.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      )}
    </div>
  );
}
