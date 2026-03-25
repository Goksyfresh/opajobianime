import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-5xl font-bold text-neutral-200 dark:text-neutral-800">404</p>
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
        Animation not found
      </h2>
      <p className="text-sm text-neutral-500">
        This slug doesn&apos;t match any entry in the registry.
      </p>
      <Link
        href="/animations"
        className="mt-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        Back to gallery
      </Link>
    </div>
  );
}