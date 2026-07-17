import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/constants/COMPANY";

export default function WhatsAppButton() {
  const phoneNumber = COMPANY.whatsapp;

  const message =
    "Hello AL ANSAR TOURS & TRAVELS, I would like to know more about your travel packages.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-pulse relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#1DA851]"
      >
        <FaWhatsapp className="text-4xl" />

        {/* Online Indicator */}
        <span className="absolute right-1 top-1 h-4 w-4 rounded-full border-2 border-white bg-green-300"></span>
      </a>
    </div>
  );
}