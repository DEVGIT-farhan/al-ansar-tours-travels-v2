import type { ReactNode } from "react";
import EmptyState from "./EmptyState";

export interface CrudColumn<T> {
  key: keyof T | string;
  title: string;
  render?: (row: T) => ReactNode;
  className?: string;
}

interface CrudTableProps<T> {
  columns: CrudColumn<T>[];
  data: T[];
  rowKey: keyof T;
}

export default function CrudTable<T>({
  columns,
  data,
  rowKey,
}: CrudTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_16px_45px_-30px_rgba(16,42,67,0.45)]">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-[#f7f4ed]">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.title}
                  className={`px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.1em] text-slate-600 ${column.className ?? ""}`}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length}>
                  <EmptyState />
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr
                  key={String(row[rowKey])}
                  className="border-t border-slate-100 transition hover:bg-[#fbfcfd]"
                >
                  {columns.map((column) => (
                    <td
                      key={column.title}
                      className={`px-6 py-4 text-sm text-slate-700 ${column.className ?? ""}`}
                    >
                      {column.render
                        ? column.render(row)
                        : String(row[column.key as keyof T] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
