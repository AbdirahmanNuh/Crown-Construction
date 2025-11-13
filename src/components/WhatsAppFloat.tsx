import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/252636379790"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-fade-in"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFloat;
