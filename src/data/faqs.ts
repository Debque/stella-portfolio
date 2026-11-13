export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How did you get from customer relations to frontend engineering?",
    answer:
      "I studied Food Science, then spent over seven years in customer relations at VIVO and Gionee, helping people who were confused by their phones. Eventually I wanted to build the screens instead of explaining them. AltSchool Africa's Frontend Engineering programme gave me the structure, and CareFinder and Stokk are where I put it into practice.",
  },
  {
    question: "What do you focus on when you build?",
    answer:
      "Three things. Pages that load quickly on mobile data. Interfaces that work with a keyboard, a screen reader and reduced motion. And code another developer can pick up: clear TypeScript types and small, focused components. I also check the basics of security, which is how I found and fixed an admin-role issue in CareFinder.",
  },
  {
    question: "What's your stack?",
    answer:
      "Day to day: Next.js with the App Router, TypeScript, Tailwind CSS and Supabase, with TanStack Query for server data. I've also built with React and Vite, and with Vue 3 and Vue Router.",
  },
  {
    question: "Are you available?",
    answer:
      "Yes. I'm open to full-time frontend roles, remote or on-site in Lagos, and to selected contract work. The quickest way to reach me is the form below or email.",
  },
];