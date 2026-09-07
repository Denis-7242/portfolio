"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DesignStatTileProps {
  label: string;
  value: React.ReactNode;
  subtext?: string;
  className?: string;
}

export const DesignStatTile = ({ label, value, subtext, className }: DesignStatTileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col gap-1 p-4 rounded-xl border border-glass-border bg-bg-surface/30 backdrop-blur-sm",
        className
      )}
    >
      <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
        {label}
      </span>
      <div className="text-2xl font-bold text-text-primary font-sans">
        {value}
      </div>
      {subtext && (
        <span className="text-xs text-text-muted font-light italic">
          {subtext}
        </span>
      )}
    </motion.div>
  );
};
