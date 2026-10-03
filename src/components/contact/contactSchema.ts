import { z } from "zod";

export const contactSchema = z.object({
  nom: z.string().min(2, "Merci d'indiquer votre nom."),
  entreprise: z.string().optional(),
  telephone: z.string().min(6, "Numéro de téléphone / WhatsApp invalide."),
  email: z.string().email("Adresse email invalide."),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Merci de détailler un peu votre message (10 caractères minimum)."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
