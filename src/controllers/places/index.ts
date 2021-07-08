import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Place } from '../../types/places'
import { SearchQueries } from '../../types/places/routes'
const prisma = new PrismaClient()

export const placeController = {
  createPlace: async (req: FastifyRequest, res: FastifyReply) => {
    const data = <Place>req.body
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
    const { id } = <{ id: string }>req.params

    const place = await prisma.place.findUnique({
      where: {
        id,
      },
      include: { tags: true },
    })

    res.send(place)
  },
  // TODO: Implement Pagination
  getPlaces: async (req: FastifyRequest, res: FastifyReply) => {
    const { limit, search, tags } = <SearchQueries>req.query
    const take = limit ? Number(limit) : 10
    const _tags = tags?.split(',') ?? []

    let places = await prisma.place.findMany({
      take,
      where: {
        name: { contains: search },
      },

      include: { tags: true },
    })

    // TODO: Figure out how to query db instead of filtering
    if (tags) {
      places = places.filter((place) => {
        return place.tags.some((tag) => {
          return _tags.includes(tag.name)
        })
      })
    }

    res.send(places)
  },
  updatePlace: async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = <{ id: string }>req.params
    const data = <Partial<Place>>req.body
    const tags = data.tags?.map((tag) => ({ name: tag })) ?? []

    const updatedPlace = await prisma.place.update({
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
      include: { tags: true },
    })

    res.send(updatedPlace)
  },
  deletePlace: async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = <{ id: string }>req.params

    const place = await prisma.place.delete({
      where: {
        id,
      },
    })

    res.send(place)
  },
}
