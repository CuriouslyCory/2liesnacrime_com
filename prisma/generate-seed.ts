//dump data to file
import { PrismaClient } from "@prisma/client";
import { writeFileSync } from "fs";

const prisma = new PrismaClient();

async function main() {
    const episodes = await prisma.episode.findMany({});
    writeFileSync("./prisma/seeds/episodes.json", JSON.stringify(episodes));
    
    const tags = await prisma.tag.findMany({});
    writeFileSync("./prisma/seeds/tags.json", JSON.stringify(tags));

    const tagsOnEpisodes = await prisma.tagsOnEpisodes.findMany({});
    writeFileSync("./prisma/seeds/tagsOnEpisodes.json", JSON.stringify(tagsOnEpisodes));

    const comments = await prisma.comment.findMany({});
    writeFileSync("./prisma/seeds/comments.json", JSON.stringify(comments));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
