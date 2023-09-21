import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const restaurantId = Number(req.query.id);

  const data = await prisma.restaurant.findUnique({
    include: {
      menu: {
        select: {
          menuItems: true,
        },
      },
    },
    where: {
      id: restaurantId,
    },
  });
  return res.status(200).json(data);
}
