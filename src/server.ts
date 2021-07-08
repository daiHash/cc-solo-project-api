import fastify from 'fastify'
import { placeRoutes, placesRoutes } from './routes/places'
import { reviewRoutes, reviewsRoutes } from './routes/reviews'
import { tagsRoutes } from './routes/tags'

const app = fastify({ logger: true })

app.register(tagsRoutes, { prefix: '/api/v1/tags' })
app.register(placeRoutes, { prefix: '/api/v1/place' })
app.register(placesRoutes, { prefix: '/api/v1/places' })
app.register(reviewRoutes, { prefix: '/api/v1/place/review' })
app.register(reviewsRoutes, { prefix: '/api/v1/place/reviews' })

app.listen(3000, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`
  🚀 Server ready at: http://localhost:3000
`)
})
