import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { EpisodeCard } from "../components/episode-card";
import MainHero from "../components/main-hero";
import { trpc } from "../utils/trpc";
import greta from "../../public/images/gretta.webp";
import raynee from "../../public/images/raynee.webp";
import catLies from "../../public/images/i-smell-lies.webp";
import Image from "next/image";

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
          <div className="relative h-64 w-64">
            <Image
              src={catLies}
              layout="fill"
              objectFit="contain"
              alt="illustration of a cat ready to pounce with text saying I smell lies"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-800 w-full flex justify-center">
        <div className="flex w-full justify-start max-w-6xl py-10 px-5 md:px-0">
          <h1 className="text-4xl font-serif text-white">Hosts</h1>
        </div>
      </div>
      <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-5 p-10">
        <div className="p-10 bg-cyan-300 rounded-lg flex flex-col items-center">
          <Image
            src={greta}
            height="200"
            width="200"
            alt="caracature of a woman with shoulder length blond hair, wearing a blue shirt, and glasses"
          />
          <span className="font-bold text-white text-2xl bg-cyan-600 py-3 px-5 mt-3">
            Greta Jane
          </span>
          <span className="mt-5">
            &quot;Be a good person or I&apos;ll throat punch you.&quot;
          </span>
        </div>
        <div className="p-10 bg-cyan-300 rounded-lg flex flex-col items-center">
          <Image
            src={raynee}
            height="200"
            width="200"
            alt="caracature of a woman with shoulder length blond hair, wearing a blue shirt, and glasses"
          />
          <span className="font-bold text-white text-2xl bg-cyan-600 py-3 px-5 mt-3">
            Raynee King
          </span>
          <span className="mt-5">
            &quot;Kindness is like confetti; throw that S#%t EVERYWHERE!.&quot;
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
