"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT, REVEAL_DISTANCE, REVEAL_DURATION } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: REVEAL_DISTANCE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: REVEAL_DURATION, ease: EASE_OUT, delay: delay }}
    >
      {children}
    </motion.div>
  );
}