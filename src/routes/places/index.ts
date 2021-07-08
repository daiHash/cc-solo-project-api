import { FastifyInstance } from 'fastify'
import { placeController } from '../../controllers/places'
import { Place } from '../../types/places'

export const placesRoutes = async (fastify: FastifyInstance) => {
  fastify.post<{
    Body: Place
  }>('/', placeController.createPlace)

  fastify.get<{
    Params: { id: string }
  }>('/:id', placeController.getPlaceById)
}
