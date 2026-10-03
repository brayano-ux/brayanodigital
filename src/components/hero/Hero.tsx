import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AcquisitionGraph from "./AcquisitionGraph";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="pt-16 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <Reveal>
          <Eyebrow>Agence digitale · Cameroun</Eyebrow>
          <h1 className="mt-4 mb-5 font-extrabold tracking-tight leading-[1.1] text-[2.1rem] sm:text-5xl lg:text-6xl">
            Transformez votre présence digitale en véritable source de clients.
          </h1>
          <p className="text-text-secondary text-lg max-w-[520px] mb-8">
            Nous aidons les entreprises et établissements à attirer plus de prospects grâce à la publicité,
            WhatsApp, les sites web, l&apos;automatisation et l&apos;intelligence artificielle.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-9">
            <Button href="/contact">Obtenir un devis</Button>
            <Button href={getWhatsAppLink(WHATSAPP_MESSAGES.default)} external variant="outline">
              Parler sur WhatsApp
            </Button>
          </div>
          <div className="flex gap-7 flex-wrap pt-6 border-t border-border">
            <div>
              <strong className="block text-2xl font-extrabold">350+</strong>
              <span className="text-[12.5px] font-semibold text-text-secondary">Messages générés</span>
            </div>
            <div>
              <strong className="block text-2xl font-extrabold">84+</strong>
              <span className="text-[12.5px] font-semibold text-text-secondary">Nouveaux abonnés</span>
            </div>
            <div>
              <strong className="block text-2xl font-extrabold">100%</strong>
              <span className="text-[12.5px] font-semibold text-text-secondary">Orienté résultats</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <AcquisitionGraph />
        </Reveal>
      </div>
    </section>
  );
}
