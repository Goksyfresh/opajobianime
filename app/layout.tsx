import type { Metadata } from "next";
import "./globals.css";


import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "Animations Hub",
  description: "A curated showcase of frontend animation components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider>
          {/* Nav */}
          <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
              <Link
                href="/animations"
                className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white"
              >
                Animations Hub
              </Link>
              <ThemeToggle />
            </div>
          </header>

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}