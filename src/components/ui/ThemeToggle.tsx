"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleClick() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Switch between light and dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border bg-surface text-foreground shadow-chunky-sm transition-all duration-150 hover:bg-butter hover:text-ink active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      {/* Shown in dark mode: a sun, meaning "switch to light" */}
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      {/* Shown in light mode: a moon, meaning "switch to dark" */}
      <Moon className="block h-5 w-5 dark:hidden" aria-hidden="true" />
    </button>
  );
}