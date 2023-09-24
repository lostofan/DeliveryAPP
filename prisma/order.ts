import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createCart = async (userId: string) => {
  return prisma.order.upsert({
    where: {
      userId: userId as string,
    },
    update: {
      userId: userId as string,
    },
    create: {
      userId: userId as string,
    },
  });
};
