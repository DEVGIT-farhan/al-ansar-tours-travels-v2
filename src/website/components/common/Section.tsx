import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";
import Container from "./Container";

type SectionVariant = "default" | "muted" | "primary" | "dark";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  container?: boolean;
  variant?: SectionVariant;
}

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-white",
  muted: "bg-slate-50",
  primary: "bg-blue-50",
  dark: "bg-slate-900 text-white",
};

export default function Section({
  as: Component = "section",
  children,
  className,
  container = true,
  variant = "default",
  ...props
}: SectionProps) {
  const content = container ? <Container>{children}</Container> : children;

  return (
    <Component
      className={cn(
        "py-16 md:py-20 lg:py-24",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {content}
    </Component>
  );
}
