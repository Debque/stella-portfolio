"use client";

import { motion } from "motion/react";
import type { Doodle } from "@/data/doodles";

// A four-pointed sparkle, drawn as an SVG path.
function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type FloatingDoodlesProps = {
  items: Doodle[];
  // Which screen sizes show the doodles. Hidden on phones by default.
  className?: string;
};

export function FloatingDoodles({ items, className = "hidden md:block" }: FloatingDoodlesProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {items.map((doodle) => {
        let shapeElement = null;
        if (doodle.shape === "sparkle") {
          shapeElement = <Sparkle className={`${doodle.size} ${doodle.colorClass} stroke-border`} />;
        } else if (doodle.shape === "circle") {
          shapeElement = <div className={`${doodle.size} ${doodle.colorClass} rounded-full border-2 border-border`} />;
        } else if (doodle.shape === "ring") {
          shapeElement = <div className={`${doodle.size} rounded-full border-[3px] border-dashed border-border`} />;
        } else {
          shapeElement = <div className={`${doodle.size} ${doodle.colorClass} rotate-12 rounded-md border-2 border-border`} />;
        }

        return (
          <motion.div
            key={doodle.id}
            className={`absolute ${doodle.position}`}
            animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
            transition={{ duration: doodle.duration, delay: doodle.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {shapeElement}
          </motion.div>
        );
      })}
    </div>
  );
}