/*
  Warnings:

  - You are about to drop the column `kitchen` on the `Restaurant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "kitchen";

-- CreateTable
CREATE TABLE "Kitchen" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Kitchen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KitchensToRestaurants" (
    "restaurantId" INTEGER NOT NULL,
    "kitchenId" INTEGER NOT NULL,

    CONSTRAINT "KitchensToRestaurants_pkey" PRIMARY KEY ("restaurantId","kitchenId")
);

-- AddForeignKey
ALTER TABLE "KitchensToRestaurants" ADD CONSTRAINT "KitchensToRestaurants_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KitchensToRestaurants" ADD CONSTRAINT "KitchensToRestaurants_kitchenId_fkey" FOREIGN KEY ("kitchenId") REFERENCES "Kitchen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
