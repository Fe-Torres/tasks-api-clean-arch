import express from 'express'
import { taskRoutes } from '../routes/taskRoutes'
import { userRoutes } from '../routes/userRoutes'

export class App {
  public server: express.Application

  constructor () {
    this.server = express()
    this.middleware()
    this.router()
  }

  private middleware () {
    this.server.use(express.json())
  }

  private router () {
    this.server.use(userRoutes)
    this.server.use(taskRoutes)
  }
}
