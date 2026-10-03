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
        y: -4,
        borderColor: "var(--color-accent-electric)",
        boxShadow: "0 0 20px rgba(var(--color-accent-electric), 0.15)"
      } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className={cn(
        "relative group p-6 rounded-2xl transition-all duration-300",
        "bg-white/[0.02] border border-white/[0.08] shadow-none",
        className
      )}
    >
      {/* Inner Gradient Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-electric/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
