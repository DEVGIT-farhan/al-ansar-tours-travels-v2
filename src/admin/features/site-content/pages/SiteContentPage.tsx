import { useState } from "react";

import ContentEditor from "../components/ContentEditor";
import type { ContentObject } from "../components/ContentEditor";
import { useSiteContent, useUpdateSiteContent } from "@/features/site-content";
import type { SiteContent } from "@/features/site-content";

type SiteContentSection = keyof SiteContent;

interface SiteContentPageProps {
  section: SiteContentSection;
  title: string;
  description: string;
  hiddenFields?: readonly string[];
}

function cloneContent<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export default function SiteContentPage({
  section,
  title,
  description,
  hiddenFields,
}: SiteContentPageProps) {
  const { content, error } = useSiteContent();
  const updateSiteContent = useUpdateSiteContent();
  const [draftOverride, setDraftOverride] = useState<ContentObject | null>(
    null,
  );
  const draft =
    draftOverride ?? (cloneContent(content[section]) as ContentObject);

  function handleSave() {
    updateSiteContent.mutate(
      {
        ...content,
        [section]: draft,
      } as SiteContent,
      {
        onSuccess: () => setDraftOverride(null),
      },
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 rounded-3xl border border-[#d9a441]/25 bg-[#fff8e9] p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b6a18]">
            Live website editor
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#102a43]">
            {title}
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            {description}
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={updateSiteContent.isPending}
          className="rounded-xl bg-[#102a43] px-6 py-3 font-semibold text-white shadow-lg shadow-[#102a43]/20 transition hover:-translate-y-0.5 hover:bg-[#163b5c] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {updateSiteContent.isPending ? "Publishing..." : "Publish changes"}
        </button>
      </div>

      {error && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          The CMS database migration has not been applied yet. You can review
          the fields now, but publishing will be available after Supabase is
          restored and the migration runs.
        </div>
      )}

      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_42px_-32px_rgba(16,42,67,0.45)] sm:p-8">
        <ContentEditor
          value={draft}
          onChange={(value) => setDraftOverride(value)}
          hiddenFields={hiddenFields}
        />
      </div>
    </div>
  );
}
