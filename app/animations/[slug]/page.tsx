"use client";

import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { Suspense, useState, use } from "react";
import { getAnimation } from "@/lib/animation";


const complexityColor = {
  Beginner:     "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  Advanced:     "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
} as const;

interface Props {
  params: Promise<{ slug: string }>;
}

export default function AnimationDetailPage({ params }: Props) {
  const { slug } = use(params);
  const animation = getAnimation(slug);

  if (!animation) notFound();

  const Component = animation.component;
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Back link */}
      <Link
        href="/animations"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back to all animations
      </Link>

      {/* Title row */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {animation.title}
          </h1>
          <p className="mt-1.5 text-neutral-500 dark:text-neutral-400">
            {animation.description}
          </p>
        </div>

        {/* Replay button */}
        <button
          onClick={() => setReplayKey((k) => k + 1)}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Replay
        </button>
      </div>

      {/* Animation stage */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="relative flex min-h-[420px] items-center justify-center p-8">
          <Suspense
            fallback={
              <div className="flex h-64 w-full animate-pulse items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800" />
            }
          >
            <div key={replayKey} className="h-full w-full">
              <Component />
            </div>
          </Suspense>
        </div>
      </div>

      {/* Meta grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Tools used */}
        <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Tools Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {animation.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-lg bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Complexity */}
        <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Complexity
          </h2>
          <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${complexityColor[animation.complexity]}`}>
            {animation.complexity}
          </span>
        </div>

        {/* Approach — full width, only if provided */}
        {animation.approach && (
          <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800 sm:col-span-2">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Approach
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {animation.approach}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}