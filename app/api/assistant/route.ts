import { NextResponse } from "next/server";
import { profileData } from "@/lib/data/profile";
import { skillsData } from "@/lib/data/skills";
import { experienceData } from "@/lib/data/experience";

export const runtime = "nodejs";

const streamHeaders = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
  "Connection": "keep-alive",
  "X-Accel-Buffering": "no",
};

function createTextStream(text: string) {
  const encoder = new TextEncoder();
  const words = text.split(/(\s+)/);

  return new ReadableStream({
    async start(controller) {
      for (const word of words) {
        controller.enqueue(encoder.encode(word));
        await new Promise((resolve) => setTimeout(resolve, 15));
      }
      controller.close();
    },
  });
}

function getSystemPrompt() {
  return `You are the AI Engineering Copilot for ${profileData.name}, a ${profileData.role}.
Location: ${profileData.location}
Notice Period: ${profileData.noticePeriod}
Summary: ${profileData.summary}
Enterprise Clients: Visa Inc. (VOBO WebSDK, Flex Web SDK, Click to Pay Client via Viyansys Solutions) and Maxco System (B2B CRM, Coimbatore Marathon).
Skills: React 18/19, TypeScript, Next.js, WebSDK Sandboxing, PostMessage API, WebAuthn/Passkeys, Android CredentialManager, WCAG 2.2 AA / VPAT, Redux Toolkit, Docker, Jenkins CI/CD.
Always answer questions accurately, concisely, and professionally based on this verified evidence.`;
}

function generateLocalAnswer(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("experience") || lower.includes("work") || lower.includes("company") || lower.includes("visa")) {
    return `${profileData.name} has 4+ years of enterprise FinTech experience. Currently at Viyansys Solutions architecting Web SDKs for Visa Inc. (including VOBO WebSDK, Flex Web SDK, and Click to Pay), and previously at Maxco System building high-scale B2B CRM platforms and race telemetry systems.`;
  }

  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack") || lower.includes("react")) {
    return `${profileData.name}'s core technical stack includes React.js (18/19), TypeScript, Next.js, Web SDK Architecture, WebAuthn/Passkeys (FIDO2), Android CredentialManager, PostMessage cross-origin communication, Redux Toolkit, TanStack Table, WCAG 2.2 AA / VPAT accessibility compliance, Docker, and Jenkins CI/CD.`;
  }

  if (lower.includes("notice") || lower.includes("availab") || lower.includes("join") || lower.includes("start")) {
    return `${profileData.name} has a notice period of ${profileData.noticePeriod}. He is actively interviewing for Senior Frontend Developer and Web SDK Architect roles.`;
  }

  if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach")) {
    return `You can reach ${profileData.name} directly via email at ${profileData.email} or by phone at ${profileData.phone}. He is based in Chennai and open to remote or relocation opportunities worldwide.`;
  }

  if (lower.includes("project") || lower.includes("sdk") || lower.includes("vobo")) {
    return `Key projects include: 1) VOBO WebSDK (Visa Open Banking Optimization) with PostMessage isolation and Android CredentialManager passkeys; 2) Flex Web SDK with PCI-DSS tokenization; 3) Click to Pay Client with FIDO2 biometrics; and 4) Enterprise B2B CRM managing 50k+ records at 60 FPS.`;
  }

  return `${profileData.name} is a ${profileData.role} with 4 years of enterprise FinTech experience at Visa Inc. client and Maxco System. Specializing in Web SDKs, React 19, WebAuthn Passkeys, and secure cross-origin web architectures. Feel free to ask about his experience, technical skills, projects, notice period, or contact details!`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body?.message?.trim();
    const history = Array.isArray(body?.history) ? body.history : [];

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.GOOGLE_AI_KEY ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (apiKey) {
      try {
        const systemPrompt = getSystemPrompt();
        const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

        const recentHistory = history.slice(-6);
        for (const item of recentHistory) {
          contents.push({
            role: item.role === "assistant" ? "model" : "user",
            parts: [{ text: item.content }],
          });
        }

        contents.push({
          role: "user",
          parts: [{ text: message }],
        });

        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const geminiResponse = await fetch(geminiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: systemPrompt }],
            },
            contents,
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 800,
            },
          }),
        });

        if (geminiResponse.ok) {
          const result = await geminiResponse.json();
          const generatedText =
            result?.candidates?.[0]?.content?.parts?.[0]?.text || "";

          if (generatedText) {
            return new Response(createTextStream(generatedText), {
              headers: { ...streamHeaders, "X-Provider": "Google-Gemini" },
            });
          }
        }
      } catch (err) {
        console.warn("Gemini API call failed, falling back to local grounded answers:", err);
      }
    }

    const fallbackText = generateLocalAnswer(message);
    return new Response(createTextStream(fallbackText), {
      headers: { ...streamHeaders, "X-Provider": "Grounded-Local-Copilot" },
    });
  } catch (error) {
    console.error("Assistant API error:", error);
    return NextResponse.json({ error: "Failed to generate answer" }, { status: 500 });
  }
}
