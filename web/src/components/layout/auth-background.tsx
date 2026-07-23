import type { ReactNode } from "react";
import Link from "next/link";
import { ShieldCheck, Sparkles, Users } from "lucide-react";

interface AuthBackgroundProps {
  children: ReactNode;
  title: string;
  description: string;
}

export function AuthBackground({
  children,
  title,
  description,
}: AuthBackgroundProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.14),_transparent_35%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Decorative blurred shapes */}
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        {/* Left introduction */}
        <section className="hidden lg:block">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-xl font-bold text-slate-950"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Users size={22} />
            </span>

            Companion Finder
          </Link>

          <div className="mt-14 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Real connections beyond the screen
            </span>

            <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight text-slate-950">
              {title}
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-10 grid max-w-lg gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/80 bg-white/65 p-5 shadow-sm backdrop-blur-xl">
                <Users className="text-blue-600" size={23} />

                <h2 className="mt-4 font-semibold text-slate-950">
                  Meaningful matches
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Meet people based on interests, age, availability and goals.
                </p>
              </div>

              <div className="rounded-2xl border border-white/80 bg-white/65 p-5 shadow-sm backdrop-blur-xl">
                <ShieldCheck className="text-blue-600" size={23} />

                <h2 className="mt-4 font-semibold text-slate-950">
                  Safer connections
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Built around trusted profiles, reporting and safe meetups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form area */}
        <section className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-8 flex items-center justify-center gap-3 text-xl font-bold text-slate-950 lg:hidden"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Users size={20} />
              </span>

              Companion Finder
            </Link>

            {children}
          </div>
        </section>
      </div>
    </main>
  );
}