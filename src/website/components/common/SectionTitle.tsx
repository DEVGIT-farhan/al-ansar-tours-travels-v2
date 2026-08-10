import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type Alignment = "left" | "center";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Alignment;
  action?: ReactNode;
  className?: string;
}

const alignmentClasses: Record<Alignment, string> = {
  left: "text-left",
  center: "text-center",
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  action,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        align === "center" && "items-center",
        align === "left" && "items-start",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-700">
          {eyebrow}
        </span>
      )}

      <div className={cn("max-w-3xl", alignmentClasses[align])}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}
