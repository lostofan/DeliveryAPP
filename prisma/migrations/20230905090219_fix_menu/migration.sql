/*
  Warnings:

  - You are about to drop the column `description` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `MenuItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "description",
DROP COLUMN "price";

-- AlterTable
ALTER TABLE "MenuItem" DROP COLUMN "description";
