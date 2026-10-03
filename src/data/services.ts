import { Target, MessageCircle, Globe, Bot, TrendingUp } from "lucide-react";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortDescription: "Facebook et Instagram Ads pour générer des prospects qualifiés.",
    benefits: [
      "Ciblage précis de votre audience locale",
      "Création des visuels et textes publicitaires",
      "Suivi quotidien du budget et des résultats",
    ],
    icon: Target,
    whatsappMessage: WHATSAPP_MESSAGES.metaAds,
  },
  {
    slug: "whatsapp-automatisation",
    title: "WhatsApp & Automatisation",
    shortDescription: "Transformation des visiteurs en conversations et automatisation du suivi.",
    benefits: [
      "Configuration de WhatsApp Business",
      "Réponses automatiques et qualification des prospects",
      "Suivi structuré de chaque conversation",
    ],
    icon: MessageCircle,
    whatsappMessage: WHATSAPP_MESSAGES.whatsapp,
  },
  {
    slug: "sites-web",
    title: "Sites Web",
    shortDescription: "Sites vitrines, landing pages et plateformes web modernes.",
    benefits: [
      "Design sur mesure, rapide et mobile-first",
      "Optimisé pour le référencement local",
      "Facile à faire évoluer dans le temps",
    ],
    icon: Globe,
    whatsappMessage: WHATSAPP_MESSAGES.website,
  },
  {
    slug: "solutions-ia",
    title: "Solutions IA",
    shortDescription: "Assistants IA, chatbots et automatisation intelligente.",
    benefits: [
      "Chatbot de réponse aux questions fréquentes",
      "Automatisation des tâches répétitives",
      "Assistants adaptés à votre activité",
    ],
    icon: Bot,
    whatsappMessage: WHATSAPP_MESSAGES.ia,
  },
  {
    slug: "strategie-digitale",
    title: "Stratégie Digitale",
    shortDescription: "Accompagnement, gestion des réseaux sociaux et optimisation de la présence digitale.",
    benefits: [
      "Plan de contenu mensuel",
      "Gestion des réseaux sociaux",
      "Analyse et recommandations régulières",
    ],
    icon: TrendingUp,
    whatsappMessage: WHATSAPP_MESSAGES.strategie,
  },
];
