import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";

import { auth } from "@/lib/supabase/auth";

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      const {
        data: { session },
      } = await auth.getSession();

      setUser(session?.user ?? null);
      setLoading(false);
    }

    loadSession();

    const {
      data: { subscription },
    } = auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    isAuthenticated: user !== null,
  };
}