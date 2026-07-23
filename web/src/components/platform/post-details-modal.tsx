"use client";

import {
  Bookmark,
  CalendarDays,
  Heart,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import type { FeedPost } from "@/types/post";

interface PostDetailsModalProps {
  post: FeedPost | null;
  liked: boolean;
  saved: boolean;
  onClose: () => void;
  onToggleLike: () => void;
  onToggleSave: () => void;
}

export function PostDetailsModal({
  post,
  liked,
  saved,
  onClose,
  onToggleLike,
  onToggleSave,
}: PostDetailsModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!post) {
      setVisible(false);
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      setVisible(true);
    });

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [post, onClose]);

  if (!mounted || !post) {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-modal-title"
      className={[
        "fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6",
        "transition-all duration-300",
        visible ? "bg-slate-950/50 backdrop-blur-xl" : "bg-transparent",
      ].join(" ")}
      onMouseDown={onClose}
    >
      <article
        className={[
          "relative grid max-h-[92vh] w-full max-w-5xl overflow-hidden",
          "rounded-[2rem] border border-white/50 bg-white",
          "shadow-[0_35px_100px_rgba(15,23,42,0.35)]",
          "transition-all duration-500 ease-out",
          "lg:grid-cols-[1.05fr_0.95fr]",
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-90 opacity-0",
        ].join(" ")}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close post"
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-slate-950/65 text-white shadow-lg backdrop-blur-xl transition hover:scale-105 hover:bg-slate-950 active:scale-90"
        >
          <X size={20} />
        </button>

        {/* Large image */}
        <div className="relative min-h-72 bg-slate-200 lg:min-h-[650px]">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/10" />

          <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/85 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg backdrop-blur-xl">
            {post.category}
          </span>

          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-slate-950/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
              {post.match}
            </span>

            <span className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-slate-800 backdrop-blur-xl">
              <MapPin size={14} />
              {post.location}
            </span>
          </div>
        </div>

        {/* Complete content */}
        <div className="overflow-y-auto">
          <div className="p-6 sm:p-8">
            <header className="flex items-start gap-4">
              <div
                className={[
                  "flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl",
                  "bg-gradient-to-br text-sm font-bold",
                  post.avatarClass,
                ].join(" ")}
              >
                {post.initials}
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-slate-950">
                  {post.user}, {post.age}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Posted {post.time}
                </p>
              </div>

              <button
                type="button"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Connect
              </button>
            </header>

            <div className="mt-7">
              <h1
                id="post-modal-title"
                className="text-3xl font-bold leading-tight tracking-tight text-slate-950"
              >
                {post.title}
              </h1>

              <p className="mt-5 whitespace-pre-line text-base leading-8 text-slate-600">
                {post.description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <CalendarDays size={19} className="text-blue-600" />

                <p className="mt-3 text-sm font-bold text-slate-950">
                  Schedule information
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  The complete meetup schedule will appear here once it is
                  connected to the database.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Users size={19} className="text-blue-600" />

                <p className="mt-3 text-sm font-bold text-slate-950">
                  Interested companions
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  View interested people and confirmed attendees from this
                  section.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-blue-600"
              />

              <p className="text-sm leading-6 text-slate-600">
                Meet in a public location and only share exact meetup details
                with confirmed companions.
              </p>
            </div>
          </div>

          <footer className="sticky bottom-0 border-t border-slate-200 bg-white/90 p-4 backdrop-blur-xl sm:px-8">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleLike}
                className={[
                  "flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold",
                  "transition active:scale-90",
                  liked
                    ? "bg-rose-50 text-rose-600"
                    : "bg-slate-100 text-slate-600 hover:text-rose-600",
                ].join(" ")}
              >
                <Heart
                  size={19}
                  fill={liked ? "currentColor" : "none"}
                />

                {post.likes + (liked ? 1 : 0)}
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-600 transition hover:text-blue-600 active:scale-90"
              >
                <MessageCircle size={19} />
                {post.comments}
              </button>

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:text-blue-600 active:scale-90"
                aria-label="Share post"
              >
                <Send size={18} />
              </button>

              <button
                type="button"
                onClick={onToggleSave}
                aria-label={saved ? "Remove saved post" : "Save post"}
                className={[
                  "ml-auto flex h-11 w-11 items-center justify-center rounded-xl",
                  "transition active:scale-90",
                  saved
                    ? "bg-blue-50 text-blue-600"
                    : "bg-slate-100 text-slate-500 hover:text-blue-600",
                ].join(" ")}
              >
                <Bookmark
                  size={19}
                  fill={saved ? "currentColor" : "none"}
                />
              </button>
            </div>
          </footer>
        </div>
      </article>
    </div>,
    document.body,
  );
}