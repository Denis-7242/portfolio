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
        "flex flex-col gap-1 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]",
        className
      )}
    >
      <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted">
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
