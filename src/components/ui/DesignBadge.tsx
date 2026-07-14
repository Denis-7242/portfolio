"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DesignBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "muted" | "accent";
}

export const DesignBadge = ({ children, className, variant = "primary" }: DesignBadgeProps) => {
  const variants = {
    primary: "bg-slate-800 text-slate-300 border-slate-700",
    muted: "bg-slate-900/50 text-slate-500 border-slate-800",
    accent: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  };

  return (
    <span
      className={cn(
        "px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest border transition-colors duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
