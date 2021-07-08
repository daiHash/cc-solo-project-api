import fastify from 'fastify'
import { placeRoutes, placesRoutes } from './routes/places'
import { reviewsRoutes } from './routes/reviews'

const app = fastify({ logger: true })

app.register(placeRoutes, { prefix: '/api/v1/place' })
app.register(placesRoutes, { prefix: '/api/v1/places' })
app.register(reviewsRoutes, { prefix: '/api/v1/place/review' })

app.listen(3000, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`
  🚀 Server ready at: http://localhost:3000
`)
})
