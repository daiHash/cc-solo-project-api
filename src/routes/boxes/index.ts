import { Box } from '@prisma/client'
import { FastifyInstance } from 'fastify'
import { boxController } from '../../controllers/boxes'
import { SearchQueries } from '../../types/boxes/routes'

export const boxRoutes = async (fastify: FastifyInstance) => {
  fastify.post<{
    Body: Box
  }>('/', boxController.createBox)

  fastify.get<{
    Params: { id: string }
  }>('/:id', boxController.getBoxById)

  fastify.put<{ Params: { id: string }; Body: Partial<Box> }>(
    '/:id',
    boxController.updateBox
  )

  fastify.delete<{ Params: { id: string } }>('/:id', boxController.deleteBox)
}

export const boxesRoutes = async (fastify: FastifyInstance) => {
  fastify.get<{ Querystring: SearchQueries }>('/', boxController.getBoxs)
}
