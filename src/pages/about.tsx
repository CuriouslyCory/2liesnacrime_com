import type { NextPage } from "next";
import Head from "next/head";
import logo from "../../public/full-logo.svg";
import EpisodeListItem from "../components/episode-list-item";
import { trpc } from "../utils/trpc";

const About: NextPage = () => {
  const {data: episodes, error, status} = trpc.useQuery(["episode.all"]);

  return (
    <>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />,
        <meta property="og:title" content="About Two Lies in a Crime Podcast" />,
        <meta property="og:description" content="Learn more about the for Two Lies in a Crime Podcast" />,
        <meta property="og:url" content="https://www.2liesinacrime.com/episodes" />,
        <meta property="og:image" content="https://www.2liesnacrime.com/teaser-logo.jpg" />,
        <meta name="twitter:title" content="About Two Lies in a Crime Podcast" />,
        <meta name="twitter:description" content="Learn more about the for Two Lies in a Crime Podcast" />,
        <meta name="twitter:image" content="https://www.2liesnacrime.com/teaser-logo.jpg" />,
        <meta name="twitter:card" content="summary_large_image" />,
      </Head>
      <div className="bg-slate-800 w-full flex justify-center">
        <div className="flex w-full justify-start max-w-6xl py-10">
            <h1 className="text-4xl font-serif text-white">About</h1>
        </div>
      </div>
      <div className="bg-amber-300 w-full flex justify-center">
        <div className="hero flex flex-col sm:flex-col md:flex-row gap-y-5 w-full mt-20 max-w-6xl mb-10 bg-amber-200 p-10 rounded-lg gap-x-5 mx-5 justify-around">
            <span className="font-sans text-xl">
                Do you know your true crime? Can you call us out on our lies? Our podcast is true crime with a twist. Sometimes it's not true. So grab your wine and call us out on 2 Lies in a Crime.
            </span>
        </div>
      </div>
    </>
  );
};

export default About;
