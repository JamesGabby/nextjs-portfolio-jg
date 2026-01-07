import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";

export const alt = "James Gabbitus - Next.js Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
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
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 24,
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
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
            fontSize: 64,
            fontWeight: "bold",
            color: "white",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          James Gabbitus
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          Next.js Developer
        </div>

        {/* Services */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 800,
          }}
        >
          {[
            "AI Chatbots",
            "E-Commerce",
            "Web Apps",
            "Landing Pages",
          ].map((service) => (
            <div
              key={service}
              style={{
                padding: "12px 24px",
                borderRadius: 9999,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                color: "#93c5fd",
                fontSize: 20,
              }}
            >
              {service}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#6b7280",
          }}
        >
          {SITE_CONFIG.url.replace("https://", "")}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}