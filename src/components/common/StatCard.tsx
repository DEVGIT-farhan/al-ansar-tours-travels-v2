interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur">
      <h3 className="text-3xl font-bold text-[#0B3D91]">
        {value}
      </h3>

      <p className="mt-2 text-gray-600">
        {label}
      </p>
    </div>
  );
}