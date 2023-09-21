import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGET(req, res);

    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
async function handleGET(req: NextApiRequest, res: NextApiResponse<any>) {
  const id = Number(req.query.id);
  const data = await prisma.orderItem.findMany({
    where: {
      orderId: id,
    },
    include: {
      menuItem: true,
    },
  });
  return res.status(200).json(data);
}
