import { prisma } from "./prisma";

/**
 * Creates context for an incoming request
 * @see https://trpc.io/docs/v11/context
 */
export async function createContext(opts: { req: Request }) {
  return {
    req: opts.req,
    prisma,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
