"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-bg-surface/50 border border-glass-border text-text-muted hover:text-text-primary hover:bg-bg-surface transition-all duration-300 group"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-all duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-all duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
