import { Raleway, Fraunces } from "next/font/google";
import { type Metadata } from "next";
import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const title = "Two Lies in a Crime Podcast";
const description = "True crime with a twist, some of the story isn't true.";
const url = "https://2liesinacrime.com/";
const primaryImageUri = "https://www.2liesnacrime.com/teaser-logo.jpg";

export const metadata: Metadata = {
  title: "Create T3 App",
  description:
    "2 Lies in a Crime Podcast. Episodes, transcripts, and other information.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    locale: "en_US",
    type: "website",
    title,
    description,
    url,
    images: [{ url: primaryImageUri }],
  },
  twitter: {
    title,
    description,
    images: [{ url: primaryImageUri }],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${raleway.variable} ${fraunces.variable}`}>
      <body>
        <div className="flex h-screen flex-col justify-between">
          <header
            className="w-full bg-cyan-300 bg-right bg-no-repeat py-5"
            style={{ backgroundImage: "url('/images/blue-corks.webp')" }}
          >
            <div className="mx-auto flex max-w-6xl px-2">
              <Link href="/">
                <div className="cursor-pointer">
                  <Image
                    src="/logo-circle.svg"
                    height={125}
                    width={125}
                    alt="Illistration of two cats sitting on a crecent moon, holding wine glasses with their tails, with text 2 lies in a crime."
                  />
                </div>
              </Link>
              <ul className="ml-auto flex items-center justify-center gap-x-2 text-white sm:gap-x-2 md:gap-x-5">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/episodes">Episodes</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </header>
          <main className="min-h flex w-full flex-grow flex-col bg-teal-50">
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </main>

          <footer className="mt-8 flex bg-slate-800 px-5 py-6">
            <span className="text-white">Copyright 2 Lies in a Crime 2022</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
