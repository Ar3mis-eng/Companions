import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
          Real connections beyond the screen
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          Find people who are ready to meet, connect and experience life.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Discover compatible friends, activity companions, groups and dates
          based on your interests, age, availability and location.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create an account
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Sign in
          </Link>
        </div>
      </section>
    </main>
  );
}