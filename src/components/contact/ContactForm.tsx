"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "./contactSchema";

const inputClasses =
  "w-full px-3.5 py-3 border border-border rounded-lg font-[inherit] text-sm focus:border-blue outline-none transition-colors";
const errorClasses = "text-xs text-red-600 mt-1";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  // ⚠️ Branche ici ton vrai endpoint (API route Next.js, service d'emailing,
  // ou webhook CRM). Pour l'instant la soumission est simulée.
  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("Formulaire de contact soumis :", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3.5 bg-white border border-border rounded-2xl p-7">
      <div>
        <input {...register("nom")} placeholder="Nom" className={inputClasses} />
        {errors.nom && <p className={errorClasses}>{errors.nom.message}</p>}
      </div>
      <input {...register("entreprise")} placeholder="Entreprise" className={inputClasses} />
      <div>
        <input {...register("telephone")} placeholder="Téléphone / WhatsApp" className={inputClasses} />
        {errors.telephone && <p className={errorClasses}>{errors.telephone.message}</p>}
      </div>
      <div>
        <input {...register("email")} type="email" placeholder="Email" className={inputClasses} />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>
      <input {...register("service")} placeholder="Service recherché" className={inputClasses} />
      <input {...register("budget")} placeholder="Budget approximatif" className={inputClasses} />
      <div>
        <textarea {...register("message")} placeholder="Message" rows={4} className={`${inputClasses} resize-y`} />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green text-[#06210F] font-bold rounded-[10px] py-3.5 hover:bg-green-dark transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Envoi..." : "Envoyer ma demande"}
      </button>
      {isSubmitSuccessful && (
        <p className="text-sm text-green-dark font-semibold text-center">
          Merci, votre demande a bien été enregistrée (démonstration).
        </p>
      )}
    </form>
  );
}
