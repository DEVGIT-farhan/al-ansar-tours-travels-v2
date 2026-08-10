import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import Container from "@/website/components/common/Container";

export default function TopBar() {
  return (
    <div className="hidden bg-slate-900 text-sm text-white lg:block">
      <Container className="flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 transition-colors hover:text-amber-400"
          >
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </a>

          <a
            href="mailto:info@alansartravels.com"
            className="flex items-center gap-2 transition-colors hover:text-amber-400"
          >
            <Mail size={14} />
            <span>info@alansartravels.com</span>
          </a>

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Chennai, India</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-amber-400">
            <FaFacebookF size={16} />
          </a>

          <a href="#" className="hover:text-amber-400">
            <FaInstagram size={16} />
          </a>

          <a href="#" className="hover:text-amber-400">
            <FaYoutube size={16} />
          </a>
        </div>
      </Container>
    </div>
  );
}
