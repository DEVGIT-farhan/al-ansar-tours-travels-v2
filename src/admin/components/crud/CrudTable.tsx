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
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.title}
                  className={`px-6 py-4 text-left text-sm font-semibold text-gray-700 ${column.className ?? ""}`}
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
                  className="border-t hover:bg-gray-50"
                >
                  {columns.map((column) => (
                    <td
                      key={column.title}
                      className={`px-6 py-4 text-sm ${column.className ?? ""}`}
                    >
                      {column.render
                        ? column.render(row)
                        : String(
                            row[
                              column.key as keyof T
                            ] ?? ""
                          )}
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