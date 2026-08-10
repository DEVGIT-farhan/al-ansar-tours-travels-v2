import type { ReactNode } from "react";

interface CrudHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function CrudHeader({
  title,
  description,
  action,
}: CrudHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-7 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
          Content management
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[#102a43]">
          {title}
        </h1>

        {description && <p className="mt-2 text-slate-600">{description}</p>}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
