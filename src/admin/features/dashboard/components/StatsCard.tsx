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
  color = "#102A43",
}: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_35px_-25px_rgba(16,42,67,0.4)] transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-[#102a43]">{value}</h3>
        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
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
