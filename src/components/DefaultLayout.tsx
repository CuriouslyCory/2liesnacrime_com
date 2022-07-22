import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo-circle.svg";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {

  return (
    <>
      <Head>
        <title>2 Lies in a Crime Podcast</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <meta name="description" content="2 Lies n a Crime Podcast. Episodes, transcripts, and other information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="w-full bg-amber-300 py-5">
        <div className="flex px-2 max-w-4xl mx-auto">
          <Image src={logo} height={125} width={125} alt="Illistration of two cats sitting on a crecent moon, holding wine glasses with their tails, with text 2 lies in a crime." />
          <ul className="flex gap-x-5 items-center justify-center ml-auto">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/episodes">Episodes</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>
      <main className="flex flex-col items-center h-screen bg-teal-50 w-full">
        {children}
      </main>

      
    </>
  );
};
