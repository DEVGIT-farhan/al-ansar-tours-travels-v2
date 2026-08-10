import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_40px_-24px_rgba(16,42,67,0.35)] transition-all duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
