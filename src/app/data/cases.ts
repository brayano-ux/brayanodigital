//case.ts
import type { CaseStudy } from "@/types";

// ⚠️ Données de démonstration basées sur le brief initial.
// Uniquement des chiffres réellement prouvables doivent apparaître ici avant mise en ligne.
export const cases: CaseStudy[] = [
  {
    slug: "etablissement-scolaire-douala",
    client: "Établissement scolaire",
    sector: "Éducation",
    location: "Douala, Cameroun",
    objective: "Générer des demandes d'inscription.",
    strategy: "Facebook + Instagram → WhatsApp.",
    results: [
      { label: "Messages", value: "350+" },
      { label: "Abonnés", value: "84+" },
    ],
    category: "publicite",
  },
];
