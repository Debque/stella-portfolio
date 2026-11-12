import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { FloatingDoodles } from "@/components/ui/FloatingDoodles";

export default function HomePage() {
  return (
    <>
      {/* Temporary hero: we build the real one in Phase 5 */}
      <section id="top" className="py-24 sm:py-32">
        <FloatingDoodles />
        <Container>
          <Reveal>
            <h1 className="font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
              I build{" "}
              <span className="rounded-lg border-2 border-border bg-butter px-2 text-ink">resilient</span>{" "}
              interfaces that survive{" "}
              <span className="rounded-lg border-2 border-border bg-pink px-2 text-ink">low bandwidth</span>.
            </h1>
          </Reveal>
        </Container>
      </section>

      <Section id="work" accent="butter" number="01" label="Selected work" title="Shipped projects">
        <p className="h-64 text-muted">Project cards go here (Phase 6).</p>
      </Section>
 <Section id="stack" accent="lilac" number="02" label="Stack" title="What I use daily">

        <p className="h-64 text-muted">Capabilities go here (Phase 7).</p>
      </Section>

       <Section id="receipts" accent="mint" number="03" label="Receipts" title="Proof over promises">
        <p className="h-64 text-muted">Outcomes go here (Phase 7).</p>
      </Section>

       <Section id="faq" accent="peach" number="04" label="FAQ" title="Questions you probably have">
        <p className="h-64 text-muted">The accordion goes here (Phase 7).</p>
      </Section>

      <Section id="contact" accent="pink" number="05" label="Contact" title="Let's build something">
        <p className="h-64 text-muted">The contact form goes here (Phase 8).</p>
      </Section>
    </>
  );
}