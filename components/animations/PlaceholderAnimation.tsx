/**
 * PlaceholderAnimation.tsx
 * ─────────────────────────────────────────────────────────────
 * This is a TEMPLATE. Copy it, rename it, and replace the
 * contents with your real animation.
 *
 * The component receives no props — all state/logic lives here.
 * ─────────────────────────────────────────────────────────────
 */

"use client";

export default function PlaceholderAnimation() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      {/* Animated placeholder grid */}
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-12 w-12 rounded-lg bg-neutral-200 dark:bg-neutral-700"
            style={{
              animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite alternate`,
            }}
          />
        ))}
      </div>
      <p className="mt-2 text-sm text-neutral-400 dark:text-neutral-500">
        Replace with your animation
      </p>
      <style>{`
        @keyframes pulse {
          from { opacity: 0.3; transform: scale(0.95); }
          to   { opacity: 1;   transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}