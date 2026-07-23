import Link from "next/link";
import { Bell, Search, SlidersHorizontal, UsersRound } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8">
        <Link href="/home" className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <UsersRound size={20} />
          </span>

          <div className="hidden sm:block">
            <p className="text-base font-bold tracking-tight text-slate-950">
              Companion Finder
            </p>

            <p className="text-xs text-slate-500">Find your people</p>
          </div>
        </Link>

        <div className="hidden max-w-xl flex-1 md:block">
          <label className="relative block">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search people, interests or gatherings"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Discovery preferences"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
          >
            <SlidersHorizontal size={18} />
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
          >
            <Bell size={18} />

            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full border-2 border-white bg-violet-500" />
          </button>

          <Link
            href="/profile"
            aria-label="Open profile"
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 text-sm font-bold text-blue-700 transition hover:scale-105 active:scale-95"
          >
            JL
          </Link>
        </div>
      </div>
    </header>
  );
}