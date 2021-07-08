import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Place } from '../../types/places'
const prisma = new PrismaClient()

export const placeController = {
  createPlace: async (req: FastifyRequest, res: FastifyReply) => {
    const data = req.body as Place
    const tags = data.tags.map((tag) => ({ name: tag }))

    const place = await prisma.place.create({
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
      include: { tags: true },
    })

    res.send(place)
  },
  getPlaceById: async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = req.params as { id: string }

    const place = await prisma.place.findUnique({
      where: {
        id,
      },
      include: { tags: true },
    })

    res.send(place)
  },
}
