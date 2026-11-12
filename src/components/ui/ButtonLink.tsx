import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

// Shared by every button: chunky border, offset shadow, and the "press" animation.
const baseClasses =
  "inline-flex items-center gap-2 rounded-xl border-2 border-border px-4 py-2 font-mono text-sm font-bold shadow-chunky-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-chunky active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground motion-reduce:transition-none";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-pink text-ink";
  } else {
    variantClasses = "bg-surface text-foreground";
  }

  // External links open in a new tab. rel="noopener noreferrer" stops
  // the new tab from being able to control this page (a security habit).
  let target: string | undefined = undefined;
  let rel: string | undefined = undefined;
  if (external) {
    target = "_blank";
    rel = "noopener noreferrer";
  }

  return (
    <a href={href} target={target} rel={rel} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </a>
  );
}