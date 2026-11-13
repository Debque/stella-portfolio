"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { CaseStudy as CaseStudyData } from "@/data/projects";
import { EASE_OUT } from "@/lib/motion";

type CaseStudyProps = {
  projectId: string;
  title: string;
  caseStudy: CaseStudyData;
};

export function CaseStudy({ projectId, title, caseStudy }: CaseStudyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `${projectId}-case-study`;

  function togglePanel() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  let buttonText = "Read the case study";
  let chevronRotation = 0;
  if (isOpen) {
    buttonText = "Close the case study";
    chevronRotation = 180;
  }

  let panel = null;
  if (isOpen) {
    panel = (
      <motion.div
        key="panel"
        id={panelId}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
        className="overflow-hidden"
      >
        <div className="mt-6 grid gap-8 rounded-2xl border-2 border-border bg-surface p-6 sm:p-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold tracking-widest text-muted">01. THE PROBLEM</h4>
              <p className="mt-2 leading-relaxed">{caseStudy.problem}</p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold tracking-widest text-muted">02. WHAT I BUILT</h4>
              <p className="mt-2 leading-relaxed">{caseStudy.approach}</p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold tracking-widest text-muted">03. KEY DECISIONS</h4>
              <ul className="mt-2 space-y-2">
                {caseStudy.decisions.map((decision) => (
                  <li key={decision} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-1 text-xs">
                      ✦
                    </span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="font-mono text-xs font-bold tracking-widest text-muted">04. FROM THE CODE</h4>
            <div className="mt-2 overflow-hidden rounded-xl border-2 border-border">
              <p className="border-b-2 border-border bg-butter px-4 py-2 font-mono text-xs font-bold text-ink">
                {caseStudy.codeFile}
              </p>
              <pre className="overflow-x-auto bg-[#15141f] p-4 font-mono text-xs leading-relaxed text-[#fdf7ec]">
                <code>{caseStudy.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={togglePanel}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={`${buttonText}: ${title}`}
        className="inline-flex items-center gap-2 font-mono text-sm font-bold underline decoration-2 underline-offset-4 hover:decoration-pink"
      >
        {buttonText}
        <motion.span animate={{ rotate: chevronRotation }} transition={{ duration: 0.3, ease: EASE_OUT }}>
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>{panel}</AnimatePresence>
    </div>
  );
}