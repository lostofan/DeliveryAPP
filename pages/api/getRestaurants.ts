import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const header = req.headers.xd?.toString();
  const filterData = header ? header.split(',') : [];
  const filter = filterData.map((elem: string) => ({ kitchenName: { contains: elem } }));
  const defaultArray = [
    { kitchenName: { contains: 'Pizza' } },
    { kitchenName: { contains: 'Burger' } },
    { kitchenName: { contains: 'BBQ' } },
    { kitchenName: { contains: 'Vegan' } },
    { kitchenName: { contains: 'Sushi' } },
    { kitchenName: { contains: 'Desserts' } },
  ];
  const data = await prisma.restaurant.findMany({
    include: {
      kitchens: {
        select: {
          kitchenName: true,
        },
      },
    },
    where: {
      kitchens: {
        some: {
          OR: filter.length > 0 ? filter : defaultArray,
        },
      },
    },
  });
  return res.status(200).json(data);
}
