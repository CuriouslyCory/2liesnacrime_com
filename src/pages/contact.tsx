import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../public/full-logo.svg";
import EpisodeListItem from "../components/episode-list-item";
import { trpc } from "../utils/trpc";

const Contact: NextPage = () => {
  const { data: episodes, error, status } = trpc.useQuery(["episode.all"]);

  return (
    <>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />,
        <meta
          property="og:title"
          content="Contact Two Lies in a Crime Podcast"
        />
        ,
        <meta
          property="og:description"
          content="Get in touch with the Two Lies in a Crime Podcast"
        />
        ,
        <meta
          property="og:url"
          content="https://www.2liesinacrime.com/episodes"
        />
        ,
        <meta
          property="og:image"
          content="https://www.2liesnacrime.com/teaser-logo.jpg"
        />
        ,
        <meta
          name="twitter:title"
          content="Contact Two Lies in a Crime Podcast"
        />
        ,
        <meta
          name="twitter:description"
          content="Get in touch with the Two Lies in a Crime Podcast"
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
        <div className="flex w-full justify-start max-w-6xl py-10 px-5 md:px-0">
          <h1 className="text-4xl font-serif text-white">Contact</h1>
        </div>
      </div>
      <div className="bg-amber-300 w-full flex justify-center">
        <div className="hero flex flex-col gap-y-5 w-full mt-20 max-w-6xl mb-10 bg-amber-200 p-10 rounded-lg gap-x-5 mx-5 justify-around">
          <span className="font-sans text-xl">Follow us on</span>
          <Link href="https://www.facebook.com/2-Lies-in-a-Crime-106656542129241">
            <div className="flex flex-row gap-x-3 items-center cursor-pointer">
              <FaInstagram /> Instagram
            </div>
          </Link>
          <Link href="https://www.facebook.com/2-Lies-in-a-Crime-106656542129241">
            <div className="flex flex-row gap-x-3 items-center cursor-pointer">
              <FaFacebook /> Facebook
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
