import { supabase } from "@/lib/supabase/client";

import type { SiteContent } from "./defaults";

const SITE_CONTENT_KEY = "site";

interface SiteContentRow {
  key: string;
  content: Partial<SiteContent>;
}

export async function getSiteContent(): Promise<Partial<SiteContent> | null> {
  const { data, error } = await supabase
    .from("site_content")
    .select("key, content")
    .eq("key", SITE_CONTENT_KEY)
    .maybeSingle<SiteContentRow>();

  if (error) {
    throw error;
  }

  return data?.content ?? null;
}

export async function updateSiteContent(
  content: SiteContent,
): Promise<Partial<SiteContent>> {
  const { data, error } = await supabase
    .from("site_content")
    .upsert(
      {
        key: SITE_CONTENT_KEY,
        content,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" },
    )
    .select("content")
    .single<Pick<SiteContentRow, "content">>();

  if (error) {
    throw error;
  }

  return data.content;
}
