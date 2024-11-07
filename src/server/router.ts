import { z } from "zod";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  createUser: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.user.create({ data: input });
    }),
});

export type AppRouter = typeof appRouter;
