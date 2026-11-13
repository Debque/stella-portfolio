"use server";

import { Resend } from "resend";
import { z } from "zod";

// What the form gets back after each submit.
export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
  // What the visitor typed, so the form can refill itself after an error
  values?: {
    name: string;
    email: string;
    message: string;
  };
};

// The rules each field must follow. This runs on the server, so it can't be skipped.
const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Please keep your name under 100 characters."),
  email: z.string().trim().pipe(z.email("Please enter a valid email address.")),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a sentence (10 or more characters).")
    .max(5000, "Please keep your message under 5,000 characters."),
});

// Turn a FormData value into a plain string (it could be missing or a file).
function readText(formData: FormData, field: string): string {
  const value = formData.get(field);
  if (typeof value === "string") {
    return value;
  }
  return "";
}

export async function sendContactMessage(_previousState: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: a hidden field that people never see, but spam bots fill in.
  // If it has a value, pretend it worked and quietly do nothing.
  if (readText(formData, "company") !== "") {
    return { status: "success", message: "Thanks! Your message is on its way." };
  }

  const values = {
    name: readText(formData, "name"),
    email: readText(formData, "email"),
    message: readText(formData, "message"),
  };

  const result = contactSchema.safeParse(values);

  if (!result.success) {
    const errors = z.flattenError(result.error).fieldErrors;
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: {
        name: errors.name?.[0],
        email: errors.email?.[0],
        message: errors.message?.[0],
      },
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return {
      status: "error",
      message: "The form isn't working right now. Please email me directly instead.",
      values,
    };
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = result.data;

  const { error } = await resend.emails.send({
    from: "Portfolio contact <onboarding@resend.dev>",
    to: [toEmail],
    replyTo: email, // pressing "Reply" in your inbox answers the visitor
    subject: `Portfolio message from ${name}`,
    // Plain text, not HTML, so nothing the visitor types can be turned into links or code
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email me directly instead.",
      values,
    };
  }

  return { status: "success", message: "Thanks! Your message is on its way. I'll reply by email." };
}