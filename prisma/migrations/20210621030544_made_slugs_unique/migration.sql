/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `letters` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `posts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "letters.slug_unique" ON "letters"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "posts.slug_unique" ON "posts"("slug");
