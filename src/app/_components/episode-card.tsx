import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { type Episode } from "@prisma/client";
import { urlCode } from "~/utils/buzzsprout-to-episode";

export type EpisodeCardProps = {
  episode: Episode;
};

export const EpisodeCard = ({ episode }: EpisodeCardProps): JSX.Element => {
  return (
    <div className="hero grid-span-2 mx-auto my-10 grid max-w-6xl grid-cols-3 gap-5">
      <div id="left-section" className="col-span-2 flex h-full flex-col">
        <span className="pb-5 font-bold">Featured episode</span>
        <h1 className="title-font pb-5 font-serif text-4xl">{episode.title}</h1>
        <p className="pb-3">{episode.description}</p>
        <p>
          Think you caught our lie? Mail us at&nbsp;
          <span className="underline">
            <a href="mailto:2liesinacrime@gmail.com">2liesinacrime@gmail.com</a>
          </span>
        </p>

        <div className="mt-5 block">
          <div id={`buzzsprout-player-${episode.buzzsproutId}`}></div>
          <Script
            src={`https://www.buzzsprout.com/2020224/${urlCode(
              episode.audioUrl,
            )}.js?container_id=buzzsprout-player-${
              episode.buzzsproutId
            }&player=small`}
            type="text/javascript"
          />
        </div>
        <span className="mt-auto justify-self-end underline">
          <Link href={`/transcripts/${episode.slug}`}>Episode Transcript</Link>
        </span>
      </div>
      <div
        id="right-section"
        className="flex grow justify-center rounded-lg p-10"
      >
        <Image
          src={episode.artworkUrl}
          height={250}
          width={250}
          objectFit="contain"
          alt="Illistration of two cats sitting on a crecent moon, holding wine glasses with their tails, with text 2 lies in a crime."
        />
      </div>
    </div>
  );
};
