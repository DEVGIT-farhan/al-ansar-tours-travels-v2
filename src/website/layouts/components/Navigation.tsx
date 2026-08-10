import { NavLink } from "react-router-dom";

import { cn } from "@/lib/cn";
import { navigation } from "@/website/config/navigation";

export default function Navigation() {
  return (
    <nav
      aria-label="Main Navigation"
      className="hidden items-center gap-8 lg:flex"
    >
      {navigation.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.href === "/"}
          className={({ isActive }) =>
            cn(
              "text-sm font-medium transition-colors duration-200",
              isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600",
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
