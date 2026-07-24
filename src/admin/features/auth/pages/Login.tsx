import { useState } from "react";
import { Navigate } from "react-router-dom";
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

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
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
      const { error } = await auth.signIn(
        email,
        password
      );

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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#0B3D91]">
            AL ANSAR CMS
          </h1>

          <p className="mt-2 text-gray-500">
            Administrator Login
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#0B3D91] py-3 font-semibold text-white transition hover:bg-[#082f70] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Signing in..."
              : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}