import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[760px] mx-auto px-6">
        <h1 className="font-extrabold text-3xl md:text-4xl mb-6">Mentions légales</h1>
        <div className="prose prose-slate max-w-none text-text-secondary space-y-5 text-[15px]">
          <p>
            ⚠️ Page à compléter avec les informations légales réelles de Brayano Service avant mise en ligne :
            forme juridique / statut, numéro de registre de commerce (le cas échéant), adresse du siège,
            directeur de la publication, coordonnées, et informations sur l&apos;hébergeur (Vercel Inc.).
          </p>
          <p>Éditeur du site : Brayano Service — Douala, Cameroun.</p>
          <p>Hébergement : Vercel Inc.</p>
          <p>Contact : contact@brayanoservice.com</p>
        </div>
      </div>
    </section>
  );
}
