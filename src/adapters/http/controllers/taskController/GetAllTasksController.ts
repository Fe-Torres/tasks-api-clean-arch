import { Request, Response } from 'express'
import { GetAllTasksByUserUseCase } from '../../../../useCases/tasksUseCase/getAllTasksbyUser/getAllTasksUseCaseByUser'

export class GetAllTasksController {
  constructor (
    private getAllTasksByUserUseCase: GetAllTasksByUserUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const userId = request.headers.userID
    try {
      const tasks = await this.getAllTasksByUserUseCase.execute(userId as string)
      return response.status(201).send({ tasks })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
