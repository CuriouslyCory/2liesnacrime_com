import { TRPCError } from "@trpc/server";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  type BuzzsproutEpisode,
  buzzsproutToEpisode,
} from "~/utils/buzzsprout-to-episode";

export const buzzsproutRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    const response = await fetch(
      "https://www.buzzsprout.com/api/2020224/episodes.json",
      {
        headers: {
          Authorization: "Token token=" + process.env.BUZZSPROUT_API_KEY,
        },
      },
    );

    const result = {
      status: response.status,
      data: (await response.json()) as BuzzsproutEpisode[],
    };

    if (result.status !== 200) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Error fetching episodes",
      });
    }
    return result.data.map((episode) => buzzsproutToEpisode(episode));
  }),
});
