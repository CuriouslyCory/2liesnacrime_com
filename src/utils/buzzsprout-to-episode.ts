import { type Episode } from "@prisma/client";

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
  return slug ?? "";
};
