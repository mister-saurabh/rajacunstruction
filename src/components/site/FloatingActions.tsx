import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/918736936268?text=Hi%20Raja%20V.G.,%20I%27d%20like%20a%20free%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="size-14 rounded-full bg-[#25D366] grid place-items-center shadow-elegant hover:scale-110 transition-transform animate-float-slow"
      >
        <MessageCircle className="size-6 text-white" />
      </a>
      <a
        href="tel:8736936268"
        aria-label="Call"
        className="size-14 rounded-full bg-cta grid place-items-center shadow-elegant hover:scale-110 transition-transform"
      >
        <Phone className="size-6 text-white" />
      </a>
    </div>
  );
}
