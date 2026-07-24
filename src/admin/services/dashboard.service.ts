import { supabase } from "@/lib/supabase/client";

export async function getDashboardStats() {
  const [
    packages,
    services,
    destinations,
    gallery,
    enquiries,
  ] = await Promise.all([
    supabase.from("packages").select("*", { count: "exact", head: true }),
    supabase.from("services").select("*", { count: "exact", head: true }),
    supabase.from("destinations").select("*", { count: "exact", head: true }),
    supabase.from("gallery").select("*", { count: "exact", head: true }),
    supabase.from("contact_messages").select("*", { count: "exact", head: true }),
  ]);

  return {
    packages: packages.count ?? 0,
    services: services.count ?? 0,
    destinations: destinations.count ?? 0,
    gallery: gallery.count ?? 0,
    enquiries: enquiries.count ?? 0,
  };
}