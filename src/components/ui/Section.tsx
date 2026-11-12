import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingDoodles } from "@/components/ui/FloatingDoodles";
import { sectionDoodles } from "@/data/doodles";

export type SectionAccent = "butter" | "pink" | "lilac" | "mint" | "peach" | "sky";

// Tailwind only generates classes it can find written out in full in your code,
// so we list each class completely instead of building it like `bg-${accent}`.
const accentClasses: Record<SectionAccent, string> = {
  butter: "bg-butter",
  pink: "bg-pink",
  lilac: "bg-lilac",
  mint: "bg-mint",
  peach: "bg-peach",
  sky: "bg-sky",
};

type SectionProps = {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  accent: SectionAccent;
  children: ReactNode;
};

export function Section({ id, number, label, title, accent, children }: SectionProps) {
  const titleId = `${id}-title`;
   let doodles = sectionDoodles[id];
  if (doodles === undefined) {
    doodles = [];
  }

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="relative scroll-mt-20 overflow-hidden border-t-2 border-rule py-20 sm:py-28"
    >
      {/* Giant outlined number in the background. Decorative only, so screen readers skip it. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-2 select-none font-display text-[9rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:2px_var(--rule)] sm:right-8 sm:text-[14rem]"
      >
        {number}
      </span>
       <FloatingDoodles items={doodles} className="hidden xl:block" />

      <Container className="relative">
        <Reveal>
          <p
            className={`${accentClasses[accent]} inline-block -rotate-2 rounded-md border-2 border-border px-2.5 py-1 font-mono text-xs font-bold tracking-widest text-ink shadow-chunky-sm`}
          >
            {`// ${number}. ${label.toUpperCase()}`}
          </p>
          <h2 id={titleId} className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}