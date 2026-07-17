import type { ReactNode } from "react";
import Container from "./Container";
import { cn } from "../../lib/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24", className)}
      data-aos="fade-up"
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}