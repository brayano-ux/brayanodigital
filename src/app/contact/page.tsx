import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Parlez à Brayano Service de votre projet digital — devis, WhatsApp, email.",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-10">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 font-extrabold tracking-tight text-4xl md:text-5xl leading-tight">
            Parlez-nous de votre projet.
          </h1>
        </div>
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
