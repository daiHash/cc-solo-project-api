import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
const prisma = new PrismaClient()

export const tagsController = {
  getTags: async (_req: FastifyRequest, res: FastifyReply) => {
    const tags = await prisma.tag.findMany()

    res.send(tags)
  },
  deleteTag: async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = <{ id: string }>req.params

    const tag = await prisma.tag.delete({
      where: { id },
    })

    res.send(tag)
  },
}
