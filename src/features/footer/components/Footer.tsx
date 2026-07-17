import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/constants/COMPANY";
import { Container } from "@/components/ui";
import { companyLinks, quickLinks } from "../data/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-[#0B3D91] text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold">
              AL ANSAR TOURS & TRAVELS
            </h3>

            <p className="mt-4 text-sm leading-7 text-blue-100">
              Your trusted travel partner for Umrah, visa assistance,
              international tours and holiday packages.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Company
            </h4>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-blue-100 transition hover:text-[#F4B400]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-blue-100 transition hover:text-[#F4B400]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Contact
            </h4>

            <div className="space-y-4 text-blue-100">
              <div className="flex items-start gap-3">
                <Phone size={18} />
                <span>{COMPANY.phone}</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} />
                <span>{COMPANY.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span>{COMPANY.address.line1}, {COMPANY.address.city}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 py-6 text-center text-sm text-blue-200">
          © {new Date().getFullYear()} AL ANSAR TOURS & TRAVELS. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}