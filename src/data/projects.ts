import type { Accent } from "@/lib/accents";

export type CaseStudy = {
  problem: string;
  approach: string;
  decisions: string[];
  codeFile: string; // the real file path in the repo, shown above the snippet
  code: string; // a short, real excerpt from that file
};

export type Project = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  accent: Accent;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  image?: string; // path inside /public. Leave out to show a placeholder.
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    id: "carefinder",
    number: "01",
    title: "CareFinder",
    tagline: "Find, share and export hospital information across Nigeria.",
    category: "Civic health tool",
    accent: "butter",
    year: "2026",
    description:
      "A searchable directory of 200+ hospitals. Visitors search by name, city or LGA, filter by specialty, explore a map, and export or share what they find. Admins curate entries through a protected dashboard.",
    highlights: [
      "Map radius search using the visitor's location (Mapbox)",
      "CSV export with chosen columns, generated in the browser",
      "Invite-only admin dashboard with review moderation",
      "20 unit tests and 7 end-to-end tests (Vitest, Playwright)",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Mapbox", "Resend", "Tailwind CSS"],
    liveUrl: "https://carefinder-gamma.vercel.app",
    repoUrl: "https://github.com/Debque/Carefinder",
    image: "/projects/carefinder.png",
    caseStudy: {
      problem:
        "Finding a hospital in Nigeria often means outdated lists, dead phone numbers and websites that struggle on mobile data. People need the basics quickly: name, address, phone, specialties and how far away it is.",
      approach:
        "I used Next.js with Supabase so hospital pages are pre-rendered and served fast, then refreshed in the background. Supabase row level security keeps writes admin-only at the database level, and the Mapbox map only loads when it's needed, so the first page stays light.",
      decisions: [
        "Hospital pages refresh every 60 seconds, plus an instant refresh whenever an admin saves a change",
        "The map library is lazy-loaded with next/dynamic to keep the first load small",
        "CSV export runs entirely in the browser, with no server round trip",
        "New admins can only be invited by existing admins, through a Supabase Edge Function",
      ],
      codeFile: "src/lib/csv.ts",
      code: `export function exportToCsv(hospitals: Hospital[], columns: CsvColumn[], query = '') {
  const headers = columns.map(
    (key) => CSV_COLUMNS.find((c) => c.key === key)?.label ?? key
  )
  const rows = hospitals.map((h) => columns.map((key) => getField(h, key)))

  const csv = [
    headers.map(escape).join(','),
    ...rows.map((row) => row.map(escape).join(',')),
  ].join('\\n')

  // Build the file in memory and download it — no server needed
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = \`hospitals-\${slug}\${date}.csv\`
  link.click()
  URL.revokeObjectURL(url)
}`,
    },
  },
  {
    id: "stokk",
    number: "02",
    title: "Stokk",
    tagline: "Inventory and profit tracking for a Lagos phone retailer.",
    category: "Client project · Retail",
    accent: "pink",
    year: "2026",
    description:
      "Built for HOPEX COMMS, a phone and accessories retailer, to replace notebooks and spreadsheets. It tracks every phone by IMEI number, records sales with automatic profit, and gives the owner a live dashboard.",
    highlights: [
      "IMEI tracking for every phone, from purchase to sale",
      "Profit locked in at the moment of sale, so past reports never change",
      "Owner and attendant roles, with cost prices hidden from attendants by database rules",
      "Daily summary email with sales, profit and low-stock alerts",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "Resend"],
    liveUrl: "https://stokkco.com",
    repoUrl: "https://github.com/Debque/stokk",
    image: "/projects/stokk.png",
    caseStudy: {
      problem:
        "The shop tracked stock in notebooks and spreadsheets, so nobody knew exact stock levels or real profit. Phones also need tracking one by one, by IMEI number, not just as a count.",
      approach:
        "I built the app around how the shop actually works: phones tracked unit by unit, accessories tracked by quantity, and two roles. The owner sees everything. Attendants can record sales and check stock, but row level security hides cost prices and profit from them.",
      decisions: [
        "Each sale stores the cost price at that moment, so editing a product later never rewrites past profit",
        "One product model with two tracking modes: per unit (IMEI) or per quantity",
        "Financial data is protected in the database, not just hidden in the interface",
        "A quick-sale button on every screen for busy moments at the counter",
      ],
      codeFile: "src/app/sales/SalesClient.tsx",
      code: `const { error: saleError } = await supabase.from("sales").insert({
  product_id: selectedProduct!.id,
  quantity_sold: qty,
  selling_price: Number(sellingPrice),
  // Snapshot the cost NOW, so this sale's profit never changes later
  cost_price_at_sale: selectedProduct!.is_serialized
    ? Number(stockItems.find((s) => s.id === selectedStockItemId)?.cost_price ?? 0)
    : Number(selectedProduct!.cost_price) * qty,
  sold_at: new Date(saleDate).toISOString(),
});`,
    },
  },
  {
    id: "chatter",
    number: "03",
    title: "Chatter",
    tagline: "A blogging platform with a rich editor and autosave.",
    category: "Content platform",
    accent: "lilac",
    year: "2026",
    description:
      "Writers draft posts in a rich text editor, publish them to a feed, and build an audience through follows, likes, comments and bookmarks. A personal dashboard shows how each post is doing.",
    highlights: [
      "Rich text editor built on Tiptap",
      "Drafts autosave every 30 seconds, with reading time worked out automatically",
      "Follows, likes, comments, bookmarks and notifications",
      "Dashboard with views and likes for each post",
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase", "TanStack Query", "Zustand", "Tiptap"],
    liveUrl: "https://YOUR-CHATTER-URL", // TODO: replace with the live link
    repoUrl: "https://github.com/Debque/Chatter",
    image: "/projects/chatter.png",
    caseStudy: {
      problem:
        "Writers need a calm place to draft, publish and find readers, and they shouldn't lose their work if a tab closes.",
      approach:
        "React and Vite on the front, Supabase for data and auth, TanStack Query for server data and Zustand for app state. Each feature lives in its own hook (useLike, useFollow, useComments, useAutosave), which keeps the page components small and readable.",
      decisions: [
        "Autosave creates the draft on its first save, then keeps updating it, so a post is never lost",
        "One custom hook per feature keeps data logic out of the pages",
        "Reading time is calculated from the post's text at about 200 words per minute",
      ],
      codeFile: "src/hooks/useAutosave.ts",
      code: `const save = useCallback(async () => {
  if (postIdRef.current) {
    // Already saved once: update the existing draft
    await supabase.from('posts')
      .update({ title, body: content, reading_time: calculateReadingTime(content) })
      .eq('id', postIdRef.current)
  } else {
    // First save: create the draft and remember its id
    const { data } = await supabase.from('posts')
      .insert({ author_id: authorId, title: title || 'Untitled', status: 'draft' })
      .select('id').single()
    postIdRef.current = data.id
  }
}, [title, content, authorId])

useEffect(() => {
  const timer = setInterval(save, interval) // every 30 seconds
  return () => clearInterval(timer)
}, [save, interval])`,
    },
  },
];