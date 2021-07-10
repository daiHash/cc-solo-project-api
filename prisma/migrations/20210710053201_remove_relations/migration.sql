/*
  Warnings:

  - You are about to drop the column `placeId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the `Place` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PlaceToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_placeId_fkey";

-- DropForeignKey
ALTER TABLE "_PlaceToTag" DROP CONSTRAINT "_PlaceToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlaceToTag" DROP CONSTRAINT "_PlaceToTag_B_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "placeId",
ADD COLUMN     "boxId" TEXT;

-- DropTable
DROP TABLE "Place";

-- DropTable
DROP TABLE "_PlaceToTag";

-- CreateTable
CREATE TABLE "Box" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "website" VARCHAR(255),
    "address" VARCHAR(255) NOT NULL,
    "mainImage" VARCHAR(255),
    "images" VARCHAR(255)[],
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "dropInFee" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membeship_Plan" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "period" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "boxId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BoxToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BoxToTag_AB_unique" ON "_BoxToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_BoxToTag_B_index" ON "_BoxToTag"("B");

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY ("boxId") REFERENCES "Box"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membeship_Plan" ADD FOREIGN KEY ("boxId") REFERENCES "Box"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoxToTag" ADD FOREIGN KEY ("A") REFERENCES "Box"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BoxToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
