
export const site = {
  name: "Stella Adenike Adegoke",
  shortName: "Stella",
  role: "Frontend Engineer",
  location: "Lagos, Nigeria",
  email: "adenikikeoye@gmail.com",
  github: "https://github.com/Debque",
  linkedin: "www.linkedin.com/in/stella-webdev", //
};

export type NavLink = {
  id: string; // must match the id of a <Section> on the page
  number: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { id: "work", number: "01", label: "Work" },
  { id: "stack", number: "02", label: "Stack" },
  { id: "receipts", number: "03", label: "Receipts" },
  { id: "faq", number: "04", label: "FAQ" },
];