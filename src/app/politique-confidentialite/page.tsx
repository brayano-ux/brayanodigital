import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[760px] mx-auto px-6">
        <h1 className="font-extrabold text-3xl md:text-4xl mb-6">Politique de confidentialité</h1>
        <div className="prose prose-slate max-w-none text-text-secondary space-y-5 text-[15px]">
          <p>
            ⚠️ Page à compléter avant mise en ligne, obligatoire dès que le site collecte des données via le
            formulaire de contact et les outils d&apos;analyse (Google Analytics, Vercel Analytics).
          </p>
          <p>
            Elle doit préciser : quelles données sont collectées (nom, entreprise, téléphone, email, message),
            dans quel but, combien de temps elles sont conservées, si elles sont partagées avec des tiers, et
            comment l&apos;utilisateur peut demander leur suppression.
          </p>
          <p>Contact pour toute demande relative aux données personnelles : contact@brayanoservice.com</p>
        </div>
      </div>
    </section>
  );
}
