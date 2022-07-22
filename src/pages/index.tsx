import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/full-logo.svg";
import { EpisodeCard } from "../components/episode-card";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const {data: episodes, error, status} = trpc.useQuery(["episode.all"]);

  return (
    <>
      <div className="bg-amber-300 w-full flex justify-center">
        {episodes && episodes.map((episode) => <EpisodeCard key={`episode-card-${episode.id}`} episode={episode} />)}
      </div>
      
    </>
  );
};

export default Home;
