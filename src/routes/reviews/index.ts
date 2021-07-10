import { FastifyInstance } from 'fastify'
import { reviewsController } from '../../controllers/reviews'
import { Review } from '../../types/boxes'

export const reviewRoutes = async (fastify: FastifyInstance) => {
  fastify.post<{
    Body: Review
    Params: { boxId: string }
  }>('/:boxId', reviewsController.createPlaceReview)

  fastify.delete<{
    Params: { id: string }
  }>('/:id', reviewsController.deleteReview)
}

export const reviewsRoutes = async (fastify: FastifyInstance) => {
  fastify.get<{
    Params: { boxId: string }
  }>('/:boxId', reviewsController.getReviewsByPlaceId)
}
