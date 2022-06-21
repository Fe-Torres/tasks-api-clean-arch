import mongoose from 'mongoose'

export class MongoConnection {
  constructor (mongoUri: string) {
    mongoose.connect(mongoUri, (err: any) => {
      if (err) {
        console.log('error connecting to database', err.message)
      } else {
        console.log('Connecting to MONGO')
      }
    })
  }
}
