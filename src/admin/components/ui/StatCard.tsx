import type { IconType } from "react-icons";

import AdminCard from "./AdminCard";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: IconType;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "#0B3D91",
}: StatCardProps) {
  return (
    <AdminCard className="transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h3 className="mt-2 text-4xl font-bold">{value}</h3>
        </div>

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
          style={{ backgroundColor: color }}
        >
          <Icon size={30} />
        </div>
      </div>
    </AdminCard>
  );
}
