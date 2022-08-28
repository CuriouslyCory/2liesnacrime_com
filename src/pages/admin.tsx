import { Episode } from "@prisma/client";
import clsx from "clsx";
import type { NextPage } from "next";
import { useState } from "react";
import { AdminEpisodeListItem } from "../components/admin-episode-list-item";
import { trpc } from "../utils/trpc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { signIn, signOut, useSession } from "next-auth/react";

const Episodes: NextPage = () => {
  const utils = trpc.useContext();
  const {
    data: beEpisodes,
    error: beError,
    status: beStatus,
  } = trpc.useQuery(["episode.all"]);
  const {
    data: bsEpisodes,
    error: bsError,
    status: bsStatus,
  } = trpc.useQuery(["buzzsprout.all"]);

  const createEpisodeMutation = trpc.useMutation(["episode.create"], {
    onSuccess(input) {
      utils.invalidateQueries(["episode.all"]);
      utils.invalidateQueries(["episode.byId"]);
      utils.invalidateQueries(["episode.bySlug"]);
    },
  });

  const [expandNewEps, setExpandNewEps] = useState(false);

  const addEpisode = (episode: Partial<Episode>) => {
    console.log(episode);
    const createEpisode = {
      slug: episode.slug ?? "",
      seasonNumber: episode.seasonNumber ?? 1,
      episodeNumber: episode.episodeNumber ?? 1,
      title: episode.title ?? "",
      description: episode.description ?? "",
      audioUrl: episode.audioUrl ?? "",
      artworkUrl: episode.artworkUrl ?? "",
      duration: episode.duration ?? 0,
      buzzsproutId: episode.buzzsproutId ?? 0,
      buzzsproutGuid: episode.buzzsproutGuid ?? "",
    };
    createEpisodeMutation.mutate(createEpisode);
  };

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <>
      <div className="flex items-center">
        {!session && <button onClick={() => signIn("google")}>Login</button>}
        {session && <span>Welcome {session.user?.name}</span>}
        {session && (
          <button className="p-1" onClick={() => signOut()}>
            Logout
          </button>
        )}
      </div>
      {session && (
        <>
          <div className="bg-slate-800 w-full flex flex-row justify-center">
            <div className="flex w-full justify-start max-w-6xl py-10">
              <h1 className="text-4xl font-serif text-white">Admin Console</h1>
            </div>
          </div>
          <div className="p-3">
            <button
              className="p-2 bg-slate-200"
              onClick={() => setExpandNewEps(!expandNewEps)}
            >
              Publish new episode
            </button>
            <div
              className={clsx("p-3 flex-col", {
                hidden: !expandNewEps,
                flex: expandNewEps,
              })}
            >
              {bsEpisodes
                ?.filter(
                  (episode) =>
                    !beEpisodes?.find(
                      (beEp) => episode.buzzsproutGuid === beEp.buzzsproutGuid,
                    ),
                )
                .map((episode) => (
                  <div key={`newep-${episode.buzzsproutGuid}`} className="my-2">
                    <button
                      className="mr-2 p-2 bg-slate-200"
                      onClick={() => addEpisode(episode)}
                    >
                      <IoIosAddCircleOutline />
                    </button>
                    <span>{episode.title}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full flex flex-col">
            {beEpisodes &&
              beEpisodes.map((episode) => (
                <AdminEpisodeListItem
                  key={`episode-card-${episode.id}`}
                  episode={episode}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Episodes;
