import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const postId = Number(req.query.id);

  switch (req.method) {
    case 'GET':
      return handleGET(postId, res);

    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
async function handleGET(postId: number, res: NextApiResponse<any>) {
  const data = await prisma.restaurant.findUnique({
    include: {
      menu: {
        select: {
          menuItems: true,
        },
      },
    },
    where: {
      id: postId,
    },
  });
  return res.status(200).json(data);
}
