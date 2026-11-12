
export type Doodle = {
  id: string;
  position: string; // where it sits (Tailwind classes)
  shape: "sparkle" | "circle" | "ring" | "square";
  colorClass: string;
  size: string;
  duration: number; // seconds for one up-and-down float
  delay: number; // so they don't all move in sync
};

export const heroDoodles: Doodle[] = [
  { id: "hero-a", position: "right-[8%] top-[12%]", shape: "sparkle", colorClass: "fill-butter", size: "h-12 w-12", duration: 5, delay: 0 },
  { id: "hero-b", position: "right-[22%] top-[58%]", shape: "circle", colorClass: "bg-pink", size: "h-6 w-6", duration: 4, delay: 0.8 },
  { id: "hero-c", position: "right-[4%] top-[70%]", shape: "square", colorClass: "bg-lilac", size: "h-8 w-8", duration: 6, delay: 0.4 },
  { id: "hero-d", position: "left-[46%] top-[6%]", shape: "sparkle", colorClass: "fill-mint", size: "h-7 w-7", duration: 4.5, delay: 1.2 },
];

// One short list per section, keyed by the section's id.
export const sectionDoodles: Record<string, Doodle[]> = {
  work: [
    { id: "work-a", position: "left-[3%] bottom-[15%]", shape: "ring", colorClass: "bg-transparent", size: "h-9 w-9", duration: 6, delay: 0 },
    { id: "work-b", position: "right-[4%] top-[55%]", shape: "sparkle", colorClass: "fill-butter", size: "h-8 w-8", duration: 7, delay: 1 },
  ],
  stack: [
    { id: "stack-a", position: "left-[4%] top-[30%]", shape: "square", colorClass: "bg-lilac", size: "h-7 w-7", duration: 6.5, delay: 0.5 },
    { id: "stack-b", position: "right-[5%] bottom-[12%]", shape: "circle", colorClass: "bg-sky", size: "h-5 w-5", duration: 5, delay: 1.5 },
  ],
  receipts: [
    { id: "receipts-a", position: "left-[3%] bottom-[20%]", shape: "sparkle", colorClass: "fill-mint", size: "h-9 w-9", duration: 7, delay: 0.3 },
    { id: "receipts-b", position: "right-[4%] top-[60%]", shape: "ring", colorClass: "bg-transparent", size: "h-6 w-6", duration: 5.5, delay: 1.2 },
  ],
  faq: [
    { id: "faq-a", position: "left-[4%] top-[45%]", shape: "circle", colorClass: "bg-peach", size: "h-6 w-6", duration: 6, delay: 0.8 },
    { id: "faq-b", position: "right-[5%] bottom-[15%]", shape: "square", colorClass: "bg-butter", size: "h-7 w-7", duration: 7.5, delay: 0 },
  ],
  contact: [
    { id: "contact-a", position: "left-[3%] top-[40%]", shape: "sparkle", colorClass: "fill-pink", size: "h-10 w-10", duration: 6, delay: 0.4 },
    { id: "contact-b", position: "right-[4%] bottom-[18%]", shape: "circle", colorClass: "bg-lilac", size: "h-6 w-6", duration: 5, delay: 1 },
  ],
};