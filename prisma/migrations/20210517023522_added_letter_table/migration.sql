/*
  Warnings:

  - Added the required column `letter_id` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "letter_id" CHAR(36) NOT NULL;

-- CreateTable
CREATE TABLE "letters" (
    "id" CHAR(36) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "subject" TEXT NOT NULL,
    "intro" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD FOREIGN KEY ("letter_id") REFERENCES "letters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
