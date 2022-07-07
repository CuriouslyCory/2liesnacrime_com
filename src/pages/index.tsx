import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/teaser-logo.jpg";
//import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  //const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>2 Lies n a Crime Podcast</title>
        <meta name="description" content="2 Lies n a Crime Podcast. Episodes, transcripts, and other information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen min-h-screen flex flex-col justify-center items-center p-4 overflow-y-scroll">
        <Image src={logo} height={400} width={400} alt="Illistration of two cats sitting on a crecent moon, holding wine glasses with their tails, with text 2 lies in a crime." />
        <p>Coming soon...</p>
      </div>
    </>
  );
};

export default Home;
