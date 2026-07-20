import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const variants = {
  primary: "bg-[#0B3D91] text-white hover:bg-[#082d6d]",
  secondary: "bg-[#F4B400] text-black hover:bg-yellow-500",
  outline:
    "border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...buttonProps
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0B3D91] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}