"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Clipboard can be blocked (old browsers, some privacy settings). Fall back to opening the email app.
      window.location.href = `mailto:${email}`;
    }
  }

  let announcement = "";
  if (copied) {
    announcement = "Email address copied";
  }

  let label = (
    <motion.span
      key="copy"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      className="inline-flex items-center gap-2"
    >
      <Copy className="h-4 w-4" aria-hidden="true" /> Copy email
    </motion.span>
  );
  if (copied) {
    label = (
      <motion.span
        key="copied"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        className="inline-flex items-center gap-2"
      >
        <Check className="h-4 w-4" aria-hidden="true" /> Copied!
      </motion.span>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-w-36 items-center justify-center overflow-hidden rounded-xl border-2 border-border bg-surface px-4 py-2 font-mono text-sm font-bold shadow-chunky-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-chunky active:translate-x-0.5 active:translate-y-0.5 active:shadow-none motion-reduce:transition-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        {label}
      </AnimatePresence>
      <span className="sr-only" aria-live="polite">
        {announcement}
      </span>
    </button>
  );
}