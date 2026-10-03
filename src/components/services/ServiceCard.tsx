import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="group bg-white border border-border rounded-2xl p-7 flex flex-col gap-3.5 transition-all hover:shadow-md hover:-translate-y-1 hover:border-slate-300">
      <div className="w-11 h-11 rounded-[10px] bg-[#EFFDF4] flex items-center justify-center text-green-dark">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="text-[1.35rem] font-extrabold tracking-tight">{service.title}</h3>
      <p className="text-text-secondary text-[14.5px]">{service.shortDescription}</p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-auto font-bold text-[14px] text-navy inline-flex items-center gap-1.5"
      >
        Découvrir
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
