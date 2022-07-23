import Image from "next/image";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { InferQueryOutput } from "../utils/trpc";
import logo from "../../public/full-logo.svg";

export type EpisodeListItemProps = {
  episode: InferQueryOutput<"episode.byId">;
};

export const EpisodeListItem = ({
  episode,
}: EpisodeListItemProps): JSX.Element => {
  return (
    <div className="hero flex flex-col sm:flex-col md:flex-row gap-y-5 w-full mt-20 max-w-6xl mb-10 bg-amber-200 p-10 rounded-lg gap-x-5 mx-5 justify-start">
      <div className="bg-gray-50 p-10 rounded-lg">
        <Image
          src={logo}
          height={125}
          width={125}
          objectFit="contain"
          alt="Illistration of two cats sitting on a crecent moon, holding wine glasses with their tails, with text 2 lies in a crime."
        />
      </div>
      <div id="left-section" className="flex flex-col h-full">
        <h1 className="title-font font-serif text-3xl pb-5">{episode.title}</h1>
        <p className="pb-3">{episode.description}</p>

        <div className="block">
          <Link href={episode.spotifyUrl}>
            <button className="block rounded-full p-2 bg-slate-50 flex items-center gap-x-2">
              <FaSpotify className="text-[#1db954]" />
              Listen now on Spotify
            </button>
          </Link>
        </div>

        <span className="justify-self-end mt-auto underline">
          <Link href={`/transcripts/${episode.slug}`}>Episode Transcript</Link>
        </span>
      </div>
    </div>
  );
};

export default EpisodeListItem;
