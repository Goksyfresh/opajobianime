"use client";

import { AnimationMeta } from "@/lib/animation";
import Link from "next/link";
import { Suspense, useRef, useState } from "react";


const complexityColor: Record<AnimationMeta["complexity"], string> = {
  Beginner:     "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  Advanced:     "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
};

interface Props {
  animation: AnimationMeta;
}

export default function AnimationCard({ animation }: Props) {
  const Component = animation.component;
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/animations/${animation.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:shadow-2xl dark:hover:shadow-black/40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview area */}
      <div className="relative h-52 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <Suspense
          fallback={
            <div className="flex h-full w-full animate-pulse items-center justify-center bg-neutral-100 dark:bg-neutral-800" />
          }
        >
          {/* Pointer-events none so the card link captures the click */}
          <div className="pointer-events-none h-full w-full select-none">
            <Component />
          </div>
        </Suspense>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 ${
            hovered ? "bg-black/20" : ""
          }`}
        >
          <span
            className={`rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm transition-all duration-300 dark:bg-neutral-900/90 dark:text-neutral-100 ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            View animation →
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
            {animation.title}
          </h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
              complexityColor[animation.complexity]
            }`}
          >
            {animation.complexity}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {animation.description}
        </p>

        {/* Category tags */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {animation.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}