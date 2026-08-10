import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_14px_38px_-30px_rgba(16,42,67,0.4)] sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-[#102a43]">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
        )}
      </div>

      <div className="space-y-6">{children}</div>
    </section>
  );
}
