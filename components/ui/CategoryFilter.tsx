"use client";

import { Category } from "@/lib/animation";



interface Props {
  categories: Category[];
  selected: Category | "All";
  onChange: (cat: Category | "All") => void;
}

export default function CategoryFilter({ categories, selected, onChange }: Props) {
  const all = ["All", ...categories] as (Category | "All")[];

  return (
    <div className="flex flex-wrap gap-2">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
            selected === cat
              ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}