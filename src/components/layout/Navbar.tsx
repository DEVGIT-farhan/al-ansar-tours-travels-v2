import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "@/components/common/Logo";
import { Button, Container } from "@/components/ui";
import { COMPANY } from "@/constants/COMPANY";
import { NAVIGATION } from "@/constants/NAVIGATION";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 20;
      setIsScrolled((prev) => (prev === next ? prev : next));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappHref = useMemo(
    () =>
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
        "Hello AL ANSAR TOURS & TRAVELS, I'd like to know more about your travel packages."
      )}`,
    []
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? "border-gray-200 shadow-lg"
          : "border-gray-100 shadow-sm"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        <div className="transition-transform duration-300 hover:scale-105">
          <Logo />
        </div>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {NAVIGATION.map((item) => (
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
                        ? "font-semibold text-[#0B3D91]"
                        : "text-gray-600 group-hover:text-[#0B3D91]"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#F4B400] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden transition-transform duration-300 hover:scale-105 lg:block">
          <Button href={whatsappHref}>WhatsApp</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 text-[#0B3D91] transition hover:bg-[#0B3D91]/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-screen border-t border-gray-200 bg-white shadow-lg"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4" aria-label="Mobile navigation">
          {NAVIGATION.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 font-medium transition ${
                  isActive
                    ? "bg-[#0B3D91] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-4">
            <Button href={whatsappHref} className="w-full">
              WhatsApp
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}