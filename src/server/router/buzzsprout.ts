import { createRouter } from "./context";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import axios from "axios";
import { buzzsproutToEpisode } from "../../utils/buzzsprout-to-episode";

export type BuzzsproutEpisode = {
  id: number;
  title: string;
  audio_url: string;
  artwork_url: string;
  description: string;
  summary: string;
  artist: string;
  tags: string;
  published_at: Date;
  duration: number;
  hq: boolean;
  magic_mastering: boolean;
  guid: string;
  inactive_at?: string;
  custom_url?: string;
  episode_number: number;
  season_number: number;
  explicit: boolean;
  private: boolean;
  total_plays: number;
};

export const buzzsproutRouter = createRouter().query("all", {
  async resolve({ ctx }) {
    const result = await axios.get<BuzzsproutEpisode[]>(
      "https://www.buzzsprout.com/api/2020224/episodes.json",
      {
        headers: {
          Authorization: "Token token=" + process.env.BUZZSPROUT_API_KEY,
        },
      },
    );
    if (result.status !== 200) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Error fetching episodes",
      });
    }
    return result.data.map((episode) => buzzsproutToEpisode(episode));
  },
});
