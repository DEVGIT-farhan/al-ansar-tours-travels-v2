import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/constants/COMPANY";
import { Container } from "@/components/ui";
import { companyLinks, quickLinks } from "../data/footerLinks";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

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

  <hr className="my-6 border-blue-800" />

  <ul className="space-y-2 text-sm text-blue-100">
    <li>✔ Trusted Travel Partner</li>
    <li>✔ Umrah & Hajj Specialists</li>
    <li>✔ Tourist & Visit Visas</li>
    <li>✔ Flight Ticket Booking</li>
    <li>✔ Holiday Packages</li>
  </ul>
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
  <a
    href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
    className="flex items-start gap-3 transition hover:text-[#F4B400]"
  >
    <Phone size={18} />
    <span>{COMPANY.phone}</span>
  </a>

  <a
    href={`mailto:${COMPANY.email}`}
    className="flex items-start gap-3 transition hover:text-[#F4B400]"
  >
    <Mail size={18} />
    <span>{COMPANY.email}</span>
  </a>

  <a
    href="https://maps.google.com/?q=125+Dr+Besant+Road+Royapettah+Chennai+600014"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-3 transition hover:text-[#F4B400]"
  >
    <MapPin size={18} />
    <span>
      {COMPANY.address.line1}, {COMPANY.address.city}
    </span>
  </a>
</div>

<div className="mt-8">
  <h4 className="mb-5 text-lg font-semibold">
    Follow Us
  </h4>

  <div className="flex gap-4">
    {COMPANY.social.facebook && (
      <a
        href={COMPANY.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white/10 p-3 transition hover:bg-[#F4B400] hover:text-black"
      >
        <FaFacebookF />
      </a>
    )}

    {COMPANY.social.instagram && (
      <a
        href={COMPANY.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white/10 p-3 transition hover:bg-[#F4B400] hover:text-black"
      >
        <FaInstagram />
      </a>
    )}

    {COMPANY.social.youtube && (
      <a
        href={COMPANY.social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white/10 p-3 transition hover:bg-[#F4B400] hover:text-black"
      >
        <FaYoutube />
      </a>
    )}
  </div>
</div>
          </div>
        </div>

        <div className="border-t border-blue-800 py-6 text-center text-sm text-blue-200">
  <p>
    © {new Date().getFullYear()} AL ANSAR TOURS & TRAVELS. All Rights Reserved.
  </p>

  <p className="mt-2 text-xs text-blue-300">
    Designed & Developed with ❤️ in Chennai, India.
  </p>
</div>
      </Container>
    </footer>
  );
}