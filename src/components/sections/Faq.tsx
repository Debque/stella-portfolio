"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { EASE_OUT } from "@/lib/motion";

export function Faq() {
  // Which question is open, by its position in the list. null = all closed.
  // The first one starts open so visitors can see how it works.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div className="divide-y-2 divide-border overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-chunky-sm">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        let iconRotation = 0;
        if (isOpen) {
          iconRotation = 45; // a plus turned 45° becomes an ×
        }

        let panel = null;
        if (isOpen) {
          panel = (
            <motion.div
              key="panel"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              <p className="max-w-prose px-6 pb-6 leading-relaxed text-muted">{faq.answer}</p>
            </motion.div>
          );
        }

        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-lg font-extrabold tracking-tight transition-colors hover:bg-background focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-foreground sm:text-xl"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: iconRotation }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-border bg-peach text-ink"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>{panel}</AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}