"use client";

import { useActionState } from "react";
import { motion } from "motion/react";
import { Loader2, Send } from "lucide-react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle", message: "" };

const inputClasses =
  "mt-2 w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/70 transition-shadow focus:shadow-chunky-sm focus:outline-none aria-[invalid=true]:border-pink";

type FieldProps = {
  label: string;
  name: "name" | "email" | "message";
  type?: string;
  autoComplete?: string;
  placeholder: string;
  error?: string;
  defaultValue?: string;
  multiline?: boolean;
};

function Field({ label, name, type = "text", autoComplete, placeholder, error, defaultValue, multiline = false }: FieldProps) {
  const inputId = `contact-${name}`;
  const errorId = `${inputId}-error`;

  let hasError = false;
  let describedBy: string | undefined = undefined;
  if (error) {
    hasError = true;
    describedBy = errorId;
  }

  let control = null;
  if (multiline) {
    control = (
      <textarea
        id={inputId}
        name={name}
        rows={5}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={hasError}
        aria-describedby={describedBy}
        className={`${inputClasses} resize-y`}
      />
    );
  } else {
    control = (
      <input
        id={inputId}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={hasError}
        aria-describedby={describedBy}
        className={inputClasses}
      />
    );
  }

  return (
    <div>
      <label htmlFor={inputId} className="font-mono text-xs font-bold tracking-widest">
        {label}
      </label>
      {control}
      {error && (
        <p id={errorId} className="mt-2 text-sm font-bold text-foreground">
          <span aria-hidden="true" className="mr-1 text-pink">
            ●
          </span>
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

  // After a successful send, swap the form for a thank-you card.
  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        role="status"
        className="rounded-2xl border-2 border-border bg-mint p-8 text-ink shadow-chunky"
      >
        <p className="font-display text-3xl font-extrabold">Message sent ✦</p>
        <p className="mt-3 leading-relaxed">{state.message}</p>
      </motion.div>
    );
  }

  let buttonContent = (
    <>
      Send message <Send className="h-4 w-4" aria-hidden="true" />
    </>
  );
  if (isPending) {
    buttonContent = (
      <>
        Sending <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
      </>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="space-y-6 rounded-2xl border-2 border-border bg-surface p-6 shadow-chunky sm:p-8"
    >
      <Field
        label="YOUR NAME"
        name="name"
        autoComplete="name"
        placeholder="Ada Lovelace"
        error={state.fieldErrors?.name}
        defaultValue={state.values?.name}
      />
      <Field
        label="YOUR EMAIL"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        error={state.fieldErrors?.email}
        defaultValue={state.values?.email}
      />
      <Field
        label="ROLE OR PROJECT"
        name="message"
        placeholder="Tell me about the role, the team, or what you'd like to build."
        error={state.fieldErrors?.message}
        defaultValue={state.values?.message}
        multiline
      />

      {/* Honeypot for spam bots: hidden from people and screen readers */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite">
        {state.status === "error" && (
          <p className="rounded-xl border-2 border-border bg-pink px-4 py-3 text-sm font-bold text-ink">
            {state.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-butter px-5 py-3 font-mono text-sm font-bold text-ink shadow-chunky-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-chunky active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground motion-reduce:transition-none"
      >
        {buttonContent}
      </button>
    </form>
  );
}