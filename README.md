# Stella Adegoke — Portfolio

My portfolio as a frontend engineer in Lagos, Nigeria. Built with Next.js, TypeScript, Tailwind CSS and Motion.

**Live site:** _add your Vercel URL here after deploying_

## Highlights

- **Design system with tokens.** Every colour is a CSS variable with light and dark values, registered with Tailwind v4.
- **Server components by default.** Only the pieces that need the browser (theme toggle, menus, accordions, the form) are client components.
- **Accessible.** Skip link, keyboard-friendly menus and accordions, labelled form fields, and every animation respects reduced motion.
- **Content separate from layout.** Projects, skills, receipts and FAQs live in `src/data/`, so updating text never touches components.
- **Working contact form.** A Server Action validates input with Zod and sends email through Resend. A honeypot field filters spam.
- **Generated link previews.** The Open Graph image and favicon are rendered from code with `next/og`.

## Tech

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Motion · next-themes · Zod · Resend

## Run it locally

1. `npm install`
2. Create `.env.local` with `RESEND_API_KEY` and `CONTACT_TO_EMAIL`
3. `npm run dev` and open http://localhost:3000