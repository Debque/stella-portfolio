"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { accentBg, type Accent } from "@/lib/accents";

type HighlightProps = {
  children: ReactNode;
  accent: Accent;
  tilt?: number; // final resting angle, in degrees
  delay?: number; // seconds to wait before popping in
};

export function Highlight({ children, accent, tilt = 0, delay = 0 }: HighlightProps) {
  return (
    <motion.span
      className={`${accentBg[accent]} inline-block whitespace-nowrap rounded-lg border-2 border-border px-2 text-ink shadow-chunky-sm`}
      initial={{ scale: 0.6, rotate: -8 }}
      animate={{ scale: 1, rotate: tilt }}
      transition={{ type: "spring", stiffness: 260, damping: 14, delay: delay }}
    >
      {children}
    </motion.span>
  );
}