import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Review } from '../../types/places'
const prisma = new PrismaClient()

export const reviewsController = {
  createPlaceReview: async (req: FastifyRequest, res: FastifyReply) => {
    const data = <Review>req.body
    const { placeId } = <{ placeId: string }>req.params

    const review = await prisma.review.create({
      data: { ...data, place: { connect: { id: placeId } } },
      include: { place: true },
    })

    res.send(review)
  },
  getReviewsByPlaceId: async (req: FastifyRequest, res: FastifyReply) => {
    const { placeId } = <{ placeId: string }>req.params

    const review = await prisma.review.findMany({
      where: { placeId },
    })

    res.send(review)
  },
}
