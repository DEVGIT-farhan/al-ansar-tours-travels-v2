import clsx from "clsx";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl bg-white shadow-sm transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}