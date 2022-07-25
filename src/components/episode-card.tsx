import Image from "next/image";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { InferQueryOutput } from "../utils/trpc";
import logo from "../../public/full-logo.svg";

export type EpisodeCardProps = {
  episode: InferQueryOutput<"episode.byId">;
};

export const EpisodeCard = ({ episode }: EpisodeCardProps): JSX.Element => {
  return (
    <div className="hero flex flex-col sm:flex-col md:flex-row gap-y-5 w-full max-w-6xl mt-20 mb-10 gap-x-5 justify-start">
      <div id="left-section" className="flex flex-col h-full grow">
        <span className="font-bold pb-5">Featured episode</span>
        <h1 className="title-font font-serif text-4xl pb-5">{episode.title}</h1>
        <p className="pb-3">{episode.description}</p>
        <p>
          Think you caught our lie? Mail us at&nbsp;
          <span className="underline">
            <a href="mailto:2liesinacrime@gmail.com">2liesinacrime@gmail.com</a>
          </span>
        </p>

        <div className="block mt-5">
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
      <div className="bg-gray-50 p-10 rounded-lg grow justify-center flex">
        <Image
          src={logo}
          height={250}
          width={250}
          objectFit="contain"
          alt="Illistration of two cats sitting on a crecent moon, holding wine glasses with their tails, with text 2 lies in a crime."
        />
      </div>
    </div>
  );
};
