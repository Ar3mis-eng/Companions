import Link from "next/link";
import { AuthBackground } from "@/components/layout/auth-background";

export default function LoginPage() {
  return (
    <AuthBackground
      title="Reconnect with people who make life more meaningful."
      description="Continue discovering friends, activity companions, groups and dates who are ready to build genuine real-world connections."
    >
      <div className="rounded-3xl border border-white/80 bg-white/85 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Welcome back
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Sign in to your account
          </h1>

          <p className="mt-3 leading-7 text-slate-600">
            Continue building meaningful connections beyond the screen.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Forgot password?
              </Link>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
          >
            Sign in
          </button>
        </form>

        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            New here?
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <Link
          href="/register"
          className="flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3.5 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
        >
          Create a new account
        </Link>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          By continuing, you agree to our community guidelines and safety
          policies.
        </p>
      </div>
    </AuthBackground>
  );
}