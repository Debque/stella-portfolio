import { ArrowDown } from "lucide-react";
import { receipts } from "@/data/receipts";
import { accentBg } from "@/lib/accents";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { Strikethrough } from "@/components/ui/Strikethrough";

export function Receipts() {
  return (
    <RevealGroup className="grid gap-6 lg:grid-cols-3">
      {receipts.map((receipt) => (
        <RevealItem key={receipt.id} className="h-full">
          <article className="flex h-full flex-col rounded-2xl border-2 border-border bg-surface p-6 shadow-chunky-sm">
            <span
              className={`${accentBg[receipt.accent]} self-start rounded-md border-2 border-border px-2 py-0.5 font-mono text-xs font-bold text-ink`}
            >
              {receipt.label.toUpperCase()}
            </span>

            <p className="mt-5 font-mono text-[11px] font-bold tracking-widest text-muted">BEFORE</p>
            <p className="mt-1 text-muted">
              <Strikethrough>{receipt.before}</Strikethrough>
            </p>

            <ArrowDown className="my-3 h-5 w-5" aria-hidden="true" />

            <p className="font-mono text-[11px] font-bold tracking-widest text-muted">AFTER</p>
            <p className="mt-1 font-display text-xl font-extrabold leading-snug tracking-tight">{receipt.after}</p>

            <p className="mt-auto border-t-2 border-dashed border-rule pt-4 text-sm leading-relaxed text-muted">
              {receipt.context}
            </p>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}