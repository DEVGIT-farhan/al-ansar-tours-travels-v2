import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden gap-8 font-medium md:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Button>WhatsApp</Button>
      </div>
    </header>
  );
}