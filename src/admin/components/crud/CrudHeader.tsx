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
    <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-gray-600">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}