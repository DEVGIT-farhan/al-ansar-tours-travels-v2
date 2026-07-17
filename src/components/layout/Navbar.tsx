import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";
import Button from "../ui/Button";
import { company } from "../../data/company";
import Logo from "../common/Logo";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

       <nav className="hidden gap-8 font-medium md:flex">{navigation.map((item) => (
         <NavLink key={item.path} to={item.path}className={({ isActive }) => `transition-colors duration-300 ${ isActive ? "font-bold text-[#0B3D91]"  : "text-gray-600 transition hover:text-[#0B3D91]"}`}>
          {item.label}
          </NavLink>))}
        </nav>

        <Button href={`https://wa.me/${company.whatsapp}`}>WhatsApp</Button>
      </div>
    </header>
  );
}