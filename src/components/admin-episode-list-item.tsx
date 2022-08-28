import { Episode } from "@prisma/client";
import clsx from "clsx";
import { ChangeEventHandler, Ref, useEffect, useRef, useState } from "react";
import { trpc } from "../utils/trpc";

export type AdminEpisodeListItemProps = {
  episode: Episode;
};

export const AdminEpisodeListItem = ({
  episode,
}: AdminEpisodeListItemProps): JSX.Element => {
  const utils = trpc.useContext();
  const [localEpisode, setLocalEpisode] = useState<Episode>({
    ...episode,
  });

  const updateEpisodeMutation = trpc.useMutation(["episode.update"], {
    onSuccess(input) {
      utils.invalidateQueries(["episode.all"]);
      utils.invalidateQueries(["episode.byId"]);
      utils.invalidateQueries(["episode.bySlug"]);
    },
  });

  const updateEpisode = () => {
    updateEpisodeMutation.mutate(localEpisode);
  };

  useEffect(() => {
    console.log(localEpisode);
  }, [localEpisode]);

  return (
    <div className="flex flex-col gap-y-2 p-2 m-2 border-2 border-slate-700">
      <div className="flex gap-x-2">
        <label>Slug</label>
        <input
          type="text"
          value={localEpisode.slug}
          onChange={(e) =>
            setLocalEpisode({ ...localEpisode, slug: e.target.value })
          }
        />
        <label>Title</label>
        <input
          type="text"
          value={localEpisode.title}
          onChange={(e) =>
            setLocalEpisode({ ...localEpisode, title: e.target.value })
          }
        />
      </div>
      <label>Description</label>
      <textarea
        value={localEpisode.description}
        onChange={(e) =>
          setLocalEpisode({ ...localEpisode, description: e.target.value })
        }
      />
      <div className="block">
        <button className="p-2 bg-slate-200" onClick={updateEpisode}>
          Update
        </button>
      </div>
    </div>
  );
};

export default AdminEpisodeListItem;
