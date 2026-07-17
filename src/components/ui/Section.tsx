import type { ReactNode } from "react";
import Container from "./Container";
import clsx from "clsx";

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
      className={clsx("py-24", className)}
      data-aos="fade-up"
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}