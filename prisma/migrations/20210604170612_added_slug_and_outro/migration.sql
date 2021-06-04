/*
  Warnings:

  - Added the required column `slug` to the `letters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outro` to the `letters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "letters" ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "outro" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "slug" TEXT NOT NULL;
