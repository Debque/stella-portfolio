import { ImageResponse } from "next/og";

// The little icon in the browser tab: a yellow sticker with a star.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffd84d",
          border: "3px solid #1c1b2e",
          borderRadius: 8,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.5l7.1-.6z" fill="#1c1b2e" />
        </svg>
      </div>
    ),
    { ...size },
  );
}