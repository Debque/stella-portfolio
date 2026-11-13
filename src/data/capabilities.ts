import type { Accent } from "@/lib/accents";

export type Capability = {
  id: string;
  title: string;
  accent: Accent;
  tools: string[];
  description: string;
};

// Every tool listed here appears in at least one of your public repos.
export const capabilities: Capability[] = [
  {
    id: "001",
    title: "Frontend foundations",
    accent: "butter",
    tools: ["React", "Next.js App Router", "TypeScript"],
    description:
      "Typed components, server and client components used where each makes sense, and semantic HTML that works with or without JavaScript.",
  },
  {
    id: "002",
    title: "Data and state",
    accent: "lilac",
    tools: ["Supabase", "TanStack Query", "Zustand", "Axios", "Zod"],
    description:
      "Postgres with row level security, authentication, server data caching, client state, and validating data before it reaches the database.",
  },
  {
    id: "003",
    title: "Accessible, responsive UI",
    accent: "mint",
    tools: ["Tailwind CSS", "shadcn/ui", "Motion", "React Hook Form"],
    description:
      "Mobile-first layouts, visible focus states, keyboard support, screen reader labels and animations that respect reduced motion. This site is built that way.",
  },
  {
    id: "004",
    title: "Testing and shipping",
    accent: "peach",
    tools: ["Vitest", "Playwright", "GitHub Actions", "Vercel"],
    description:
      "Unit and end-to-end tests, a CI pipeline that lints and builds every push, feature branches and pull requests, and preview deploys before anything goes live.",
  },
];

export const alsoUsed: string[] = ["Vue 3", "Vue Router", "Vite", "Mapbox", "Resend", "Firebase", "Tiptap"];