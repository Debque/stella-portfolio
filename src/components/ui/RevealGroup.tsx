"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT, REVEAL_DISTANCE, REVEAL_DURATION, STAGGER_GAP } from "@/lib/motion";

// The parent doesn't move itself. It only tells its children
// to start one after another, STAGGER_GAP seconds apart.
const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER_GAP },
  },
};

// Each child fades in and slides up, just like <Reveal>.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_OUT },
  },
};

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
};

export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
};

export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}