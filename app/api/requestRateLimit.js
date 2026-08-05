import { createHash } from "node:crypto";

const attempts = globalThis.__arkPublicRequestLimits || new Map();
globalThis.__arkPublicRequestLimits = attempts;

function requesterKey(request) {
  const forwarded = String(request.headers.get("x-forwarded-for") || "").split(",")[0].trim();
  const address = forwarded || String(request.headers.get("x-real-ip") || "unknown").trim();
  return createHash("sha256").update(address).digest("hex").slice(0, 32);
}

export function checkRateLimit(request, { limit = 5, windowMs = 10 * 60 * 1000 } = {}) {
  const now = Date.now();
  const key = requesterKey(request);
  const recent = (attempts.get(key) || []).filter((timestamp) => now - timestamp < windowMs);
  if (recent.length >= limit) {
    const retryAfterSeconds = Math.max(1, Math.ceil((windowMs - (now - recent[0])) / 1000));
    attempts.set(key, recent);
    return { allowed: false, retryAfterSeconds };
  }
  recent.push(now);
  attempts.set(key, recent);
  return { allowed: true, retryAfterSeconds: 0 };
}
