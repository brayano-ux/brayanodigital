import type { PricingPlan } from "@/types";

// ⚠️ Aucun tarif n'est inventé ("À partir de … FCFA" à compléter avec les vrais montants).
export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Pour les petites entreprises qui veulent établir leur présence digitale.",
    features: [
      "Site vitrine ou landing page",
      "Mise en place WhatsApp Business",
      "Présence sur les réseaux sociaux",
    ],
  },
  {
    name: "Growth",
    description: "Pour les entreprises qui veulent générer régulièrement des prospects.",
    features: [
      "Campagnes Meta Ads",
      "WhatsApp Business connecté",
      "Rapport mensuel de résultats",
    ],
  },
  {
    name: "System",
    description: "Pour les entreprises qui veulent combiner publicité, WhatsApp, automatisation et IA.",
    features: [
      "Campagnes Meta Ads gérées",
      "Automatisation WhatsApp complète",
      "Assistant IA intégré",
      "Suivi et optimisation continue",
    ],
    featured: true,
  },
];
