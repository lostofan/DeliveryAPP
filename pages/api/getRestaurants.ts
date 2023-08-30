import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await prisma.restaurant.findMany({
    include: {
      kitchens: {
        select: {
          kitchenName: true,
        },
      },
    },
  });
  return res.status(200).json(data);
}
