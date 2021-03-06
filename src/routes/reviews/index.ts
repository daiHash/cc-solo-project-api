import { FastifyInstance } from 'fastify'
import { reviewsController } from '../../controllers/reviews'
import { Review } from '../../types/places'

export const reviewRoutes = async (fastify: FastifyInstance) => {
  fastify.post<{
    Body: Review
    Params: { placeId: string }
  }>('/:placeId', reviewsController.createPlaceReview)

  fastify.delete<{
    Params: { id: string }
  }>('/:id', reviewsController.deleteReview)
}

export const reviewsRoutes = async (fastify: FastifyInstance) => {
  fastify.get<{
    Params: { placeId: string }
  }>('/:placeId', reviewsController.getReviewsByPlaceId)
}
