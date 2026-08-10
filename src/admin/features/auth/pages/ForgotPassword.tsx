import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { auth } from "@/lib/supabase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      toast.error("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const redirectTo = new URL(
        "/admin/reset-password",
        window.location.origin,
      ).toString();

      const { error } = await auth.requestPasswordReset(
        trimmedEmail,
        redirectTo,
      );

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Check your email for a password reset link.");
    } catch {
      toast.error("Unable to send the reset link.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 to-blue-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#0B3D91]">Reset password</h1>

          <p className="mt-2 text-gray-500">
            We will email you a secure password reset link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Admin email
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20"
              placeholder="admin@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#0B3D91] py-3 font-semibold text-white transition hover:bg-[#082f70] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending reset link..." : "Send reset link"}
          </button>

          <Link
            to="/admin/login"
            className="block text-center text-sm font-medium text-[#0B3D91] transition hover:text-[#082f70]"
          >
            Back to login
          </Link>
        </form>
      </div>
    </div>
  );
}
