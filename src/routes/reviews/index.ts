import { FastifyInstance } from 'fastify'
import { reviewsController } from '../../controllers/reviews'
import { Review } from '../../types/places'

export const reviewsRoutes = async (fastify: FastifyInstance) => {
  fastify.post<{
    Body: Review
    Params: { placeId: string }
  }>('/:placeId', reviewsController.createPlaceReview)
}