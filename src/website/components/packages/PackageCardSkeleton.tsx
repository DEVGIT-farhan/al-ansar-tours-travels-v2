export default function PackageCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-slate-200">
      <div className="aspect-4/3 bg-slate-200" />

      <div className="space-y-4 p-6">
        <div className="h-4 w-24 rounded bg-slate-200" />

        <div className="h-6 w-3/4 rounded bg-slate-200" />

        <div className="h-4 rounded bg-slate-200" />

        <div className="h-4 w-2/3 rounded bg-slate-200" />

        <div className="h-10 w-28 rounded bg-slate-200" />
      </div>
    </div>
  );
}
