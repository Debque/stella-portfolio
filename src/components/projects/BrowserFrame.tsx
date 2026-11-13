import Image from "next/image";
import { accentBg, type Accent } from "@/lib/accents";

type BrowserFrameProps = {
  title: string;
  url: string;
  accent: Accent;
  image?: string;
};

export function BrowserFrame({ title, url, accent, image }: BrowserFrameProps) {
  // Show just the domain in the fake address bar: "https://stokkco.com" -> "stokkco.com"
  const displayUrl = url.replace("https://", "");

  let screen = null;
  if (image) {
    screen = (
      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        fill
        sizes="(min-width: 1024px) 480px, 100vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />
    );
  } else {
    // No screenshot yet: a pastel placeholder with the project name
    screen = (
      <div className={`${accentBg[accent]} flex h-full items-center justify-center`}>
        <span className="font-display text-4xl font-extrabold text-ink">{title}</span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-chunky">
      {/* Fake browser bar */}
      <div className="flex items-center gap-3 border-b-2 border-border px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full border-2 border-border bg-pink" />
          <span className="h-3 w-3 rounded-full border-2 border-border bg-butter" />
          <span className="h-3 w-3 rounded-full border-2 border-border bg-mint" />
        </div>
        <span className="truncate rounded-md border border-rule bg-background px-2 py-0.5 font-mono text-[11px] text-muted">
          {displayUrl}
        </span>
      </div>

      {/* The screen. aspect-[16/10] keeps every screenshot the same shape. */}
      <div className="relative aspect-[16/10] overflow-hidden">{screen}</div>
    </div>
  );
}