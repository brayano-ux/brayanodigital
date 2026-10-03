import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "ghostLight";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
}

const variants = {
  primary: "bg-green text-[#06210F] hover:bg-green-dark shadow-sm hover:shadow-lg hover:shadow-green/25 hover:-translate-y-0.5",
  dark: "bg-navy text-white hover:bg-navy-soft hover:-translate-y-0.5",
  outline: "bg-transparent text-text border border-border hover:border-navy",
  ghostLight: "bg-white/10 text-white border border-white/20 hover:bg-white/15",
};

export default function Button({ href, children, variant = "primary", size = "md", external, className }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[10px] font-bold transition-all duration-150 whitespace-nowrap active:translate-y-0",
    size === "md" ? "px-6 py-3.5 text-[15px]" : "px-4.5 py-2.5 text-[13.5px]",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
