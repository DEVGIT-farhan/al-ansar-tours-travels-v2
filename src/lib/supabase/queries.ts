import { supabase } from "./client";

export const db = {
  from(table: string) {
    return supabase.from(table);
  },
};