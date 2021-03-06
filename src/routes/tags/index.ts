import { FastifyInstance } from 'fastify'
import { tagsController } from '../../controllers/tags'

export const tagsRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/', tagsController.getTags)
  fastify.delete<{ Params: { id: string } }>('/:id', tagsController.deleteTag)
}
