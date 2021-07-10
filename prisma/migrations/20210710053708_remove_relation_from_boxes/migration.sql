/*
  Warnings:

  - You are about to drop the column `boxId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the `Box` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Membeship_Plan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BoxToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Membeship_Plan" DROP CONSTRAINT "Membeship_Plan_boxId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_boxId_fkey";

-- DropForeignKey
ALTER TABLE "_BoxToTag" DROP CONSTRAINT "_BoxToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_BoxToTag" DROP CONSTRAINT "_BoxToTag_B_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "boxId";

-- DropTable
DROP TABLE "Box";

-- DropTable
DROP TABLE "Membeship_Plan";

-- DropTable
DROP TABLE "_BoxToTag";
