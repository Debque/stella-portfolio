import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type SectionProps = {
  id: string;
  number: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
};

export function Section({ id, number, label, title, children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="scroll-mt-20 border-t-2 border-rule py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs font-bold tracking-widest text-muted">
            {`// ${number}. ${label.toUpperCase()}`}
          </p>
          <h2 id={titleId} className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}