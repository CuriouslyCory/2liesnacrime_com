import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import logo from "../../../public/full-logo.svg";
import { EpisodeCard } from "../../components/episode-card";

export const EpisodePage: NextPage = (): JSX.Element => {
    const router = useRouter();
    const { slug } = router.query;
    const { data: episode, error, status } = trpc.useQuery(
        [
            "episode.bySlug",
            { slug : !!slug && !Array.isArray(slug) ? slug : "" }
        ], 
        { enabled: !!slug }
    );

    return (
    <>
        <Head>
            {!!episode && (
                [
                    <meta property="og:locale" content="en_US" />,
                    <meta property="og:type" content="article" />,
                    <meta property="og:title" content={episode.title} />,
                    <meta property="og:description" content={episode.description} />,
                    <meta property="og:url" content={`https://www.2liesinacrime.com/episode/${episode.slug}`} />,
                    <meta property="og:image" content="https://www.2liesnacrime.com/teaser-logo.jpg" />,
                    <meta name="twitter:title" content={episode.title} />,
                    <meta name="twitter:description" content={episode.description} />,
                    <meta name="twitter:image" content="https://www.2liesnacrime.com/teaser-logo.jpg" />,
                    <meta name="twitter:card" content="summary_large_image" />,
                ]
            )}
        </Head>
        {!episode && <span>Loading...</span>}
        {episode && <EpisodeCard episode={episode} />}
    </>
    );

};

export default EpisodePage;