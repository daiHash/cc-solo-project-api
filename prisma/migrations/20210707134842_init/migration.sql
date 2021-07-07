-- CreateTable
CREATE TABLE "Place" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255),
    "address" VARCHAR(255) NOT NULL,
    "subaddress" VARCHAR(255),
    "mainImage" VARCHAR(255),
    "images" VARCHAR(255)[],
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlaceToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag.name_unique" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PlaceToTag_AB_unique" ON "_PlaceToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PlaceToTag_B_index" ON "_PlaceToTag"("B");

-- AddForeignKey
ALTER TABLE "_PlaceToTag" ADD FOREIGN KEY ("A") REFERENCES "Place"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaceToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
