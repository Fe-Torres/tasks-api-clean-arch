import { App } from './app'
import 'dotenv/config'
import { MongoConnection } from '../../../repositories/mongodb/connection'

if (!process.env.PORT) {
  console.log('Error to get env vars')
  process.exit(1)
}

// eslint-disable-next-line no-new
new MongoConnection(process.env.MONGO_URI)

new App().server.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`)
})
