/*
  Warnings:

  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `episodeId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_episodeId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_pkey",
DROP COLUMN "episodeId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tag_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "TagsOnEpisodes" (
    "episodeId" TEXT NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "TagsOnEpisodes_pkey" PRIMARY KEY ("episodeId","tagId")
);

-- AddForeignKey
ALTER TABLE "TagsOnEpisodes" ADD CONSTRAINT "TagsOnEpisodes_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnEpisodes" ADD CONSTRAINT "TagsOnEpisodes_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
