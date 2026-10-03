import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  dims?: string;
  aspect?: string; // classe Tailwind, ex: "aspect-video", "aspect-[4/5]"
  rounded?: string;
  round?: boolean; // avatar circulaire
  className?: string;
}

/**
 * Emplacement d'image clairement identifié, à remplacer par un vrai
 * <Image src="/images/...webp" ... /> (next/image) une fois les assets
 * du dossier BRAYANO-SERVICE-ASSETS reçus.
 */
export default function ImagePlaceholder({
  label,
  dims,
  aspect = "aspect-video",
  rounded = "rounded-xl",
  round = false,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden border-[1.5px] border-dashed border-slate-300",
        "bg-[repeating-linear-gradient(135deg,#EEF2F7_0px,#EEF2F7_10px,#E7ECF2_10px,#E7ECF2_20px)]",
        aspect,
        round ? "rounded-full" : rounded,
        className
      )}
    >
      <div className="text-center px-3 text-slate-500">
        <ImageIcon className="mx-auto mb-2 opacity-60" size={round ? 16 : 26} strokeWidth={1.6} />
        {!round && <p className="text-xs font-bold leading-snug">{label}</p>}
        {!round && dims && <span className="block text-[10.5px] font-semibold opacity-70 mt-1">{dims}</span>}
      </div>
    </div>
  );
}
