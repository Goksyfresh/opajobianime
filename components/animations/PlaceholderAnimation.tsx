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

import { useMediaQuery } from "react-responsive";

export default function PlaceholderAnimation() {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  if (!isTabletOrDesktop) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Switch to a Larger Device</h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400">This animation is best viewed on tablet or desktop for the full interactive experience.</p>
      </div>
    );
  }

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