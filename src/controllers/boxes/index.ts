import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Box } from '../../types/boxes'
import { SearchQueries } from '../../types/boxes/routes'
const prisma = new PrismaClient()

export const boxController = {
  createBox: async (req: FastifyRequest, res: FastifyReply) => {
    const data = <Box>req.body
    const tags = data.tags.map((tag) => ({ name: tag }))

    const box = await prisma.box.create({
      data: {
        ...data,
        tags: {
          connectOrCreate: tags.map((tag) => {
            return {
              where: {
                name: tag.name,
              },
              create: {
                name: tag.name,
              },
            }
          }),
        },
      },
      include: { tags: true, reviews: true, membershipPlans: true },
    })

    res.send(box)
  },
  getBoxById: async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = <{ id: string }>req.params

    const box = await prisma.box.findUnique({
      where: {
        id,
      },
      include: { tags: true, reviews: true, membershipPlans: true },
    })

    res.send(box)
  },
  // TODO: Implement Pagination
  getBoxs: async (req: FastifyRequest, res: FastifyReply) => {
    const { limit, search, tags } = <SearchQueries>req.query
    const take = limit ? Number(limit) : 10
    const _tags = tags?.split(',') ?? []

    let boxes = await prisma.box.findMany({
      take,
      where: {
        name: { contains: search },
      },

      include: { tags: true, reviews: true, membershipPlans: true },
    })

    // TODO: Figure out how to query db instead of filtering
    if (tags) {
      boxes = boxes.filter((box) => {
        return box.tags.some((tag) => {
          return _tags.includes(tag.name)
        })
      })
    }

    res.send(boxes)
  },
  updateBox: async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = <{ id: string }>req.params
    const data = <Partial<Box>>req.body
    const tags = data.tags?.map((tag) => ({ name: tag })) ?? []

    const updatedBox = await prisma.box.update({
      where: {
        id,
      },
      data: {
        ...data,
        tags: {
          connectOrCreate: tags.map((tag) => {
            return {
              where: {
                name: tag.name,
              },
              create: {
                name: tag.name,
              },
            }
          }),
        },
      },
      include: { tags: true, reviews: true, membershipPlans: true },
    })

    res.send(updatedBox)
  },
  deleteBox: async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = <{ id: string }>req.params

    const box = await prisma.box.delete({
      where: {
        id,
      },
    })

    res.send({ message: `Box with id:${box.id} was deleted successfully` })
  },
}
