import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGET(req, res);
    case 'PUT':
      return handlePUT(req, res);

    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
async function handleGET(req: NextApiRequest, res: NextApiResponse<any>) {
  const data = await prisma.user.findUnique({
    where: {
      id: req.query.id as string,
    },
  });
  return res.status(200).json(data);
}

async function handlePUT(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query;
  console.log('>>>>' + id);
  const { firstName, lastName, email, phone } = JSON.parse(req.body);
  const data = await prisma.user.update({
    where: {
      id: id as string,
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
