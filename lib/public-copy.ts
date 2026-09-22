export const publicProfileSummary =
  "Senior Frontend Developer with 3+ years of experience designing and developing scalable web applications, secure Web SDKs, and FinTech architectures using React.js, Next.js, TypeScript, and WebAuthn.";

const ownerOnlyLanguage = /\b(admin|cms|editable|edit mode)\b/i;

export function publicProfileCopy(value: string, fallback: string) {
  return ownerOnlyLanguage.test(value) ? fallback : value;
}
