-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "author" VARCHAR(50),
    "placeId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE CASCADE ON UPDATE CASCADE;
