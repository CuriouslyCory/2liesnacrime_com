import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/full-logo.svg";
//import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  //const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <div className="bg-amber-300 w-full flex justify-center">
        <div className="hero flex flex-row w-full mt-20 max-w-4xl mb-10 bg-amber-200 p-10 rounded-lg">
          <div id="left-section" className="flex flex-col">
            <span className="font-bold pb-5">Featured episode</span>
            <h1 className="title-font font-serif text-4xl pb-5">Ep.1: Sarah Ann Walker</h1>
            <p className= "pb-3" >Let me tell you about Sarah Ann Walker. And tell me where the lies are @ <a href="mailto:2liesinacrime@gmail.com">2liesinacrime@gmail.com</a></p>
            <Link href="https://open.spotify.com/episode/4ETUUsgQVePYrrsNO3I1MZ?si=f9125570ca224b6b">
              <span className="underline">Listen now on Spotify</span>
            </Link>
          </div>
          <div className="bg-gray-50 p-10 rounded-lg">
            <Image  
              src={logo} 
              height={250}
              width={250}
              objectFit="contain" 
              alt="Illistration of two cats sitting on a crecent moon, holding wine glasses with their tails, with text 2 lies in a crime." 
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
