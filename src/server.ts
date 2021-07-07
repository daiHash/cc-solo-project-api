import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const prisma = new PrismaClient()
const app = fastify()

app.get<{
  Params: IPostByIdParam
}>('/:id', async (req, res) => {
  const { id } = req.params

  res.send({ id, hello: 'hello' })
})

interface IPostByIdParam {
  id: number
}

app.listen(3000, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`
  🚀 Server ready at: http://localhost:3000
`)
})
