import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { EpisodeCard } from "../components/episode-card";
import MainHero from "../components/main-hero";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: episodes, error, status } = trpc.useQuery(["episode.all"]);

  return (
    <>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />,
        <meta property="og:title" content="Two Lies in a Crime Podcast" />,
        <meta
          property="og:description"
          content="True crime with a twist, some of the story isn't true."
        />
        ,
        <meta property="og:url" content="https://www.2liesinacrime.com/" />,
        <meta
          property="og:image"
          content="https://www.2liesnacrime.com/teaser-logo.jpg"
        />
        ,
        <meta name="twitter:title" content="Two Lies in a Crime Podcast" />,
        <meta
          name="twitter:description"
          content="True crime with a twist, some of the story isn't true."
        />
        ,
        <meta
          name="twitter:image"
          content="https://www.2liesnacrime.com/teaser-logo.jpg"
        />
        ,
        <meta name="twitter:card" content="summary_large_image" />,
      </Head>
      <div className="bg-slate-800 w-full flex justify-center">
        <div className="flex flex-col text-white w-full justify-start max-w-6xl py-5 px-5 md:px-0">
          <h1 className="text-2xl font-serif text-white">
            True Crime with a Twist
          </h1>
          <span>New episodes every Wednesday</span>
        </div>
      </div>
      <MainHero />
      <div
        className="bg-amber-200 w-full flex flex-col items-center justify-center gap-y-3 pb-10 px-5 md:px-0 bg-right bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/yellow-corks.webp')" }}
      >
        {episodes &&
          episodes.map((episode) => (
            <EpisodeCard key={`episode-card-${episode.id}`} episode={episode} />
          ))}
      </div>
      <div className="flex w-full justify-center p-10">
        <div className="block mt-5">
          <Link href="/episodes">
            <button className="block rounded-full text-2xl py-4 px-10 font-bold bg-amber-300">
              More Episodes
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-slate-800 w-full flex justify-center">
        <div className="flex w-full justify-start max-w-6xl py-10 px-5 md:px-0">
          <h1 className="text-4xl font-serif text-white">Hosts</h1>
        </div>
      </div>
      <div className="w-full flex justify-center gap-x-10 mt-10">
        <div className="p-10 bg-teal-700 rounded-lg">
          <span className="font-bold text-white text-2xl">Gretta Jane</span>
        </div>
        <div className="p-10 bg-teal-700 rounded-lg">
          <span className="font-bold text-white text-2xl">Raynee King</span>
        </div>
      </div>
    </>
  );
};

export default Home;
