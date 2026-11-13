import { alsoUsed, capabilities } from "@/data/capabilities";
import { accentBg } from "@/lib/accents";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";

export function Stack() {
  return (
    <div>
      <RevealGroup className="grid gap-6 sm:grid-cols-2">
        {capabilities.map((capability) => (
          <RevealItem key={capability.id} className="h-full">
            <article className="h-full rounded-2xl border-2 border-border bg-surface p-6 shadow-chunky-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-chunky motion-reduce:transition-none">
              <div className="flex items-center justify-between">
                <span
                  className={`${accentBg[capability.accent]} rounded-md border-2 border-border px-2 py-0.5 font-mono text-xs font-bold text-ink`}
                >
                  {capability.id}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">{capability.title}</h3>
              <ul aria-label="Tools" className="mt-3 flex flex-wrap gap-2">
                {capability.tools.map((tool) => (
                  <li key={tool} className="rounded-full border-2 border-border px-3 py-0.5 font-mono text-xs font-bold">
                    {tool}
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed text-muted">{capability.description}</p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10">
        <p className="font-mono text-xs font-bold tracking-widest text-muted">{"// ALSO BUILT WITH"}</p>
        <p className="mt-2 font-mono text-sm">{alsoUsed.join(" · ")}</p>
      </Reveal>
    </div>
  );
}