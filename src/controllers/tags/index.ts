import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
const prisma = new PrismaClient()

export const tagsController = {
  getTags: async (_req: FastifyRequest, res: FastifyReply) => {
    const tags = await prisma.tag.findMany()

    res.send(tags)
  },
}
