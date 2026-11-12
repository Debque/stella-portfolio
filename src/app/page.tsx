import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const swatches = [
  { name: "butter", className: "bg-butter" },
  { name: "pink", className: "bg-pink" },
  { name: "lilac", className: "bg-lilac" },
  { name: "mint", className: "bg-mint" },
  { name: "peach", className: "bg-peach" },
  { name: "sky", className: "bg-sky" },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 p-8">
      <div className="flex items-center justify-between">
        <span className="rounded-full border-2 border-border bg-mint px-3 py-1 font-mono text-xs font-bold text-ink">
          ● OPEN TO WORK
        </span>
        <ThemeToggle />
      </div>

      <Reveal>
        <h1 className="font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          I build{" "}
          <span className="rounded-lg border-2 border-border bg-butter px-2 text-ink">resilient</span>{" "}
          interfaces that survive{" "}
          <span className="rounded-lg border-2 border-border bg-pink px-2 text-ink">low bandwidth</span>.
        </h1>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="max-w-prose text-lg text-muted">
          This paragraph arrives a moment after the headline, because it has a small delay.
        </p>
      </Reveal>

      {/* Empty space so you have to scroll to see the next parts */}
      <div className="flex h-[70vh] items-end">
        <p className="font-mono text-xs text-muted">↓ SCROLL DOWN</p>
      </div>

      <Reveal>
        <div className="rounded-2xl border-2 border-border bg-surface p-6 shadow-chunky">
          <p className="font-mono text-sm">This card only animates when you scroll it into view.</p>
        </div>
      </Reveal>

      <RevealGroup className="flex flex-wrap gap-3">
        {swatches.map((swatch) => (
          <RevealItem key={swatch.name}>
            <span
              className={`${swatch.className} inline-block rounded-lg border-2 border-border px-3 py-1 font-mono text-xs font-bold text-ink`}
            >
              {swatch.name}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="h-[30vh]" />
    </main>
  );
}