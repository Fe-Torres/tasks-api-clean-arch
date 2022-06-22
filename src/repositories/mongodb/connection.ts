import mongoose from 'mongoose'

export class MongoConnection {
  static async createConnection (mongoUri: string) {
    try {
      await mongoose.connect(mongoUri)
      console.log('Mongodb connected')
    } catch (error) {
      throw new Error('Error in connection database: ' + error.message)
    }
  }
}
