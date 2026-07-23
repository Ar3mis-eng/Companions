import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Discover compatible people",
    description:
      "Find people near your age who share your interests, availability and connection goals.",
  },
  {
    icon: CalendarDays,
    title: "Create real-life plans",
    description:
      "Turn conversations into activities, gatherings, friendly meetups and dates.",
  },
  {
    icon: MessageCircle,
    title: "Build genuine connections",
    description:
      "Chat only after connecting, without feeds, followers, likes or social pressure.",
  },
];

const connectionTypes = [
  "New friendships",
  "Activity companions",
  "Study partners",
  "Group gatherings",
  "Professional connections",
  "Dating",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Users size={22} />
            </span>

            <span className="text-xl font-bold tracking-tight">
              Companion Finder
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              How it works
            </a>

            <a
              href="#connections"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Connections
            </a>

            <a
              href="#safety"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Safety
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:block"
            >
              Sign in
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Join now
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.14),_transparent_34%)]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="absolute -left-32 top-28 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -right-36 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-300/30 blur-3xl" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Social connection beyond social media
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Meet people who are ready to{" "}
              <span className="text-blue-600">show up in real life.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Find friends, companions, groups and dates based on your age,
              interests, location and availability—without the endless feeds,
              followers and likes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Find your people
                <ArrowRight size={18} />
              </Link>

              <a
                href="#how-it-works"
                className="rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 font-semibold text-slate-800 backdrop-blur transition hover:border-slate-400 hover:bg-white"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-blue-600" />
                Safety-focused
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={17} className="text-blue-600" />
                Local connections
              </span>

              <span className="flex items-center gap-2">
                <HeartHandshake size={17} className="text-blue-600" />
                Real relationships
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200/60 to-violet-200/60 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    Discover
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-950">
                    People near you
                  </h2>
                </div>

                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600"
                  aria-label="Location preferences"
                >
                  <MapPin size={19} />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-700">
                      AM
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-slate-950">
                          Alex, 24
                        </h3>

                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                          92% match
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        3 km away · Coffee · Hiking · Photography
                      </p>
                    </div>
                  </div>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-lg font-bold text-violet-700">
                      JM
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-slate-950">
                          Jamie, 25
                        </h3>

                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                          Activity friend
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        5 km away · Food trips · Movies · Fitness
                      </p>
                    </div>
                  </div>
                </article>

                <article className="rounded-2xl bg-slate-950 p-5 text-white shadow-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-blue-300">
                        Suggested gathering
                      </p>

                      <h3 className="mt-2 text-xl font-semibold">
                        Weekend coffee meetup
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Saturday · 3:00 PM · 6 people interested
                      </p>
                    </div>

                    <CalendarDays className="shrink-0 text-blue-300" size={24} />
                  </div>

                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    View gathering
                  </button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            How it works
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            From discovery to a real connection
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The app is designed to move people away from endless scrolling and
            toward meaningful real-world experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} />
                  </span>

                  <span className="text-sm font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Connection types */}
      <section id="connections" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Your kind of connection
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find people for what matters to you.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Choose what type of connection you are looking for. Your
              discovery results will focus on people with compatible goals.
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Create your profile
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {connectionTypes.map((connection) => (
              <div
                key={connection}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-blue-400/40 hover:bg-white/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <HeartHandshake size={20} />
                </span>

                <span className="font-semibold">{connection}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="bg-blue-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-[3rem] border border-blue-200 bg-white shadow-xl shadow-blue-900/10">
              <ShieldCheck size={100} className="text-blue-600" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Designed with safety in mind
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Meet confidently, not carelessly.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Companion Finder is built around profile verification, private
              location controls, blocking, reporting and meetup safety tools.
              Exact locations should only be shared with confirmed attendees.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "18+ community",
                "Profile verification",
                "Block and report tools",
                "Private location controls",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-medium text-slate-700 shadow-sm"
                >
                  <ShieldCheck size={18} className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 lg:px-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-16 text-center text-white shadow-2xl shadow-blue-600/20 sm:px-12">
          <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-violet-400/30 blur-2xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Your next meaningful connection may be closer than you think.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Create your profile and start discovering people who are ready
              for real conversations and real experiences.
            </p>

            <Link
              href="/register"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Get started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <Link href="/" className="flex items-center gap-3 font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Users size={18} />
            </span>
            Companion Finder
          </Link>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <Link href="/about" className="hover:text-slate-950">
              About
            </Link>

            <Link href="/safety" className="hover:text-slate-950">
              Safety
            </Link>

            <Link
              href="/community-guidelines"
              className="hover:text-slate-950"
            >
              Community guidelines
            </Link>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Companion Finder
          </p>
        </div>
      </footer>
    </main>
  );
}