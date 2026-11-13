import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24 sm:py-32">
      <span className="-rotate-2 rounded-md border-2 border-border bg-peach px-2.5 py-1 font-mono text-xs font-bold tracking-widest text-ink shadow-chunky-sm">
        {"// ERROR 404"}
      </span>
      <h1 className="mt-6 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-prose text-lg text-muted">
        The link might be old, or there might be a typo in the address. Everything worth seeing is on the homepage.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to the homepage
        </ButtonLink>
      </div>
    </Container>
  );
}