import { Hero } from "@/components/sections/Hero";
import { StackMarquee } from "@/components/sections/StackMarquee";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
// Only show projects that are ready. Flip `published` to true in projects.ts to add one.
const publishedProjects = projects.filter((project) => project.published);

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
            <Section id="work" accent="butter" number="01" label="Selected work" title="Shipped projects, with the receipts">
        <div className="space-y-24">
                    {publishedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
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