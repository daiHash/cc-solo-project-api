import { FastifyInstance } from 'fastify'
import { placeController } from '../../controllers/places'
import { Place } from '../../types/places'
import { SearchQueries } from '../../types/places/routes'

export const placesRoutes = async (fastify: FastifyInstance) => {
  fastify.post<{
    Body: Place
  }>('/', placeController.createPlace)

  fastify.get<{
    Params: { id: string }
  }>('/:id', placeController.getPlaceById)

  fastify.get<{ Querystring: SearchQueries }>('/', placeController.getPlaces)

  fastify.put<{ Params: { id: string }; Body: Partial<Place> }>(
    '/:id',
    placeController.updatePlace
  )
}
