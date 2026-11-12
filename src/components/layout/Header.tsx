import { navLinks, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";

// The underline that grows from the left on hover. It uses `transform`
// (scale), so it stays smooth, and it's switched off for reduced motion.
const navLinkClasses =
  "relative py-1 font-mono text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-200 hover:after:scale-x-100 motion-reduce:after:transition-none";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-border bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="rounded-lg border-2 border-border bg-butter px-3 py-1 font-display text-lg font-extrabold text-ink shadow-chunky-sm"
        >
          ★ {site.shortName.toUpperCase()} ★
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={navLinkClasses}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ButtonLink href="#contact" className="hidden md:inline-flex">
            Let&apos;s talk
          </ButtonLink>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}