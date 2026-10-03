"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const links = [
  { href: "/services", label: "Services" },
  { href: "/#resultats", label: "Résultats" },
  { href: "/etudes-de-cas", label: "Études de cas" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold text-[18px] tracking-tight">
          <span className="relative w-[30px] h-[30px] rounded-lg bg-navy flex-none">
            <span className="absolute inset-[9px] rounded-sm bg-green" />
          </span>
          BRAYANO SERVICE
        </Link>

        <nav className="hidden lg:flex items-center gap-9 font-semibold text-[14.5px]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="opacity-80 hover:opacity-100 transition-opacity">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <Button href={getWhatsAppLink(WHATSAPP_MESSAGES.default)} external size="sm" className="hidden sm:inline-flex">
            Parler sur WhatsApp
          </Button>
          <button
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-1.5"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden flex flex-col bg-white border-b border-border">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 font-semibold border-t border-border"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
