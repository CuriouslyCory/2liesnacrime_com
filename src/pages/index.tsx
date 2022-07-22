import type { NextPage } from "next";
import Head from "next/head";
import logo from "../../public/full-logo.svg";
import { EpisodeCard } from "../components/episode-card";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const {data: episodes, error, status} = trpc.useQuery(["episode.all"]);

  return (
    <>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />,
        <meta property="og:title" content="Two Lies in a Crime Podcast" />,
        <meta property="og:description" content="True crime with a twist, some of the story isn't true." />,
        <meta property="og:url" content="https://www.2liesinacrime.com/" />,
        <meta property="og:image" content={logo} />,
        <meta name="twitter:title" content="Two Lies in a Crime Podcast" />,
        <meta name="twitter:description" content="True crime with a twist, some of the story isn't true." />,
        <meta name="twitter:image" content={logo} />,
        <meta name="twitter:card" content="summary_large_image" />,
      </Head>
      <div className="bg-amber-300 w-full flex justify-center">
        {episodes && episodes.map((episode) => <EpisodeCard key={`episode-card-${episode.id}`} episode={episode} />)}
      </div>
    </>
  );
};

export default Home;
