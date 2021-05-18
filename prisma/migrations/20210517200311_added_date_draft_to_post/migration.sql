/*
  Warnings:

  - You are about to drop the column `topic` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `posts` table. All the data in the column will be lost.
  - Added the required column `draft` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "posts.slug_unique";

-- AlterTable
ALTER TABLE "letters" ALTER COLUMN "draft" DROP DEFAULT;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "topic",
DROP COLUMN "slug",
ADD COLUMN     "draft" BOOLEAN NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
