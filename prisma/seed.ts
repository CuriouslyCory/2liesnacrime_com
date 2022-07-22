//dump data to file
import { PrismaClient } from "@prisma/client";
import episodes from "./seeds/episodes.json";
import tags from "./seeds/tags.json";
import tagsOnEpisodes from "./seeds/tagsOnEpisodes.json";
import comments from "./seeds/comments.json";

const prisma = new PrismaClient();

async function main() {
    await prisma.episode.createMany({ data: episodes });
    await prisma.comment.createMany({ data: comments });
    await prisma.tag.createMany({ data: tags });
    await prisma.tagsOnEpisodes.createMany({ data: tagsOnEpisodes });
    
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
