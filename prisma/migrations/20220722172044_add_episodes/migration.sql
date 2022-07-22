-- CreateTable
CREATE TABLE "Episode" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "spotifyUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "name" TEXT NOT NULL,
    "episodeId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "episodeId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
