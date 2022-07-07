import type { NextPage } from "next";
import Head from "next/head";
//import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  //const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>2 Lies n a Crime Podcast</title>
        <meta name="description" content="2 Lies n a Crime Podcast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen min-h-screen flex flex-col justify-center items-center p-4 overflow-y-scroll">
        <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
          2 Lies n a Crime Podcast
        </h2>
        <p>Coming soon...</p>
      </div>
    </>
  );
};

export default Home;
