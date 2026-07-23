"use client";

import {
  CalendarDays,
  Check,
  ChevronDown,
  ImagePlus,
  MapPin,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const postTypes = [
  "Friendship",
  "Activity companion",
  "Group gathering",
  "Study or co-working",
  "Dating",
];

const audiences = ["Nearby people", "Connections only", "Invite only"];

const mockTaggedPeople = [
  {
    name: "Jamie",
    initials: "JM",
  },
  {
    name: "Alex",
    initials: "AM",
  },
];

export default function CreatePostPage() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedAudience, setSelectedAudience] = useState(audiences[0]);
  const [published, setPublished] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function handleImageSelection(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const nextPreviewUrl = URL.createObjectURL(file);
    setPreviewUrl(nextPreviewUrl);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPublished(true);

    window.setTimeout(() => {
      setPublished(false);
    }, 3500);
  }

  return (
    <main className="pb-36">
      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            Share an invitation
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Create a post
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Create an activity, gathering or personal invitation that can lead
            to a genuine real-world connection.
          </p>
        </div>

        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_320px]">
          <form
            onSubmit={handleSubmit}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 sm:px-8">
              <div>
                <p className="font-bold text-slate-950">New invitation</p>

                <p className="mt-1 text-sm text-slate-500">
                  Make it welcoming, specific and safe.
                </p>
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
                Draft
              </span>
            </div>

            <div className="space-y-7 p-6 sm:p-8">
              {/* Image */}
              <div>
                <label className="mb-3 block text-sm font-bold text-slate-800">
                  Cover photo
                </label>

                <label className="group relative block cursor-pointer overflow-hidden rounded-[1.5rem] border-2 border-dashed border-slate-200 bg-slate-50 transition hover:border-blue-300 hover:bg-blue-50/40">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelection}
                    className="sr-only"
                  />

                  {previewUrl ? (
                    <div className="relative aspect-[16/8]">
                      <img
                        src={previewUrl}
                        alt="Selected post preview"
                        className="h-full w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          setPreviewUrl(null);
                        }}
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/75 text-white backdrop-blur transition hover:scale-105"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex aspect-[16/7] flex-col items-center justify-center px-6 text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-md">
                        <ImagePlus size={25} />
                      </span>

                      <p className="mt-4 font-bold text-slate-800">
                        Add an activity photo
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        Click to select a JPG, PNG or WebP image
                      </p>
                    </div>
                  )}
                </label>
              </div>

              {/* Post type and date */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="post-type"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Connection type
                  </label>

                  <div className="relative">
                    <select
                      id="post-type"
                      className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-10 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    >
                      {postTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>

                    <ChevronDown
                      size={17}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="event-date"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Suggested date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="event-date"
                      type="datetime-local"
                      className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div>
                <label
                  htmlFor="post-title"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Post title
                </label>

                <input
                  id="post-title"
                  type="text"
                  placeholder="Example: Looking for coffee and photography companions"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Description */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="description"
                    className="text-sm font-bold text-slate-800"
                  >
                    Description
                  </label>

                  <span className="text-xs text-slate-400">
                    Be clear about the plan
                  </span>
                </div>

                <textarea
                  id="description"
                  rows={6}
                  placeholder="Describe the activity, the kind of people you want to meet, the expected atmosphere and any important details..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Approximate location
                </label>

                <div className="relative">
                  <MapPin
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="location"
                    type="text"
                    placeholder="Example: Matina, Davao City"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <p className="mt-2 flex items-start gap-2 text-xs leading-5 text-slate-500">
                  <ShieldCheck
                    size={14}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />
                  Do not publish your home address. Share the exact meeting
                  place only with confirmed attendees.
                </p>
              </div>

              {/* Hashtags */}
              <div>
                <label
                  htmlFor="hashtags"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Interests and hashtags
                </label>

                <input
                  id="hashtags"
                  type="text"
                  placeholder="#coffee #photography #newfriends"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Tagged people */}
              <div>
                <label className="mb-3 block text-sm font-bold text-slate-800">
                  Invite people
                </label>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="flex h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                  >
                    <UserPlus size={17} />
                    Add people
                  </button>

                  {mockTaggedPeople.map((person, index) => (
                    <div
                      key={person.name}
                      className="flex items-center gap-2 rounded-xl bg-slate-100 p-1.5 pr-3"
                    >
                      <span
                        className={[
                          "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold",
                          index === 0
                            ? "bg-blue-200 text-blue-700"
                            : "bg-violet-200 text-violet-700",
                        ].join(" ")}
                      >
                        {person.initials}
                      </span>

                      <span className="text-sm font-semibold text-slate-700">
                        {person.name}
                      </span>

                      <button
                        type="button"
                        aria-label={`Remove ${person.name}`}
                        className="text-slate-400 transition hover:text-slate-700"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audience */}
              <div>
                <label className="mb-3 block text-sm font-bold text-slate-800">
                  Who can see it?
                </label>

                <div className="grid gap-3 sm:grid-cols-3">
                  {audiences.map((audience) => {
                    const selected = selectedAudience === audience;

                    return (
                      <button
                        key={audience}
                        type="button"
                        onClick={() => setSelectedAudience(audience)}
                        className={[
                          "flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition active:scale-95",
                          selected
                            ? "border-blue-500 bg-blue-50 text-blue-700 ring-4 ring-blue-100"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50",
                        ].join(" ")}
                      >
                        {selected && <Check size={16} />}
                        {audience}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-5 sm:px-8">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.98]"
              >
                <Sparkles size={18} />
                Publish post
              </button>
            </div>
          </form>

          {/* Side information */}
          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-xl">
              <Users size={24} className="text-blue-300" />

              <h2 className="mt-5 text-xl font-bold">
                Make it easier to connect
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Posts with a clear activity, schedule and comfortable group
                size are more likely to receive meaningful responses.
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                {[
                  "Describe the atmosphere",
                  "Choose a public meeting place",
                  "State the expected group size",
                  "Avoid sharing private contact details",
                ].map((tip) => (
                  <p key={tip} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-blue-300"
                    />
                    {tip}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-blue-100 bg-blue-50 p-6">
              <ShieldCheck size={23} className="text-blue-600" />

              <h2 className="mt-4 font-bold text-slate-950">
                Your location stays protected
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Only your approximate area is displayed publicly. Exact
                locations can be shared after people confirm attendance.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {published && (
        <div className="fixed left-1/2 top-24 z-[70] flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-emerald-200 bg-white px-5 py-4 text-sm font-bold text-emerald-700 shadow-2xl">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100">
            <Check size={17} />
          </span>

          Post prepared successfully
        </div>
      )}
    </main>
  );
}