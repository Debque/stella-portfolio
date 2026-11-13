import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionProvider } from "@/components/MotionProvider";
import { getSiteUrl } from "@/lib/site-url";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const siteTitle = "Stella Adegoke — Frontend Engineer";
const siteDescription =
  "Frontend engineer in Lagos building fast, accessible web apps with Next.js, TypeScript and Supabase.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteTitle,
    template: "%s · Stella Adegoke",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Stella Adegoke",
    title: siteTitle,
    description: siteDescription,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const fontVariables = `${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`;

  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:border-2 focus:border-border focus:bg-butter focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <MotionProvider>
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}