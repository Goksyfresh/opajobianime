"use client";

import { useState, useMemo } from "react";

import AnimationCard from "@/components/ui/AnimationCard";
import CategoryFilter from "@/components/ui/CategoryFilter";
import { animations, Category } from "@/lib/animation";

// Collect unique categories from the registry
function uniqueCategories(): Category[] {
  const set = new Set<Category>();
  animations.forEach((a) => a.categories.forEach((c) => set.add(c)));
  return Array.from(set).sort();
}

export default function AnimationsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const categories = useMemo(() => uniqueCategories(), []);

  const filtered = useMemo(() => {
    return animations.filter((a) => {
      const matchesSearch =
        search.trim() === "" ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.description.toLowerCase().includes(search.toLowerCase());
      const matchesCat =
        activeCategory === "All" || a.categories.includes(activeCategory);
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Animation Showcase
        </h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          {animations.length} animation{animations.length !== 1 ? "s" : ""} — click any card to explore
        </p>
      </div>

      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <input
          type="text"
          placeholder="Search animations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-400 focus:ring-0 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:border-neutral-500 sm:max-w-xs"
        />

        {/* Category filter */}
        {categories.length > 0 && (
          <CategoryFilter
            categories={categories}
            selected={activeCategory}
            onChange={setActiveCategory}
          />
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex h-60 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-400">No animations match your search.</p>
          <button
            onClick={() => { setSearch(""); setActiveCategory("All"); }}
            className="text-sm font-medium text-neutral-600 underline dark:text-neutral-400"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((animation) => (
            <AnimationCard key={animation.slug} animation={animation} />
          ))}
        </div>
      )}
    </div>
  );
}