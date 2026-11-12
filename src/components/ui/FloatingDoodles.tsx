"use client";

import { motion } from "motion/react";

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

type Doodle = {
  id: string;
  position: string; // where it sits (Tailwind classes)
  shape: "sparkle" | "circle" | "square";
  colorClass: string;
  size: string;
  duration: number; // seconds for one up-and-down float
  delay: number; // so they don't all move in sync
};

const doodles: Doodle[] = [
  { id: "a", position: "right-[8%] top-[12%]", shape: "sparkle", colorClass: "fill-butter", size: "h-12 w-12", duration: 5, delay: 0 },
  { id: "b", position: "right-[22%] top-[58%]", shape: "circle", colorClass: "bg-pink", size: "h-6 w-6", duration: 4, delay: 0.8 },
  { id: "c", position: "right-[4%] top-[70%]", shape: "square", colorClass: "bg-lilac", size: "h-8 w-8", duration: 6, delay: 0.4 },
  { id: "d", position: "left-[46%] top-[6%]", shape: "sparkle", colorClass: "fill-mint", size: "h-7 w-7", duration: 4.5, delay: 1.2 },
];

export function FloatingDoodles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
      {doodles.map((doodle) => {
        let shapeElement = null;
        if (doodle.shape === "sparkle") {
          shapeElement = <Sparkle className={`${doodle.size} ${doodle.colorClass} stroke-border`} />;
        } else if (doodle.shape === "circle") {
          shapeElement = <div className={`${doodle.size} ${doodle.colorClass} rounded-full border-2 border-border`} />;
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