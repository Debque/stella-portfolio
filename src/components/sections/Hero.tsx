import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { heroDoodles } from "@/data/doodles";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { FloatingDoodles } from "@/components/ui/FloatingDoodles";
import { Highlight } from "@/components/ui/Highlight";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <FloatingDoodles items={heroDoodles} />

      <Container className="relative">
        {/* Status line */}
        <RevealGroup className="flex flex-wrap items-center gap-3">
          <RevealItem>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-mint px-3 py-1 font-mono text-xs font-bold text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
              </span>
              OPEN TO FRONTEND ROLES
            </span>
          </RevealItem>
          <RevealItem>
            <span className="font-mono text-xs font-bold tracking-widest text-muted">
              {`${site.location.toUpperCase()} · UTC+1 · REMOTE OK`}
            </span>
          </RevealItem>
        </RevealGroup>

        {/* The headline is visible straight away (good for load speed). Only the highlights animate. */}
        <h1
          id="hero-title"
          className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl"
        >
          I build{" "}
          <Highlight accent="butter" tilt={-2} delay={0.2}>
            resilient
          </Highlight>{" "}
          interfaces that survive{" "}
          {/* nowrap keeps the full stop on the same line as its highlight */}
          <span className="whitespace-nowrap">
            <Highlight accent="pink" tilt={1.5} delay={0.45}>
              low bandwidth
            </Highlight>
            .
          </span>
        </h1>

        <RevealGroup className="mt-8 max-w-2xl space-y-8">
          <RevealItem>
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              Hi, I&apos;m <strong className="font-bold text-foreground">{site.shortName}</strong>, a frontend
              engineer in Lagos. I build fast, accessible apps with Next.js, TypeScript and Supabase, like a
              hospital directory for Nigerians and an inventory system for a real phone retailer. Years in
              customer relations taught me to build for the people actually using the screen.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="#work">
                See my work <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={site.github} variant="secondary" external>
                GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={site.linkedin} variant="secondary" external>
                LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}