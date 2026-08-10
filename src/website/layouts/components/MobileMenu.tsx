import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

import Button from "@/shared/components/Button";
import { cn } from "@/lib/cn";

import { navigation } from "@/website/config/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose(): void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <aside
        aria-label="Mobile Navigation"
        className={cn(
          "fixed right-0 top-0 z-50 flex h-screen w-80 max-w-full flex-col bg-white shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col p-5">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-100",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-auto pt-6">
            <Button fullWidth>Book Now</Button>
          </div>
        </nav>
      </aside>
    </>
  );
}
