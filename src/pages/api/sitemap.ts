import { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const siteMap = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    // List of posts
    const episodes = await prisma.episode.findMany({});

    // Create each URL row
    episodes.forEach((post) => {
      smStream.write({
        url: `/episode/${post.slug}`,
        changefreq: "weekly",
        lastmod: post.updatedAt,
        priority: 0.9,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};

export default siteMap;
