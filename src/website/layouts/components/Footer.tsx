import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Container from "@/website/components/common/Container";
import Logo from "./Logo";
import { navigation } from "@/website/config/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Your trusted partner for Umrah, Hajj, Visa Services, International
              Tours and Holiday Packages.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-lg bg-slate-800 p-2 hover:bg-blue-600"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="rounded-lg bg-slate-800 p-2 hover:bg-pink-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-lg bg-slate-800 p-2 hover:bg-blue-500"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Services</h3>

            <ul className="space-y-3">
              <li>International Tour Packages</li>
              <li>Domestic Tour Packages</li>
              <li>Visa Assistance</li>
              <li>Flight Booking</li>
              <li>Hotel Booking</li>
              <li>Hajj & Umrah</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span>Chennai, Tamil Nadu, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@alansartravels.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {year} AL ANSAR TOURS & TRAVELS. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
