import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const episodeRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const episodes = await ctx.db.episode.findMany();
    return episodes ?? null;
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const episode = await ctx.db.episode.findFirst({
        where: { id: input.id },
      });
      if (!episode) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No episode with id '${input.id}'`,
        });
      }
      return episode ?? null;
    }),
  bySlug: publicProcedure
    .input(z.object({ slug: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const episode = await ctx.db.episode.findFirst({
        where: { slug: input.slug },
      });
      if (!episode) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No episode with slug '${input.slug}'`,
        });
      }
      return episode ?? null;
    }),
  create: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
        seasonNumber: z.number(),
        episodeNumber: z.number(),
        title: z.string(),
        description: z.string(),
        audioUrl: z.string(),
        artworkUrl: z.string(),
        duration: z.number(),
        buzzsproutId: z.number(),
        buzzsproutGuid: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.episode.create({
        data: {
          slug: input.slug,
          seasonNumber: input.seasonNumber,
          episodeNumber: input.episodeNumber,
          title: input.title,
          description: input.description,
          audioUrl: input.audioUrl,
          artworkUrl: input.artworkUrl,
          duration: input.duration,
          buzzsproutId: input.buzzsproutId,
          buzzsproutGuid: input.buzzsproutGuid,
        },
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        slug: z.string(),
        seasonNumber: z.number(),
        episodeNumber: z.number(),
        title: z.string(),
        description: z.string(),
        audioUrl: z.string(),
        artworkUrl: z.string(),
        duration: z.number(),
        buzzsproutId: z.number(),
        buzzsproutGuid: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.episode.update({
        where: { id: input.id },
        data: {
          slug: input.slug,
          seasonNumber: input.seasonNumber,
          episodeNumber: input.episodeNumber,
          title: input.title,
          description: input.description,
          audioUrl: input.audioUrl,
          artworkUrl: input.artworkUrl,
          duration: input.duration,
          buzzsproutId: input.buzzsproutId,
          buzzsproutGuid: input.buzzsproutGuid,
        },
      });
    }),
});
