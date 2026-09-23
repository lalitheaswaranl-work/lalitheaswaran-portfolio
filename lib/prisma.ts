import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function buildDatasourceUrl(): string | undefined {
  const base = process.env.DATABASE_URL;
  if (!base) return undefined;

  const url = new URL(base);
  if (!url.searchParams.has("connection_limit")) {
    url.searchParams.set("connection_limit", "4");
  }
  if (!url.searchParams.has("pool_timeout")) {
    url.searchParams.set("pool_timeout", "30");
  }
  if (!url.searchParams.has("connect_timeout")) {
    url.searchParams.set("connect_timeout", "15");
  }
  const sslMode = url.searchParams.get("sslmode");
  if (!sslMode || ["prefer", "require", "verify-ca"].includes(sslMode)) {
    url.searchParams.set("sslmode", "verify-full");
  }
  return url.toString();
}

function createPrismaClient(): PrismaClient {
  const datasourceUrl = buildDatasourceUrl();
  if (!datasourceUrl) {
    // Pure static architecture: return a safe mock client with zero DB connections
    return new Proxy({} as PrismaClient, {
      get(_target, prop) {
        if (prop === "$queryRaw" || prop === "$executeRaw") {
          return () => Promise.resolve([]);
        }
        return new Proxy({}, {
          get() {
            return () => Promise.resolve(null);
          }
        });
      }
    });
  }

  const adapter = new PrismaPg(datasourceUrl);
  return new PrismaClient({
    log: ["warn"],
    adapter,
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
