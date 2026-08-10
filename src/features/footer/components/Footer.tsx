import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Container } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";
import { useWebsite } from "@/hooks/useWebsite";

export default function Footer() {
  const { settings } = useWebsite();
  const { content } = useSiteContent();
  const footer = content.footer;
  const companyName =
    settings?.company_name?.trim() || "AL ANSAR TOURS & TRAVELS";
  const tagline = settings?.tagline?.trim() || "Your Trusted Travel Partner";
  const phone = settings?.phone?.trim() || "";
  const email = settings?.email?.trim() || "";
  const address = settings?.address?.trim() || "";
  const maps = settings?.google_maps_url?.trim() || "#";
  const socials = [
    {
      href: settings?.facebook_url ?? "",
      icon: FaFacebookF,
      label: "Facebook",
    },
    {
      href: settings?.instagram_url ?? "",
      icon: FaInstagram,
      label: "Instagram",
    },
    { href: settings?.youtube_url ?? "", icon: FaYoutube, label: "YouTube" },
    { href: settings?.twitter_url ?? "", icon: FaTwitter, label: "Twitter" },
    {
      href: settings?.linkedin_url ?? "",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
  ].filter((item) => item.href.trim().length > 0);

  return (
    <footer className="relative overflow-hidden bg-[#102a43] text-white">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#d9a441]/10 blur-3xl" />
      <Container>
        <div className="relative grid gap-10 py-18 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">{companyName}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{tagline}</p>

            <hr className="my-6 border-white/10" />

            <ul className="space-y-2 text-sm text-slate-300">
              {footer.highlights.map((highlight) => (
                <li key={highlight}>✓ {highlight}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">
              {footer.companyHeading}
            </h4>
            <nav aria-label="Company Links">
              <ul className="space-y-3">
                {footer.companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-300 transition hover:text-[#e8ba62]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">
              {footer.quickLinksHeading}
            </h4>
            <nav aria-label="Quick Links">
              <ul className="space-y-3">
                {footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-300 transition hover:text-[#e8ba62]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold">
              {footer.contactHeading}
            </h4>
            <div className="space-y-4 text-slate-300">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-3 transition hover:text-[#e8ba62]"
                >
                  <Phone size={18} />
                  <span>{phone}</span>
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-3 transition hover:text-[#e8ba62]"
                >
                  <Mail size={18} />
                  <span>{email}</span>
                </a>
              )}

              {address && (
                <a
                  href={maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition hover:text-[#e8ba62]"
                >
                  <MapPin size={18} />
                  <span>{address}</span>
                </a>
              )}
            </div>

            {socials.length > 0 && (
              <div className="mt-8">
                <h4 className="mb-5 text-lg font-semibold">
                  {footer.followHeading}
                </h4>
                <div className="flex gap-4">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="rounded-full border border-white/10 bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9a441] hover:text-[#102a43]"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative border-t border-white/10 py-6 text-center text-sm text-slate-300">
          <p>
            © {new Date().getFullYear()} {companyName}. All Rights Reserved.
          </p>
          <p className="mt-2 text-xs text-slate-400">{tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
