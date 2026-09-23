import { ImageResponse } from "next/og";
import { getSiteProfile } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const profile = await getSiteProfile();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#07090e",
          backgroundImage: "radial-gradient(circle at 50% 40%, #152238 0%, #07090e 72%)",
          color: "#ffffff"
        }}
      >
        {/* Favicon L Logo Squircle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 240,
            height: 240,
            borderRadius: 60,
            background: "linear-gradient(145deg, #2563EB 0%, #1D4ED8 45%, #0B132B 100%)",
            border: "3px solid rgba(56, 189, 248, 0.45)",
            boxShadow: "0 24px 64px rgba(37, 99, 235, 0.45)",
            marginBottom: 36
          }}
        >
          <svg
            width="170"
            height="170"
            viewBox="0 0 120 120"
            fill="none"
            style={{ display: "flex" }}
          >
            {/* 3D Depth Shadow */}
            <path
              d="M 45, 27 A 9 9 0 0 1 54, 36 L 54, 73 A 6 6 0 0 0 60, 79 L 79, 79 A 9 9 0 0 1 88, 88 A 9 9 0 0 1 79, 97 L 60, 97 A 24 24 0 0 1 36, 73 L 36, 36 A 9 9 0 0 1 45, 27 Z"
              fill="#080E1E"
              opacity="0.6"
            />
            {/* L Letterform Monogram */}
            <path
              d="M 45, 25 A 9 9 0 0 1 54, 34 L 54, 71 A 6 6 0 0 0 60, 77 L 79, 77 A 9 9 0 0 1 88, 86 A 9 9 0 0 1 79, 95 L 60, 95 A 24 24 0 0 1 36, 71 L 36, 34 A 9 9 0 0 1 45, 25 Z"
              fill="#FFFFFF"
            />
            {/* Specular Light Highlight */}
            <path
              d="M 37, 34 A 9 9 0 0 1 45, 25 A 9 9 0 0 1 53, 34"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Inner Tech Cyan Accent */}
            <path
              d="M 54, 69 A 6 6 0 0 0 60, 77 L 78, 77"
              stroke="#38BDF8"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Candidate Identity */}
        <div
          style={{
            display: "flex",
            fontSize: 50,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            marginBottom: 12
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#38BDF8"
          }}
        >
          {profile.role}
        </div>
      </div>
    ),
    size
  );
}
