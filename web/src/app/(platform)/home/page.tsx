"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  Clock3,
  Heart,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import { useCallback, useState } from "react";

import { PostDetailsModal } from "@/components/platform/post-details-modal";
import type { FeedPost } from "@/types/post";

const quickPlans = [
  {
    title: "Coffee",
    emoji: "☕",
    detail: "12 nearby",
    background: "from-amber-100 to-orange-50",
  },
  {
    title: "Food trip",
    emoji: "🍜",
    detail: "8 nearby",
    background: "from-rose-100 to-pink-50",
  },
  {
    title: "Weekend hike",
    emoji: "🥾",
    detail: "5 groups",
    background: "from-emerald-100 to-green-50",
  },
  {
    title: "Study session",
    emoji: "📚",
    detail: "9 nearby",
    background: "from-blue-100 to-sky-50",
  },
  {
    title: "Movie night",
    emoji: "🎬",
    detail: "6 plans",
    background: "from-violet-100 to-purple-50",
  },
];

const posts: FeedPost[] = [
  {
    id: 1,
    user: "Mika Santos",
    age: 24,
    initials: "MS",
    avatarClass: "from-rose-200 to-orange-100 text-rose-700",
    time: "18 minutes ago",
    location: "Matina, Davao City",
    category: "Weekend plan",
    title: "Looking for coffee and art gallery companions",
    description:
      "Planning a relaxed Saturday afternoon around the city. Coffee first, then a small local gallery. Friendly conversations and no pressure.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    tags: ["Coffee", "Art", "New friends"],
    likes: 42,
    comments: 8,
    match: "94% match",
  },
  {
    id: 2,
    user: "Adrian Flores",
    age: 25,
    initials: "AF",
    avatarClass: "from-blue-200 to-cyan-100 text-blue-700",
    time: "44 minutes ago",
    location: "Lanang, Davao City",
    category: "Activity companion",
    title: "Casual weekend cycling group",
    description:
      "Beginner-friendly ride this Sunday morning. We will keep a comfortable pace, stop for breakfast and avoid competitive racing.",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=80",
    tags: ["Cycling", "Breakfast", "Outdoors"],
    likes: 31,
    comments: 5,
    match: "Activity match",
  },
  {
    id: 3,
    user: "Dana Lim",
    age: 23,
    initials: "DL",
    avatarClass: "from-violet-200 to-fuchsia-100 text-violet-700",
    time: "1 hour ago",
    location: "Bajada, Davao City",
    category: "New connection",
    title: "Anyone interested in a quiet co-working afternoon?",
    description:
      "I need to finish a design project but would enjoy having friendly company. We can work independently and take snack breaks.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Design", "Study", "Co-working"],
    likes: 57,
    comments: 13,
    match: "89% match",
  },
  {
    id: 4,
    user: "Carlo Reyes",
    age: 26,
    initials: "CR",
    avatarClass: "from-emerald-200 to-teal-100 text-emerald-700",
    time: "2 hours ago",
    location: "Toril, Davao City",
    category: "Group gathering",
    title: "Small beach gathering next weekend",
    description:
      "Keeping the group small and comfortable. Bring food to share, games or just yourself. Exact location will be shared with confirmed members.",
    image:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1200&q=80",
    tags: ["Beach", "Group", "Weekend"],
    likes: 76,
    comments: 19,
    match: "6 spots left",
  },
];

const suggestedPeople = [
  {
    name: "Jamie, 25",
    detail: "Photography · Coffee",
    initials: "JM",
  },
  {
    name: "Alex, 24",
    detail: "Gaming · Food trips",
    initials: "AM",
  },
  {
    name: "Rina, 23",
    detail: "Books · Hiking",
    initials: "RL",
  },
];

export default function HomePage() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set());
  const [selectedPost, setSelectedPost] = useState<FeedPost | null>(null);

  const closeSelectedPost = useCallback(() => {
    setSelectedPost(null);
    }, []);

  function toggleLike(postId: number) {
    setLikedPosts((current) => {
      const next = new Set(current);

      if (next.has(postId)) {
        next.delete(postId);
      } else {
        next.add(postId);
      }

      return next;
    });
  }

  function toggleSave(postId: number) {
    setSavedPosts((current) => {
      const next = new Set(current);

      if (next.has(postId)) {
        next.delete(postId);
      } else {
        next.add(postId);
      }

      return next;
    });
  }

  return (
    <main className="pb-36">
      <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
        <section className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Welcome back, John
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              What is happening nearby?
            </h1>

            <p className="mt-2 text-slate-600">
              Discover people and plans designed for real-world connection.
            </p>
          </div>

          <Link
            href="/create"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:mt-0"
          >
            <Plus size={17} />
            Create a plan
          </Link>
        </section>

        {/* Quick plans */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold text-slate-950">Explore by activity</h2>

            <button
              type="button"
              className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              See all
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-3">
            {quickPlans.map((plan) => (
              <button
                key={plan.title}
                type="button"
                className={[
                  "group min-w-36 rounded-3xl border border-white bg-gradient-to-br p-4 text-left",
                  "shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95",
                  plan.background,
                ].join(" ")}
              >
                <span className="text-3xl transition duration-300 group-hover:scale-110">
                  {plan.emoji}
                </span>

                <p className="mt-4 font-bold text-slate-950">{plan.title}</p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  {plan.detail}
                </p>
              </button>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_310px]">
          {/* Feed */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-950">Your discovery feed</p>

                <p className="mt-1 text-sm text-slate-500">
                  Selected using your interests and preferences
                </p>
              </div>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
              >
                <Sparkles size={18} />
              </button>
            </div>

            <div className="grid items-start gap-5 xl:grid-cols-2">
              {posts.map((post, index) => {
                const liked = likedPosts.has(post.id);
                const saved = savedPosts.has(post.id);

                return (
                  <article
                    key={post.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open post: ${post.title}`}
                    onClick={() => setSelectedPost(post)}
                    onKeyDown={(event) => {
                    if (event.target !== event.currentTarget) {
                        return;
                    }

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedPost(post);
                    }
                }}
                    className={[
                        "feed-card-enter group flex h-[640px] cursor-pointer flex-col overflow-hidden",
                        "rounded-[1.75rem] border border-slate-200/80 bg-white shadow-sm",
                        "outline-none transition duration-500",
                        "hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl",
                        "focus-visible:ring-4 focus-visible:ring-blue-200",
                        "active:scale-[0.99]",
                    ].join(" ")}
                style={{
            animationDelay: `${index * 90}ms`,
        }}
>
                    <header className="flex items-center gap-3 p-5">
                      <div
                        className={[
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-bold",
                          post.avatarClass,
                        ].join(" ")}
                      >
                        {post.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h2 className="truncate font-bold text-slate-950">
                            {post.user}, {post.age}
                          </h2>

                          <span className="h-1 w-1 rounded-full bg-slate-300" />

                          <span className="truncate text-xs text-slate-500">
                            {post.time}
                          </span>
                        </div>

                        <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                          <MapPin size={12} />
                          {post.location}
                        </p>
                      </div>

                      <button
                        type="button"
                        aria-label="Post options"
                        onClick={(event) => {
                            event.stopPropagation();
                            toggleLike(post.id);
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                            >
                        <MoreHorizontal size={19} />
                        </button>
                    </header>

                    <div className="px-3">
                      <div
                        className="relative h-64 shrink-0 overflow-hidden rounded-3xl bg-slate-200 bg-cover bg-center"
                        style={{
                        backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.18), transparent 45%), url("${post.image}")`,
                    }}
>
                        <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/85 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur">
                          {post.category}
                        </span>

                        <span className="absolute bottom-4 right-4 rounded-full bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                          {post.match}
                        </span>
                      </div>
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col p-5">
                      <h3 className="line-clamp-2 min-h-[3.5rem] text-xl font-bold leading-7 text-slate-950">
                        {post.title}
                        </h3>

                      <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-600">
                            {post.description}
                          </p>

                      <div className="mt-4 flex h-8 flex-wrap gap-2 overflow-hidden">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center border-t border-slate-100 pt-4">
                        <div className="flex flex-1 items-center gap-1">
                          <button
                            type="button"
                            onClick={() => toggleLike(post.id)}
                            className={[
                              "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition active:scale-90",
                              liked
                                ? "bg-rose-50 text-rose-600"
                                : "text-slate-500 hover:bg-slate-100 hover:text-slate-950",
                            ].join(" ")}
                          >
                            <Heart
                              size={18}
                              fill={liked ? "currentColor" : "none"}
                              className={liked ? "scale-110" : ""}
                            />

                            {post.likes + (liked ? 1 : 0)}
                          </button>

                          <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 active:scale-90"
                          >
                            <MessageCircle size={18} />
                            {post.comments}
                          </button>

                          <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                }}
                            className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 sm:flex"
                          >
                            <Send size={17} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={(event) => {
                                event.stopPropagation();
                                toggleSave(post.id);
                            }}
                          aria-label={saved ? "Remove saved post" : "Save post"}
                          className={[
                            "flex h-10 w-10 items-center justify-center rounded-xl transition active:scale-90",
                            saved
                              ? "bg-blue-50 text-blue-600"
                              : "text-slate-400 hover:bg-slate-100 hover:text-slate-950",
                          ].join(" ")}
                        >
                          <Bookmark
                            size={18}
                            fill={saved ? "currentColor" : "none"}
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Desktop side rail */}
          <aside className="hidden space-y-5 lg:block">
            <section className="sticky top-24 space-y-5">
              <div className="overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-xl">
                <p className="text-sm font-semibold text-blue-300">
                  Happening today
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Sunset walk and casual dinner
                </h2>

                <div className="mt-5 space-y-3 text-sm text-slate-300">
                  <p className="flex items-center gap-2">
                    <CalendarDays size={17} className="text-blue-300" />
                    Today, 5:30 PM
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin size={17} className="text-blue-300" />
                    Davao Coastal Road
                  </p>

                  <p className="flex items-center gap-2">
                    <Users size={17} className="text-blue-300" />
                    7 people attending
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
                >
                  View gathering
                  <ArrowUpRight size={17} />
                </button>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-slate-950">
                    People you may click with
                  </h2>

                  <Sparkles size={17} className="text-blue-600" />
                </div>

                <div className="mt-5 space-y-4">
                  {suggestedPeople.map((person, index) => (
                    <div key={person.name} className="flex items-center gap-3">
                      <div
                        className={[
                          "flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold",
                          index === 0
                            ? "bg-blue-100 text-blue-700"
                            : index === 1
                              ? "bg-violet-100 text-violet-700"
                              : "bg-emerald-100 text-emerald-700",
                        ].join(" ")}
                      >
                        {person.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-slate-950">
                          {person.name}
                        </p>

                        <p className="truncate text-xs text-slate-500">
                          {person.detail}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                      >
                        Connect
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-blue-100 bg-blue-50 p-5">
                <Clock3 size={20} className="text-blue-600" />

                <h2 className="mt-4 font-bold text-slate-950">
                  Set your availability
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Let the app recommend people who are free at the same time.
                </p>

                <button
                  type="button"
                  className="mt-4 text-sm font-bold text-blue-600"
                >
                  Update schedule
                </button>
              </div>
            </section>
          </aside>
        </div>
            </div>

      <PostDetailsModal
        post={selectedPost}
        liked={selectedPost ? likedPosts.has(selectedPost.id) : false}
        saved={selectedPost ? savedPosts.has(selectedPost.id) : false}
        onClose={closeSelectedPost}
        onToggleLike={() => {
          if (selectedPost) {
            toggleLike(selectedPost.id);
          }
        }}
        onToggleSave={() => {
          if (selectedPost) {
            toggleSave(selectedPost.id);
          }
        }}
      />
    </main>
  );
}