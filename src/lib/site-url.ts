// The site's full public address, used for link previews, the sitemap and robots.txt.
export function getSiteUrl(): string {
  // 1. A custom domain you set yourself in Vercel (for example https://stella.dev)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // 2. Vercel sets this automatically to your production address (without https://)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  // 3. On your own computer
  return "http://localhost:3000";
}