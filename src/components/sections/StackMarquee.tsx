import { marqueeItems } from "@/data/stack";

// One copy of the list. The marquee shows it twice, side by side, so it can loop seamlessly.
function MarqueeList({ hidden }: { hidden: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <li key={item} className="flex items-center font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
          <span className="px-6">{item}</span>
          <span aria-hidden="true" className="text-pink">
            ★
          </span>
        </li>
      ))}
    </ul>
  );
}

export function StackMarquee() {
  return (
    // Outer wrapper crops the tilted band so it can't cause sideways scrolling.
    <div className="overflow-hidden py-6">
      {/* -mx-8 makes the band wider than the screen, so its tilted ends stay off-screen */}
      <div className="-mx-8 -rotate-1 border-y-2 border-border bg-butter py-4 text-ink">
        <div aria-label="Tools I use" className="group flex overflow-hidden">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <MarqueeList hidden={false} />
            <MarqueeList hidden={true} />
          </div>
        </div>
      </div>
    </div>
  );
}