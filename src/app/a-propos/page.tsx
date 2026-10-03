import type { Metadata } from "next";
import About from "@/components/about/About";
import CtaFinal from "@/components/cta/CtaFinal";

export const metadata: Metadata = {
  title: "À propos",
  description: "Brayano Service, une agence digitale camerounaise moderne basée à Douala.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <CtaFinal />
    </>
  );
}
