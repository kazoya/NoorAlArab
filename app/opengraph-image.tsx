import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1c2740",
          color: "#f6f1e8",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 22, letterSpacing: 3, color: "#c7924a" }}>
            INDUSTRIAL AI & AUTOMATION CONCEPT
          </div>
          <div style={{ fontSize: 58, fontWeight: 600, lineHeight: 1.15 }}>
            Nour Al Arab for Plastic Industries
          </div>
          <div style={{ fontSize: 26, color: "#d5d0c6", maxWidth: 880 }}>
            An independent concept to connect sales, production, knowledge and logistics. Not an official company system.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#c7924a" }}>Jordan · Discovery-first proposal</div>
      </div>
    ),
    size,
  );
}
