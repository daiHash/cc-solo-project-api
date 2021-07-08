import fastify from 'fastify'
import { placesRoutes } from './routes/places'

const app = fastify({ logger: true })

app.register(placesRoutes, { prefix: '/api/v1/place' })

app.listen(3000, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`
  🚀 Server ready at: http://localhost:3000
`)
})
