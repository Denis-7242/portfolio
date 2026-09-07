"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DesignCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const DesignCard = ({ children, className, hoverable = true }: DesignCardProps) => {
  return (
    <motion.div
      whileHover={hoverable ? {
        y: -5,
        borderColor: "var(--color-accent-electric)",
        boxShadow: "0 0 20px rgba(0, 209, 255, 0.15)"
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative group p-6 rounded-2xl transition-all duration-300",
        "bg-bg-surface/40 backdrop-blur-md border border-glass-border shadow-xl",
        "hover:bg-bg-surface/60",
        className
      )}
    >
      {/* Inner Gradient Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
