import type { NextPage } from "next";
import Head from "next/head";
import logo from "../../public/full-logo.svg";
import EpisodeListItem from "../components/episode-list-item";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const {data: episodes, error, status} = trpc.useQuery(["episode.all"]);

  return (
    <>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />,
        <meta property="og:title" content="Two Lies in a Crime Podcast Episode List" />,
        <meta property="og:description" content="Episode list for Two Lies in a Crime Podcast" />,
        <meta property="og:url" content="https://www.2liesinacrime.com/episodes" />,
        <meta property="og:image" content="https://www.2liesnacrime.com/teaser-logo.jpg" />,
        <meta name="twitter:title" content="Two Lies in a Crime Podcast" />,
        <meta name="twitter:description" content="Episode list for Two Lies in a Crime Podcast" />,
        <meta name="twitter:image" content="https://www.2liesnacrime.com/teaser-logo.jpg" />,
        <meta name="twitter:card" content="summary_large_image" />,
      </Head>
      <div className="w-full flex justify-center">
        {episodes && episodes.map((episode) => <EpisodeListItem key={`episode-card-${episode.id}`} episode={episode} />)}
      </div>
    </>
  );
};

export default Home;
