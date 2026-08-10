import { useState } from "react";
import { Menu } from "lucide-react";

import Button from "@/shared/components/Button";

import Container from "@/website/components/common/Container";

import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
        <Container className="flex h-20 items-center justify-between">
          <Logo />

          <Navigation />

          <div className="hidden items-center gap-4 lg:flex">
            <Button>Book Now</Button>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
