/* import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const foodId = Number(req.query.id);

  switch (req.method) {
    case 'GET':
      return handleGET(foodId, res);

    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
async function handleGET(foodId: number, res: NextApiResponse<any>) {
  const data = await prisma.menuItem({
    include: {
      menu: {
        select: {
          menuItems: true,
        },
      },
    },
    where: {
      id: foodId,
    },
  });
  return res.status(200).json(data);
}
 */
