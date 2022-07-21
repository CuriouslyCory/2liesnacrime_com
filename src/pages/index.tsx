import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/full-logo.svg";
//import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  //const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <div className="bg-[#EFC210]">
        <div className="hero flex flex-row w-full mt-10">
          <span>Lorem ipsum delorot</span>
          <Image  
            src={logo} 
            height={250}
            width={250}
            objectFit="contain" 
            alt="Illistration of two cats sitting on a crecent moon, holding wine glasses with their tails, with text 2 lies in a crime." 
          />
        </div>
      </div>
      
    </>
  );
};

export default Home;
