interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/95 p-8 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="text-4xl font-extrabold tracking-tight text-[#0B3D91]">
        {value}
      </h3>

      <p className="mt-3 text-base font-medium text-gray-600">
        {label}
      </p>
    </div>
  );
}