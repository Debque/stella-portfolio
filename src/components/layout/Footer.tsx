import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t-2 border-border">
      <Container className="flex flex-col gap-4 py-10 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-bold text-foreground">{site.name.toUpperCase()}</span> · {site.location}
        </p>
        <ul className="flex gap-6">
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              LinkedIn ↗
            </a>
          </li>
                   <li>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}