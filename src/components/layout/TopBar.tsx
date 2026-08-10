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
import { useWebsite } from "@/hooks/useWebsite";

export default function TopBar() {
  const { settings } = useWebsite();
  const phone = settings?.phone?.trim() || COMPANY.phone;
  const email = settings?.email?.trim() || COMPANY.email;
  const whatsapp = settings?.whatsapp?.trim() || COMPANY.whatsapp;
  const officeHours = settings?.monday_hours?.trim() || COMPANY.officeHours;
  const socialLinks = [
    {
      href: settings?.facebook_url?.trim() || COMPANY.social.facebook,
      label: "Facebook",
      icon: FaFacebookF,
    },
    {
      href: settings?.instagram_url?.trim() || COMPANY.social.instagram,
      label: "Instagram",
      icon: FaInstagram,
    },
    {
      href: settings?.youtube_url?.trim() || COMPANY.social.youtube,
      label: "YouTube",
      icon: FaYoutube,
    },
    {
      href: `https://wa.me/${whatsapp.replace(/[^\d]/g, "")}`,
      label: "WhatsApp",
      icon: FaWhatsapp,
    },
  ].filter((item) => item.href.length > 0);

  return (
    <div className="hidden bg-[#102a43] text-white lg:block">
      <Container className="flex items-center justify-between py-2.5 text-xs font-medium">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 transition-colors hover:text-[#e8ba62]"
          >
            <FaPhoneAlt size={12} />
            <span>{phone}</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 transition-colors hover:text-[#e8ba62]"
          >
            <FaEnvelope size={12} />
            <span>{email}</span>
          </a>

          <span>{officeHours}</span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-all duration-200 hover:scale-110 hover:text-[#e8ba62]"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
