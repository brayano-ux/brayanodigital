import { MessageCircle, Mail, MapPin } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const items = [
  { icon: MessageCircle, label: "WhatsApp", value: "Réponse rapide", href: getWhatsAppLink(WHATSAPP_MESSAGES.default) },
  { icon: Mail, label: "Email professionnel", value: "contact@brayanoservice.com", href: "mailto:contact@brayanoservice.com" },
  { icon: MapPin, label: "Localisation", value: "Douala, Cameroun", href: undefined },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4.5">
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <div className="bg-white border border-border rounded-2xl p-5.5 flex gap-3.5 items-center shadow-sm">
            <div className="w-11 h-11 rounded-[10px] bg-[#EFFDF4] flex items-center justify-center text-green-dark flex-none">
              <Icon size={18} strokeWidth={2} />
            </div>
            <div>
              <strong className="block text-[15px]">{item.label}</strong>
              <span className="text-[13px] text-text-secondary">{item.value}</span>
            </div>
          </div>
        );
        return item.href ? (
          <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          <div key={item.label}>{content}</div>
        );
      })}
    </div>
  );
}
