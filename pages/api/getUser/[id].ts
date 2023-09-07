import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGET(req, res);
    case 'PUT':
      return handlePOST(req, res);

    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
async function handleGET(req: NextApiRequest, res: NextApiResponse<any>) {
  const data = await prisma.user.findUnique({
    where: {
      id: Number(req.query.id),
    },
  });
  return res.status(200).json(data);
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query;
  const { firstName, lastName, email, phone } = JSON.parse(req.body);
  const data = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    },
  });
  return res.status(201).json(data);
}
