import { createRouter } from "./context";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const defaultEpisodeSelect = Prisma.validator<Prisma.EpisodeSelect>()({
  id: true,
  slug: true,
  title: true,
  description: true,
  spotifyUrl: true,
  tags: true,
  comments: false,
  createdAt: true,
  updatedAt: true,
});

export const episodeRouter = createRouter()
  .query("all", {
    async resolve({ctx}) {
      return ctx.prisma.episode.findMany({
        select: defaultEpisodeSelect,
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
    async resolve({ctx, input}) {
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
    }
  });


export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
