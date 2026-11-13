import type { Accent } from "@/lib/accents";

export type Receipt = {
  id: string;
  label: string;
  before: string;
  after: string;
  context: string;
  accent: Accent;
};

export const receipts: Receipt[] = [
  {
    id: "carefinder",
    label: "CareFinder",
    before: "Scattered, outdated hospital lists",
    after: "150 searchable hospitals across all 36 states and the FCT",
    context: "With a map, CSV export and email sharing, free for anyone to use.",
    accent: "butter",
  },
  {
    id: "stokk",
    label: "Stokk · HOPEX COMMS",
    before: "Stock tracked in notebooks and spreadsheets",
    after: "Every phone tracked by IMEI, with profit locked in at each sale",
    context: "A live tool for a real phone retailer, with owner and attendant roles.",
    accent: "pink",
  },
  {
    id: "security",
    label: "CareFinder security review",
    before: "Any user could make themselves an admin",
    after: "Server-only roles, fixed database rules, escaped emails",
    context: "Found in my own code, fixed on a branch, tested and shipped through a pull request.",
    accent: "lilac",
  },
];