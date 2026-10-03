import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink(WHATSAPP_MESSAGES.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Brayano Service sur WhatsApp"
      className="fixed bottom-5 right-5 z-[100] w-14 h-14 rounded-full bg-green shadow-lg shadow-green/40 flex items-center justify-center lg:hidden"
    >
      <MessageCircle size={26} color="#06210F" strokeWidth={2} />
    </a>
  );
}
