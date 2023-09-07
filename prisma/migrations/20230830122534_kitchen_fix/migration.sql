/*
  Warnings:

  - The primary key for the `Kitchen` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Kitchen` table. All the data in the column will be lost.
  - The primary key for the `KitchensToRestaurants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `kitchenId` on the `KitchensToRestaurants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Kitchen` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kitchenName` to the `KitchensToRestaurants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "KitchensToRestaurants" DROP CONSTRAINT "KitchensToRestaurants_kitchenId_fkey";

-- AlterTable
ALTER TABLE "Kitchen" DROP CONSTRAINT "Kitchen_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "KitchensToRestaurants" DROP CONSTRAINT "KitchensToRestaurants_pkey",
DROP COLUMN "kitchenId",
ADD COLUMN     "kitchenName" TEXT NOT NULL,
ADD CONSTRAINT "KitchensToRestaurants_pkey" PRIMARY KEY ("restaurantId", "kitchenName");

-- CreateIndex
CREATE UNIQUE INDEX "Kitchen_name_key" ON "Kitchen"("name");

-- AddForeignKey
ALTER TABLE "KitchensToRestaurants" ADD CONSTRAINT "KitchensToRestaurants_kitchenName_fkey" FOREIGN KEY ("kitchenName") REFERENCES "Kitchen"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
