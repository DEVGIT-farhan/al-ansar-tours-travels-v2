import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";

import { auth } from "@/lib/supabase/auth";
import { useAuth } from "@/admin/hooks/useAuth";

export default function Login() {
  const { isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      toast.error("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await auth.signIn(email, password);

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Welcome back!");
    } catch {
      toast.error("Unable to login.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#102a43] px-4">
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#d9a441]/20 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full border border-white/10" />
      <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-white p-8 shadow-2xl sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102a43] font-black text-[#f4d28b]">
            AA
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#102a43]">
            AL ANSAR CMS
          </h1>

          <p className="mt-2 text-slate-500">Administrator Login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>

            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#102a43] focus:ring-2 focus:ring-[#d9a441]/25"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>

            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#102a43] focus:ring-2 focus:ring-[#d9a441]/25"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#102a43] py-3 font-semibold text-white shadow-lg shadow-[#102a43]/20 transition hover:-translate-y-0.5 hover:bg-[#163b5c] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          <Link
            to="/admin/forgot-password"
            className="block text-center text-sm font-semibold text-[#102a43] transition hover:text-[#9b6a18]"
          >
            Forgot password?
          </Link>
        </form>
      </div>
    </div>
  );
}
