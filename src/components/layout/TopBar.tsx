import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { Container } from "@/components/ui";
import { COMPANY } from "@/constants/COMPANY";

const socialLinks = [
  {
    href: COMPANY.social.facebook,
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: COMPANY.social.instagram,
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: COMPANY.social.youtube,
    label: "YouTube",
    icon: FaYoutube,
  },
  {
    href: COMPANY.social.whatsapp,
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
];

export default function TopBar() {
  return (
    <div className="hidden bg-[#0B3D91] text-white lg:block">
      <Container className="flex items-center justify-between py-2 text-sm">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 transition-colors hover:text-[#F4B400]"
          >
            <FaPhoneAlt size={12} />
            <span>{COMPANY.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-2 transition-colors hover:text-[#F4B400]"
          >
            <FaEnvelope size={12} />
            <span>{COMPANY.email}</span>
          </a>

          <span>{COMPANY.officeHours}</span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-all duration-200 hover:scale-110 hover:text-[#F4B400]"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}