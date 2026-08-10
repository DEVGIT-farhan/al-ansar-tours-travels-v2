import SettingsForm from "../components/SettingsForm";
import { useSettings } from "../hooks/useSettings";
import { CheckCircle2, Palette, Settings2 } from "lucide-react";

export default function SettingsPage() {
  const { data: settings, isLoading, error } = useSettings();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#102a43] border-t-transparent" />

          <p className="mt-4 text-slate-500">Loading settings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
        <h2 className="text-lg font-semibold text-red-700">
          Failed to load settings
        </h2>

        <p className="mt-2 text-red-600">{(error as Error).message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl bg-[#102a43] p-7 text-white shadow-xl shadow-[#102a43]/15 sm:p-9">
        <div className="absolute -right-8 -top-14 h-48 w-48 rounded-full bg-[#d9a441]/25 blur-2xl" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f4d28b]">
              <Settings2 className="h-4 w-4" /> Website control centre
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Website Settings
            </h1>
            <p className="mt-3 leading-7 text-slate-300">
              Manage your company identity, contact channels, branding, search
              visibility and weekly office hours.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-slate-100 backdrop-blur">
            <CheckCircle2 className="h-4 w-4 text-[#f4d28b]" /> Changes publish
            when saved
          </div>
        </div>
      </section>

      <div className="rounded-3xl border border-slate-200/80 bg-[#fdfcf9] p-4 shadow-[0_16px_45px_-32px_rgba(16,42,67,0.4)] sm:p-6">
        <div className="mb-5 flex items-center gap-3 rounded-2xl bg-[#fff8e9] px-4 py-3 text-sm text-[#725017]">
          <Palette className="h-5 w-5" /> Use these controls to keep every
          public touchpoint aligned with your brand.
        </div>
        <SettingsForm settings={settings ?? null} />
      </div>
    </div>
  );
}
