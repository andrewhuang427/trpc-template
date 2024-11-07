import { z } from "zod";
import { prisma } from "./prisma";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getUsers: publicProcedure.query(async () => {
    return prisma.user.findMany();
  }),
  createUser: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      return prisma.user.create({ data: input });
    }),
});

export type AppRouter = typeof appRouter;
