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

      <h1 className="font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
        I build{" "}
        <span className="rounded-lg border-2 border-border bg-butter px-2 text-ink">resilient</span>{" "}
        interfaces that survive{" "}
        <span className="rounded-lg border-2 border-border bg-pink px-2 text-ink">low bandwidth</span>.
      </h1>

      <p className="max-w-prose text-lg text-muted">
        This paragraph uses the muted colour and Geist Sans. The headline should feel chunky and
        playful, with pastel highlight blocks behind the key words.
      </p>

      <div className="rounded-2xl border-2 border-border bg-surface p-6 shadow-chunky">
        <p className="font-mono text-sm">A card with a chunky border and offset shadow.</p>
      </div>

      <div className="h-px bg-rule" />

      <div className="flex flex-wrap gap-3">
        {swatches.map((swatch) => (
          <span
            key={swatch.name}
            className={`${swatch.className} rounded-lg border-2 border-border px-3 py-1 font-mono text-xs font-bold text-ink`}
          >
            {swatch.name}
          </span>
        ))}
      </div>
    </main>
  );
}