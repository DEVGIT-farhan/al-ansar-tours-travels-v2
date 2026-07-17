import clsx from "clsx";
import type { ReactNode } from "react";

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
      className={clsx(
        "mx-auto max-w-7xl px-6",
        className
      )}
    >
      {children}
    </div>
  );
}