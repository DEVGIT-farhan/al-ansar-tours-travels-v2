import { Link } from "react-router-dom";

import { cn } from "@/lib/cn";

interface LogoProps {
  logoUrl?: string;
  companyName?: string;
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({
  logoUrl,
  companyName = "AL ANSAR TOURS & TRAVELS",
  variant = "dark",
  className,
}: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label={companyName}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={companyName}
          className="h-12 w-auto object-contain"
        />
      ) : (
        <div className="flex flex-col">
          <span
            className={cn(
              "text-xl font-bold tracking-tight",
              variant === "dark" ? "text-slate-900" : "text-white",
            )}
          >
            AL ANSAR
          </span>

          <span
            className={cn(
              "text-xs font-medium uppercase tracking-[0.2em]",
              variant === "dark" ? "text-slate-500" : "text-slate-300",
            )}
          >
            Tours & Travels
          </span>
        </div>
      )}
    </Link>
  );
}
