import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-5 pb-36 pt-16">
      <section className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-9 text-center shadow-xl shadow-slate-900/5">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
          <Construction size={28} />
        </span>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          {title}
        </h1>

        <p className="mt-4 leading-7 text-slate-600">{description}</p>

        <Link
          href="/home"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          <ArrowLeft size={17} />
          Return home
        </Link>
      </section>
    </main>
  );
}