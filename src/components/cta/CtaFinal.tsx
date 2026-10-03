import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function CtaFinal() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(700px 340px at 50% -10%, rgba(34,197,94,.2), transparent 60%)" }}
      />
      <div className="relative max-w-[1200px] mx-auto px-6 text-center py-20 md:py-28">
        <Reveal>
          <h2 className="text-white font-extrabold tracking-tight text-3xl md:text-[2.75rem] max-w-2xl mx-auto mb-4">
            Prêt à transformer votre présence digitale en opportunités commerciales ?
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-9 text-lg">
            Parlons de votre activité et construisons une solution adaptée à vos objectifs.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <Button href={getWhatsAppLink(WHATSAPP_MESSAGES.default)} external>
              Parler sur WhatsApp
            </Button>
            <Button href="/contact" variant="ghostLight">
              Demander un devis
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
