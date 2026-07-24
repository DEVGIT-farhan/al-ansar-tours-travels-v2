import type { IconType } from "react-icons";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: IconType;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color = "#0B3D91",
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>
        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl text-white"
          style={{
            backgroundColor: color,
          }}
        >
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
}