"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[760px] mx-auto flex flex-col gap-2.5">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border border-border rounded-xl bg-white overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center gap-4 px-5.5 py-5 text-left font-bold text-[15px]"
              aria-expanded={isOpen}
            >
              {item.question}
              <Plus size={18} className={cn("flex-none transition-transform text-text-secondary", isOpen && "rotate-45 text-green-dark")} />
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "240px" : "0px" }}
            >
              <p className="px-5.5 pb-5 text-text-secondary text-[14.5px]">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
