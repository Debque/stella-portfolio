"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT } from "@/lib/motion";

type StrikethroughProps = {
  children: ReactNode;
};

// Text that gets a line drawn through it when it scrolls into view.
// The line is a thin background stripe whose width grows from 0% to 100%,
// so it also works when the text wraps onto two lines.
export function Strikethrough({ children }: StrikethroughProps) {
  const prefersReducedMotion = useReducedMotion();

  // People who asked for less motion get the finished line straight away.
  let startSize = "0% 2px";
  if (prefersReducedMotion) {
    startSize = "100% 2px";
  }

  return (
    <motion.s
      className="bg-no-repeat no-underline"
      style={{
        backgroundImage: "linear-gradient(currentColor, currentColor)",
        backgroundPosition: "0 55%",
      }}
      initial={{ backgroundSize: startSize }}
      whileInView={{ backgroundSize: "100% 2px" }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.3 }}
    >
      {children}
    </motion.s>
  );
}