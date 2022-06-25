import { Request, Response } from 'express'
import { ITaskQuery } from '../../../../repositories/interfaces/tasksRepository'
import { GetAllTasksByUserUseCase } from '../../../../useCases/tasksUseCase/getAllTasksbyUser/getAllTasksUseCaseByUser'

export class GetAllTasksController {
  constructor (
    private getAllTasksByUserUseCase: GetAllTasksByUserUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const userId = request.headers.userID
    const { isDone } = request.params
    const taskQuery: ITaskQuery = {
      userId: userId as string,
      isDone: isDone || undefined
    }
    try {
      const tasks = await this.getAllTasksByUserUseCase.execute(taskQuery)
      return response.status(200).send({ tasks })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
