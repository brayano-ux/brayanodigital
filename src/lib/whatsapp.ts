// ⚠️ Remplace ce numéro par le vrai numéro WhatsApp professionnel de Brayano Service
// avant la mise en production, au format international sans "+" ni espaces.
export const WHATSAPP_NUMBER = "237600000000";

/**
 * Construit un lien wa.me avec un message pré-rempli.
 * Chaque section du site peut envoyer un message différent
 * pour savoir d'où vient la demande (cf. doc technique, point 13).
 */
export function getWhatsAppLink(message: string = WHATSAPP_MESSAGES.default): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  default: "Bonjour Brayano Service, je souhaite discuter de votre offre.",
  metaAds: "Bonjour Brayano Service, je suis intéressé par la gestion de campagnes Meta Ads.",
  whatsapp: "Bonjour Brayano Service, je souhaite automatiser mon WhatsApp Business.",
  website: "Bonjour Brayano Service, je souhaite créer un site web.",
  ia: "Bonjour Brayano Service, je souhaite en savoir plus sur vos solutions IA.",
  strategie: "Bonjour Brayano Service, je souhaite un accompagnement en stratégie digitale.",
  devis: "Bonjour Brayano Service, je souhaite obtenir un devis.",
} as const;
