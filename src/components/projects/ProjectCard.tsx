import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { accentBg } from "@/lib/accents";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserFrame } from "@/components/projects/BrowserFrame";
import { CaseStudy } from "@/components/projects/CaseStudy";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Reveal>
      <article aria-labelledby={`${project.id}-title`}>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Screenshot: links to the live site. `group` lets the image zoom on hover. */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the live ${project.title} site`}
            className="group block transition-transform duration-300 hover:-rotate-1 motion-reduce:transition-none"
          >
            <BrowserFrame title={project.title} url={project.liveUrl} accent={project.accent} image={project.image} />
          </a>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`${accentBg[project.accent]} rounded-md border-2 border-border px-2 py-0.5 font-mono text-xs font-bold text-ink`}
              >
                {project.number}
              </span>
              <span className="font-mono text-xs font-bold tracking-widest text-muted">
                {`${project.category.toUpperCase()} · ${project.year}`}
              </span>
            </div>

            <h3 id={`${project.id}-title`} className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-2 text-lg font-bold">{project.tagline}</p>
            <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

            <ul className="mt-6 space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden="true" className={`${accentBg[project.accent]} mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-border`} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <ul aria-label="Built with" className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tool) => (
                <li key={tool} className="rounded-full border-2 border-border bg-surface px-3 py-0.5 font-mono text-xs font-bold">
                  {tool}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={project.liveUrl} external>
                Live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={project.repoUrl} variant="secondary" external>
                Code <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Full width under the card, so the code has room */}
        <CaseStudy projectId={project.id} title={project.title} caseStudy={project.caseStudy} />
      </article>
    </Reveal>
  );
}