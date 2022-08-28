import { Episode } from "@prisma/client";
import { BuzzsproutEpisode } from "../server/router/buzzsprout";

export const buzzsproutToEpisode = (
  episode: BuzzsproutEpisode,
): Partial<Episode> => {
  return {
    slug: urlCode(episode.audio_url),
    seasonNumber: episode.season_number,
    episodeNumber: episode.episode_number,
    title: episode.title,
    description: episode.description,
    audioUrl: episode.audio_url,
    artworkUrl: episode.artwork_url,
    duration: episode.duration,
    buzzsproutId: episode.id,
    buzzsproutGuid: episode.guid,
    createdAt: episode.published_at,
    updatedAt: episode.published_at,
  };
};

export const urlCode = (audioUrl: string): string => {
  const urlPart = audioUrl.split("/");
  const lastElement = urlPart.pop();
  const slug = lastElement?.slice(0, -4);
  return slug || "";
};
