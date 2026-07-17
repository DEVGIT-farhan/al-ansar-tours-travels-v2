import { NavLink } from "react-router-dom";
import Logo from "@/components/common/Logo";
import { Button, Container } from "@/components/ui";
import { COMPANY } from "@/constants/COMPANY";
import { NAVIGATION } from "@/constants/NAVIGATION";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
  <Container className="flex h-20 items-center justify-between">
    <Logo />

       <nav className="hidden gap-8 font-medium md:flex">{NAVIGATION.map((item) => (
         <NavLink key={item.href} to={item.href} className={({ isActive }) => `transition-colors duration-300 ${ isActive ? "font-bold text-[#0B3D91]"  : "text-gray-600 transition hover:text-[#0B3D91]"}`}>
          {item.label}
          </NavLink>))}
        </nav>

        <Button
  href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Hello AL ANSAR TOURS & TRAVELS, I'd like to know more about your travel packages."
  )}`}
>
  WhatsApp
</Button>
      </Container>
    </header>
  );
}