/**
 * ============================================================
 *  ANIMATIONS REGISTRY
 *  ============================================================
 *  To add a new animation:
 *
 *  1. Create your component in /components/animations/YourAnimation.tsx
 *     (use the PlaceholderAnimation.tsx as a template)
 *
 *  2. Add an entry to the `animations` array below.
 *
 *  That's it. The gallery and detail pages are auto-generated.
 * ============================================================
 */

import HeroSection from "@/components/animations/HeroSectionAnimation";
import ImageHover from "@/components/animations/ImageHoverAnimation";
import ImageSelect from "@/components/animations/ImageSelectAnimation";
import PlaceholderAnimation from "@/components/animations/PlaceholderAnimation";
import Portfolio from "@/components/animations/ProgressAnimation";
import Progress from "@/components/animations/ProgressAnimation";
import { type ComponentType, lazy } from "react";

export type Category = "CSS" | "Framer Motion" | "Three.js" | "Canvas" | "SVG" | "GSAP" | "WebGL";
export type Complexity = "Beginner" | "Intermediate" | "Advanced";

export interface AnimationMeta {
  /** URL-safe identifier — becomes /animations/[slug] */
  slug: string;
  title: string;
  /** 1–2 sentence description shown on the card and detail page */
  description: string;
  /** Shown as tags on cards */
  categories: Category[];
  complexity: Complexity;
  /** Optional: explain the technique or challenge (shown only on detail page) */
  approach?: string;
  /** The React component that renders the animation */
  component: ComponentType;
}

// ---------------------------------------------------------------------------
// Import your animation components here (use React.lazy for heavy ones)
// ---------------------------------------------------------------------------



// Example of a lazy-loaded heavy animation:
// const HeavyAnimation = lazy(() => import("@/components/animations/HeavyAnimation"));

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const animations: AnimationMeta[] = [
  // ── EXAMPLE ENTRY — replace with your real animations ──────────────────
  {
    slug: "image-hover",
    title: "Image Hover Effect",
    description:
      "Interactive image gallery with smooth hover transitions and scale animations.",
    categories: ["CSS", "Framer Motion"],
    complexity: "Beginner",
    approach:
      "Uses CSS transforms and transitions to create smooth scale and opacity effects on image hover, with a clean gallery layout.",
    component: ImageHover,
  },
   {
    slug: "image-select",
    title: "Image Gallery with Selection",
    description:
      "Interactive archive gallery allowing image selection with keyboard navigation and animated preview.",
    categories: ["GSAP", "Canvas"],
    complexity: "Intermediate",
    approach:
      "Combines GSAP animations with keyboard controls (arrow keys) to navigate a scrollable gallery, displaying selected images with overlay effects and smooth scrolling behavior.",
    component: ImageSelect,
  },
   {
    slug: "hero-section",
    title: "Hero Section with Text Animation",
    description:
      "Full-screen hero section featuring character-by-character text animation and scroll-triggered reveals.",
    categories: ["GSAP", "SVG"],
    complexity: "Advanced",
    approach:
      "Uses GSAP SplitText to split typography into individual characters, applies ScrollTrigger for scroll-based animations, and includes a custom cursor effect that follows mouse movement within the section.",
    component: HeroSection,
  },
     {
    slug: "progress-animation",
    title: "Progress Indicator Animation",
    description:
      "Dynamic progress animation with visual feedback and state management.",
    categories: ["GSAP", "Framer Motion"],
    complexity: "Intermediate",
    approach:
      "Showcases how to create animated progress indicators using GSAP for smooth value transitions and visual state changes.",
    component: Progress,
  },
  // ── ADD MORE ENTRIES BELOW ──────────────────────────────────────────────
  // {
  //   slug: "magnetic-cursor",
  //   title: "Magnetic Cursor",
  //   description: "Cursor that elastically snaps to interactive elements.",
  //   categories: ["Framer Motion"],
  //   complexity: "Intermediate",
  //   approach: "...",
  //   component: MagneticCursor,
  // },
];

/** Helper — look up a single animation by slug */
export function getAnimation(slug: string): AnimationMeta | undefined {
  return animations.find((a) => a.slug === slug);
}