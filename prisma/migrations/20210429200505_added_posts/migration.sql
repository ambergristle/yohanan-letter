-- CreateTable
CREATE TABLE "posts" (
    "id" CHAR(36) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "topic" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sources" (
    "id" CHAR(36) NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "post_id" CHAR(36) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" CHAR(36) NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostToTag" (
    "A" CHAR(36) NOT NULL,
    "B" CHAR(36) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "tags.name_unique" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PostToTag_AB_unique" ON "_PostToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToTag_B_index" ON "_PostToTag"("B");

-- AddForeignKey
ALTER TABLE "sources" ADD FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD FOREIGN KEY ("A") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
