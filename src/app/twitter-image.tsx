import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";

export const alt = "James Gabbitus - Next.js Developer";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1e3a8a 0%, transparent 50%), radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
            }}
          >
            JG
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "white",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          James Gabbitus
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 28,
            background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          Next.js Developer | AI Chatbots | E-Commerce | Web Apps
        </div>

        {/* CTA */}
        <div
          style={{
            padding: "16px 32px",
            borderRadius: 12,
            background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            color: "white",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Let&apos;s Build Something Amazing
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}