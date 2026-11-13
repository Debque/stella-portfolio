import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The preview image shown when your link is shared on LinkedIn, WhatsApp, X, Slack...
export const alt = "Stella Adegoke — Frontend Engineer in Lagos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read a font file from the @fontsource package, so the image uses your real display font.
async function loadFont(weight: number) {
  const fontPath = join(
    process.cwd(),
    "node_modules/@fontsource/bricolage-grotesque/files",
    `bricolage-grotesque-latin-${weight}-normal.woff`,
  );
  return readFile(fontPath);
}

// A five-pointed star, drawn as SVG (the font doesn't include a ★ character)
function Star() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24">
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.5l7.1-.6z" fill="#1c1b2e" />
    </svg>
  );
}

export default async function OpengraphImage() {
  const [bold, medium] = await Promise.all([loadFont(800), loadFont(500)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#fdf7ec",
          backgroundImage: "radial-gradient(#e6dcc8 2px, transparent 2px)",
          backgroundSize: "32px 32px",
          color: "#1c1b2e",
          fontFamily: "Bricolage",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 22px",
              backgroundColor: "#ffd84d",
              border: "4px solid #1c1b2e",
              borderRadius: 14,
              boxShadow: "6px 6px 0 #1c1b2e",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            <Star />
            STELLA
            <Star />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 20px",
              backgroundColor: "#a9e5b0",
              border: "4px solid #1c1b2e",
              borderRadius: 999,
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: "#1c1b2e" }} />
            OPEN TO FRONTEND ROLES
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            columnGap: 22,
            rowGap: 10,
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          <span>I build</span>
          <span
            style={{
              padding: "0 18px",
              backgroundColor: "#ffd84d",
              border: "4px solid #1c1b2e",
              borderRadius: 16,
              transform: "rotate(-2deg)",
            }}
          >
            resilient
          </span>
          <span>interfaces that survive</span>
          <span
            style={{
              padding: "0 18px",
              backgroundColor: "#ff9fc6",
              border: "4px solid #1c1b2e",
              borderRadius: 16,
              transform: "rotate(1.5deg)",
            }}
          >
            low bandwidth.
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 500, color: "#55536e" }}>
          <span>Frontend Engineer · Lagos, Nigeria</span>
          <span>Next.js · TypeScript · Supabase</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: bold, weight: 800, style: "normal" },
        { name: "Bricolage", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}