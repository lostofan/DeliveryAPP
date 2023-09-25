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
  const userId = req.query.id;
  const order = await prisma.order.findUnique({
    where: {
      userId: userId as string,
    },
    select: {
      id: true,
    },
  });
  const data = await prisma.orderItem.findMany({
    where: {
      orderId: Number(order?.id),
    },
    include: {
      menuItem: true,
    },
  });
  return res.status(200).json(data);
}
