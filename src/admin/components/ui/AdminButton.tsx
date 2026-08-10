import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface AdminButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variants = {
  primary:
    "bg-[#102a43] text-white shadow-lg shadow-[#102a43]/15 hover:-translate-y-0.5 hover:bg-[#163b5c] focus:ring-[#d9a441]",
  secondary:
    "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#102a43] focus:ring-slate-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export default function AdminButton({
  children,
  loading = false,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: AdminButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {!loading && leftIcon}

      {loading ? "Loading..." : children}

      {!loading && rightIcon}
    </button>
  );
}
