import { FaWhatsapp } from "react-icons/fa";

import { COMPANY } from "@/constants/COMPANY";
import { useWebsite } from "@/hooks/useWebsite";

export default function WhatsAppButton() {
  const { settings } = useWebsite();
  const companyName = settings?.company_name?.trim() || COMPANY.name;
  const whatsapp = (settings?.whatsapp?.trim() || COMPANY.whatsapp).replace(
    /[^\d]/g,
    "",
  );
  const message = `Hello ${companyName}, I would like to know more about your travel packages.`;

  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="group fixed bottom-5 right-4 z-50 md:bottom-6 md:right-6">
      <div
        role="tooltip"
        className="absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 md:block"
      >
        Chat with us
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="whatsapp-pulse relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#1DA851] active:scale-95 md:h-16 md:w-16"
      >
        <FaWhatsapp className="text-3xl md:text-4xl" />

        <span
          aria-hidden="true"
          className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-300 md:h-4 md:w-4"
        />
      </a>
    </div>
  );
}
