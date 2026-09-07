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
    primary: "bg-bg-surface text-text-primary border-glass-border",
    muted: "bg-bg-surface/50 text-text-muted border-glass-border",
    accent: "bg-accent-electric/10 text-accent-electric border-accent-electric/30",
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
