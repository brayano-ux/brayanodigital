import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  benefits: string[];
  icon: LucideIcon;
  whatsappMessage: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  location: string;
  objective: string;
  strategy: string;
  results: { label: string; value: string }[];
  category: "publicite" | "site-web" | "ia" | "automatisation";
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  result?: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
