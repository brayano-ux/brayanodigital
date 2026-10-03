import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Meta Ads, WhatsApp & automatisation, sites web, solutions IA, stratégie digitale — les services de Brayano Service au Cameroun.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 pb-14 md:pt-20 md:pb-18">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 max-w-2xl">
          <Eyebrow>Nos services</Eyebrow>
          <h1 className="mt-4 font-extrabold tracking-tight text-4xl md:text-5xl leading-tight">
            Des solutions digitales conçues pour générer des résultats.
          </h1>
        </div>
      </section>

      {services.map((service, i) => {
        const Icon = service.icon;
        const reversed = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={i % 2 === 0 ? "py-14 md:py-18 bg-white border-y border-border" : "py-14 md:py-18"}
          >
            <div className="max-w-[1200px] mx-auto px-6 md:px-10">
              <Reveal>
                <div className={`grid gap-10 md:grid-cols-2 items-center ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#EFFDF4] flex items-center justify-center text-green-dark mb-5">
                      <Icon size={26} strokeWidth={2} />
                    </div>
                    <h2 className="font-extrabold tracking-tight text-2xl md:text-3xl mb-3">{service.title}</h2>
                    <p className="text-text-secondary text-lg mb-6">{service.shortDescription}</p>
                    <ul className="flex flex-col gap-3 mb-7">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start text-[15px]">
                          <CheckCircle2 size={18} className="text-green-dark flex-none mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Button href={getWhatsAppLink(service.whatsappMessage)} external>
                      Discuter de ce service
                    </Button>
                  </div>
                  <div className="rounded-2xl border border-border bg-bg aspect-video flex items-center justify-center text-text-secondary text-sm font-semibold">
                    Illustration — {service.title}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-extrabold text-2xl md:text-3xl mb-4">Un service ne figure pas ici ?</h2>
          <p className="text-text-secondary mb-6">Parlez-nous simplement de votre besoin, nous vous dirons comment y répondre.</p>
          <Button href="/contact">Obtenir un devis</Button>
        </div>
      </section>
    </>
  );
}
