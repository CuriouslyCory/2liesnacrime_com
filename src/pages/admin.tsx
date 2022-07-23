import type { NextPage } from "next";
import AdminEpisodeListItem from "../components/admin-episode-list-item";
import { trpc } from "../utils/trpc";

const Episodes: NextPage = () => {
  const {data: episodes, error, status} = trpc.useQuery(["episode.all"]);

  return (
    <>
      <div className="bg-slate-800 w-full flex flex-row justify-center">
        <div className="flex w-full justify-start max-w-6xl py-10">
            <h1 className="text-4xl font-serif text-white">Admin Console</h1>
        </div>
      </div>
      <div className="w-full flex flex-col">
        {episodes && episodes.map((episode) => <AdminEpisodeListItem key={`episode-card-${episode.id}`} episode={episode} />)}
      </div>
    </>
  );
};

export default Episodes;
