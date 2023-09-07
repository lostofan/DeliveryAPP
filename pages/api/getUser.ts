import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = Number(req.query);
  console.log('>>>>' + userId);
  switch (req.method) {
    case 'GET':
      return handleGET(userId, res);
    /*    case 'POST':
      return handlePOST(userId, res)
 */
    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
async function handleGET(userId: number, res: NextApiResponse<any>) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return res.status(200).json(data);
}

/* async function handlePOST(req: NextApiRequest, res: NextApiResponse<any>) {
  const data = await prisma.user.update({
    where: {
      id: userId,
    },
   data: {
    email:
   }
  });
  return res.status(200).json(data);
} */
