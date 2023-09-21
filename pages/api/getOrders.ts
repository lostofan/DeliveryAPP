import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return handlePOST(req, res);
    case 'DELETE':
      return handleDELETE(req, res);
    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
async function handlePOST(req: NextApiRequest, res: NextApiResponse<any>) {
  const { price, userId, menuItemId } = JSON.parse(req.body);
  const data = await prisma.orderItem.create({
    data: {
      quantity: 1,
      price: price,
      orderId: userId,
      menuItemId: menuItemId,
    },
  });
  return res.status(200).json(data);
}
async function handleDELETE(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = JSON.parse(req.body);
  const data = await prisma.orderItem.delete({
    where: {
      id: id,
    },
  });
  return res.status(200).json(data);
}
