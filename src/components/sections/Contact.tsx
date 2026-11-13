import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <div className="grid gap-12 lg:grid-cols-5">
      <Reveal className="lg:col-span-2">
        <p className="text-lg leading-relaxed text-muted">
          Hiring for a frontend role, or have a product that needs building? Send a message and I&apos;ll reply by
          email, usually within a day.
        </p>

        <dl className="mt-8 space-y-5 font-mono text-sm">
          <div>
            <dt className="text-xs font-bold tracking-widest text-muted">EMAIL</dt>
            <dd className="mt-1 break-all font-bold">
              <a href={`mailto:${site.email}`} className="underline decoration-2 underline-offset-4 hover:decoration-pink">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold tracking-widest text-muted">BASED IN</dt>
            <dd className="mt-1 font-bold">{site.location} · West Africa Time (UTC+1)</dd>
          </div>
          <div>
            <dt className="text-xs font-bold tracking-widest text-muted">OPEN TO</dt>
            <dd className="mt-1 font-bold">Full-time roles (remote or Lagos) · Selected contracts</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-4">
          <CopyEmailButton email={site.email} />
          <ButtonLink href={site.linkedin} variant="secondary" external>
            LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="relative lg:col-span-3">
        <ContactForm />
      </Reveal>
    </div>
  );
}