import { createRouter } from "./context";
import { Episode, Prisma, User } from "@prisma/client";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const defaultEpisodeSelect = Prisma.validator<Prisma.EpisodeSelect>()({
  id: true,
  slug: true,
  title: true,
  seasonNumber: true,
  episodeNumber: true,
  description: true,
  audioUrl: true,
  artworkUrl: true,
  buzzsproutId: true,
  buzzsproutGuid: true,
  tags: true,
  duration: true,
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
    async resolve({ ctx, input }): Promise<Episode> {
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
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session || !ctx.user?.isAdmin) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next();
  })
  .mutation("create", {
    input: z.object({
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
    async resolve({ ctx, input }) {
      const {
        slug,
        seasonNumber,
        episodeNumber,
        title,
        description,
        audioUrl,
        artworkUrl,
        duration,
        buzzsproutId,
        buzzsproutGuid,
      } = input;

      const episode = await ctx.prisma.episode.create({
        data: {
          slug,
          seasonNumber,
          episodeNumber,
          title,
          description,
          audioUrl,
          artworkUrl,
          duration,
          buzzsproutId,
          buzzsproutGuid,
        },
      });
      return episode;
    },
  })
  .mutation("update", {
    input: z.object({
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
