import { Phone, MessageCircle } from "lucide-react";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 md:right-6">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a
        href={PHONE_LINK}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-lg transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
