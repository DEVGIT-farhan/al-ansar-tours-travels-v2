import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { company } from "../../data/company";

export default function TopBar() {
  return (
    <div className="hidden bg-[#0B3D91] text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2 hover:text-[#F4B400]"
          >
            <FaPhoneAlt size={12} />
            {company.phone}
          </a>

          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 hover:text-[#F4B400]"
          >
            <FaEnvelope size={12} />
            {company.email}
          </a>

          <span>{company.workingHours}</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}