import { api, HydrateClient } from "~/trpc/server";
import MainHero from "./_components/main-hero";
import { EpisodeCard } from "./_components/episode-card";
import Image from "next/image";

export default async function Home() {
  const episodes = await api.episode.all();

  void api.episode.all.prefetch();

  return (
    <HydrateClient>
      <main className="">
        <div className="flex w-full justify-center bg-slate-800">
          <div className="flex w-full max-w-6xl flex-col justify-start px-5 py-5 text-white md:px-0">
            <h1 className="font-serif text-2xl text-white">
              True Crime with a Twist
            </h1>
          </div>
        </div>
        <MainHero />
        <div
          className="flex w-full flex-col items-center justify-center gap-y-3 bg-amber-200 bg-cover bg-right bg-no-repeat px-5 pb-10 md:px-0"
          style={{ backgroundImage: "url('/images/yellow-corks.webp')" }}
        >
          {episodes?.map((episode) => (
            <EpisodeCard key={`episode-card-${episode.id}`} episode={episode} />
          ))}

          <p>
            The future of 2 Lies in a Crime is unclear, but for now we&quot;re
            enjoying a hiatus. Please check out our social media for updates.
          </p>
        </div>
        <div className="flex w-full justify-center p-10">
          <div className="mt-5 block">
            <div className="relative h-64 w-64">
              <Image
                src="/images/i-smell-lies.webp"
                layout="fill"
                objectFit="contain"
                alt="illustration of a cat ready to pounce with text saying I smell lies"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center bg-slate-800">
          <div className="flex w-full max-w-6xl justify-start px-5 py-10 md:px-0">
            <h1 className="font-serif text-4xl text-white">Hosts</h1>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-5 p-10 md:grid-cols-2 md:grid-rows-none">
          <div className="flex flex-col items-center rounded-lg bg-cyan-300 p-10">
            <Image
              src="/images/gretta.webp"
              height="200"
              width="200"
              alt="caracature of a woman with shoulder length blond hair, wearing a blue shirt, and glasses"
            />
            <span className="mt-3 bg-cyan-600 px-5 py-3 text-2xl font-bold text-white">
              Greta Jane
            </span>
            <span className="mt-5">
              &quot;Be a good person or I&apos;ll throat punch you.&quot;
            </span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-cyan-300 p-10">
            <Image
              src="/images/raynee.webp"
              height="200"
              width="200"
              alt="caracature of a woman with shoulder length blond hair, wearing a blue shirt, and glasses"
            />
            <span className="mt-3 bg-cyan-600 px-5 py-3 text-2xl font-bold text-white">
              Raynee King
            </span>
            <span className="mt-5">
              &quot;Kindness is like confetti; throw that S#%t
              EVERYWHERE!.&quot;
            </span>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
