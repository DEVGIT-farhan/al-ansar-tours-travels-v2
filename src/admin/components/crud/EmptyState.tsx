import { Inbox } from "lucide-react";
import type { ReactNode } from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

export default function EmptyState({
  title = "No records found",
  description = "There is nothing to display yet.",
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-8 py-16 text-center">
      <div className="mb-4 rounded-full bg-gray-100 p-4">
        <Inbox size={48} className="text-gray-400" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 max-w-md text-gray-500">{description}</p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
