import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "@/components/common/Logo";
import { Button, Container } from "@/components/ui";
import { useSiteContent } from "@/features/site-content";
import { useWebsite } from "@/hooks/useWebsite";

export default function Navbar() {
  const { settings } = useWebsite();
  const { content } = useSiteContent();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappHref = useMemo(() => {
    const whatsapp = settings?.whatsapp?.trim();

    if (!whatsapp) {
      return "#";
    }

    // Remove spaces, +, -, () from phone number
    const phone = whatsapp.replace(/[^\d]/g, "");

    const company =
      settings?.company_name?.trim() || "AL ANSAR TOURS & TRAVELS";

    return `https://wa.me/${phone}?text=${encodeURIComponent(
      `Hello ${company}, I'd like to know more about your travel packages.`,
    )}`;
  }, [settings]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-2xl transition-all duration-300 ${
        isScrolled
          ? "border-slate-200/80 shadow-[0_10px_30px_-20px_rgba(16,42,67,0.45)]"
          : "border-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-18" : "h-22"
        }`}
      >
        <div className="transition-transform duration-300 hover:scale-105">
          <Logo />
        </div>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {content.navigation.items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="group relative py-2 font-medium"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "font-semibold text-[#102a43]"
                        : "text-slate-600 group-hover:text-[#102a43]"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#d9a441] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={whatsappHref}
            className={
              !settings?.whatsapp ? "pointer-events-none opacity-60" : ""
            }
          >
            {content.navigation.whatsappButtonLabel}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-full border border-slate-200 p-2 text-[#102a43] transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-screen border-t border-slate-200 bg-white shadow-lg"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4" aria-label="Mobile navigation">
          {content.navigation.items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 font-medium transition ${
                  isActive
                    ? "bg-[#102a43] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-4">
            <Button
              href={whatsappHref}
              className={`w-full ${
                !settings?.whatsapp ? "pointer-events-none opacity-60" : ""
              }`}
            >
              {content.navigation.whatsappButtonLabel}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
