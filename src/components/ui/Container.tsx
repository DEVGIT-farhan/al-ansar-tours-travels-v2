import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl px-6",
        className
      )}
    >
      {children}
    </div>
  );
}