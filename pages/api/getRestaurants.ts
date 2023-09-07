import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const header = req.headers.xd?.toString();
  const filterData = header ? header.split(',') : [];

  const filter = filterData.map((elem: string) => ({
    kitchens: {
      some: {
        kitchenName: {
          contains: elem,
        },
      },
    },
  }));

  const defaultArray = [
    {
      kitchens: {
        some: {
          kitchenName: {
            contains: '',
          },
        },
      },
    },
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
      AND: filter.length > 0 ? filter : defaultArray,
    },
  });
  return res.status(200).json(data);
}
