import fastify from 'fastify'
import { boxesRoutes, boxRoutes } from './routes/boxes'
import { reviewRoutes, reviewsRoutes } from './routes/reviews'
import { tagsRoutes } from './routes/tags'

const app = fastify({ logger: true })

app.register(tagsRoutes, { prefix: '/api/v1/tags' })
app.register(boxRoutes, { prefix: '/api/v1/box' })
app.register(reviewRoutes, { prefix: '/api/v1/box/review' })
app.register(reviewsRoutes, { prefix: '/api/v1/box/reviews' })
app.register(boxesRoutes, { prefix: '/api/v1/boxes' })

app.listen(3000, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`
  🚀 Server ready at: http://localhost:3000
`)
})
