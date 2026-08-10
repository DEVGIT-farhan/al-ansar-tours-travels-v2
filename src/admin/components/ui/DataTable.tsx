import type { ReactNode } from "react";
import clsx from "clsx";

interface Column<T> {
  key: keyof T | string;
  header: ReactNode;
  render?: (row: T) => ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}

export default function DataTable<T>({
  columns,
  data,
  loading = false,
  emptyMessage = "No records found.",
  className,
}: DataTableProps<T>) {
  if (loading) {
    return <div className="py-10 text-center text-gray-500">Loading...</div>;
  }

  if (!data.length) {
    return (
      <div className="py-10 text-center text-gray-500">{emptyMessage}</div>
    );
  }

  return (
    <div
      className={clsx(
        "overflow-hidden rounded-xl border border-gray-200",
        className,
      )}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={clsx(
                    "px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500",
                    column.className,
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className={clsx(
                      "px-6 py-4 text-sm text-gray-700",
                      column.className,
                    )}
                  >
                    {column.render
                      ? column.render(row)
                      : String(row[column.key as keyof T] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
