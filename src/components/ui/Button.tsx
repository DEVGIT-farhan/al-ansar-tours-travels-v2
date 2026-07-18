import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...buttonProps
}: ButtonProps) {
  const classes = {
    primary:
      "bg-[#0B3D91] hover:bg-[#082d6d] text-white",
    secondary:
      "bg-[#F4B400] hover:bg-yellow-500 text-black",
    outline:
      "border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white",
  };

  const buttonClasses = `inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${classes[variant]} ${className}`;

  // External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {children}
      </a>
    );
  }

  // Internal navigation
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // HTML button (forms)
  return (
    <button className={buttonClasses} {...buttonProps}>
      {children}
    </button>
  );
}