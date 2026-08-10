interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/90 p-7 shadow-[0_18px_40px_-25px_rgba(16,42,67,0.45)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-4xl font-extrabold tracking-tight text-[#102a43]">
        {value}
      </h3>

      <p className="mt-3 text-sm font-semibold text-slate-600">{label}</p>
    </div>
  );
}
