import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { InferQueryOutput } from "../utils/trpc";

export type AdminEpisodeListItemProps = {
  episode: InferQueryOutput<"episode.byId">;
};

export const AdminEpisodeListItem = ({
  episode,
}: AdminEpisodeListItemProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-y-2 p-2 m-2 border-2 border-slate-700">
      <div className="flex gap-x-2">
        <label>Slug</label>
        <input type="text" value={episode.slug} placeholder="title" />
        <label>Title</label>
        <input type="text" value={episode.title} placeholder="title" />
      </div>
      <label>Description</label>
      <textarea value={episode.description} placeholder="title" />
      <label>Spotify Url</label>
      <input type="text" value={episode.spotifyUrl} placeholder="title" />
      <div className="block">
        <button className="p-2 bg-slate-200">Submit</button>
      </div>
    </div>
  );
};

export default AdminEpisodeListItem;
