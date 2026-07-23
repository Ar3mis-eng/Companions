import Link from "next/link";
import { AuthBackground } from "@/components/layout/auth-background";

export default function RegisterPage() {
  return (
    <AuthBackground
      title="Meet people who are looking for the same kind of connection."
      description="Create your profile, share your interests and discover people who are ready for friendships, activities, gatherings and dates."
    >
      <div className="rounded-3xl border border-white/80 bg-white/85 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Join the community
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Create your account
          </h1>

          <p className="mt-3 leading-7 text-slate-600">
            Start meeting people who share your interests and goals.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Display name
            </label>

            <input
              id="name"
              type="text"
              placeholder="How should people know you?"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

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
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a secure password"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-slate-500">
              Use at least 8 characters with a mix of letters and numbers.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <input
              id="age-confirmation"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />

            <label
              htmlFor="age-confirmation"
              className="text-sm leading-6 text-slate-600"
            >
              I confirm that I am at least 18 years old and agree to the
              community guidelines.
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
          >
            Create account
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthBackground>
  );
}