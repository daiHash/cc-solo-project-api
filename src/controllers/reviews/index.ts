import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { Review } from '../../types/boxes'
const prisma = new PrismaClient()

export const reviewsController = {
  createPlaceReview: async (req: FastifyRequest, res: FastifyReply) => {
    const data = <Review>req.body
    const { boxId } = <{ boxId: string }>req.params

    const review = await prisma.review.create({
      data: { ...data, box: { connect: { id: boxId } } },
      include: { box: true },
    })

    res.send(review)
  },
  getReviewsByPlaceId: async (req: FastifyRequest, res: FastifyReply) => {
    const { boxId } = <{ boxId: string }>req.params

    const review = await prisma.review.findMany({
      where: { boxId },
    })

    res.send(review)
  },
  deleteReview: async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = <{ id: string }>req.params

    const review = await prisma.review.delete({
      where: { id },
    })

    res.send({
      message: `Place review with id:${review.id} was deleted successfully`,
    })
  },
}
