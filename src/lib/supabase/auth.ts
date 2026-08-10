import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

import { supabase } from "./client";

export const auth = {
  signIn(email: string, password: string) {
    return supabase.auth.signInWithPassword({
      email,
      password,
    });
  },

  requestPasswordReset(email: string, redirectTo: string) {
    return supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });
  },

  updatePassword(password: string) {
    return supabase.auth.updateUser({
      password,
    });
  },

  signOut() {
    return supabase.auth.signOut();
  },

  getSession() {
    return supabase.auth.getSession();
  },

  getUser() {
    return supabase.auth.getUser();
  },

  onAuthStateChange(
    callback: (event: AuthChangeEvent, session: Session | null) => void,
  ) {
    return supabase.auth.onAuthStateChange(callback);
  },
};
