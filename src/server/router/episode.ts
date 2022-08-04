import { createRouter } from "./context";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const defaultEpisodeSelect = Prisma.validator<Prisma.EpisodeSelect>()({
  id: true,
  slug: true,
  title: true,
  seasonNumber: true,
  episodeNumber: true,
  description: true,
  spotifyUrl: true,
  audioUrl: true,
  artworkUrl: true,
  buzzsproutId: true,
  buzzsproutGuid: true,
  tags: true,
  comments: false,
  createdAt: true,
  updatedAt: true,
});

export const episodeRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      return ctx.prisma.episode.findMany({
        select: defaultEpisodeSelect,
        orderBy: {
          createdAt: "desc",
        },
      });
    },
  })
  .query("byId", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { id } = input;
      const episode = await ctx.prisma.episode.findUnique({
        where: { id },
        select: defaultEpisodeSelect,
      });
      if (!episode) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No episode with id '${id}'`,
        });
      }
      return episode;
    },
  })
  .query("bySlug", {
    input: z.object({
      slug: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { slug } = input;
      const episode = await ctx.prisma.episode.findUnique({
        where: { slug },
        select: defaultEpisodeSelect,
      });
      if (!episode) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No episode with id '${slug}'`,
        });
      }
      return episode;
    },
  })
  .mutation("update", {
    input: z.object({
      id: z.string().uuid().optional(),
      slug: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { id, ...data } = input;
      const episode = await ctx.prisma.episode.update({
        where: {
          id,
        },
        data,
        select: defaultEpisodeSelect,
      });
    },
  });
