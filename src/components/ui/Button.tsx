import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/cn";

interface BaseProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variants = {
  primary:
    "bg-[#102a43] text-white shadow-lg shadow-[#102a43]/20 hover:-translate-y-0.5 hover:bg-[#163b5c] hover:shadow-xl",
  secondary:
    "bg-[#d9a441] text-[#102a43] shadow-lg shadow-[#d9a441]/20 hover:-translate-y-0.5 hover:bg-[#e8ba62] hover:shadow-xl",
  outline:
    "border border-[#102a43]/20 bg-white/70 text-[#102a43] hover:-translate-y-0.5 hover:border-[#102a43] hover:bg-[#102a43] hover:text-white",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d9a441] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
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
    <button type={props.type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
