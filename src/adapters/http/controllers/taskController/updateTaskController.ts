import { Request, Response } from 'express'
import { ITaskRequestDTO } from '../../../../useCases/tasksUseCase/createTask/createTaskDTO'
import { UpdateTaskUseCase } from '../../../../useCases/tasksUseCase/updateTask/updateTaskUseCase'

export class UpdateTaskController {
  constructor (
    private updateTaskUseCase: UpdateTaskUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const taskRequest: ITaskRequestDTO = request.body
    const userId = request.headers.userID

    try {
      await this.updateTaskUseCase.execute(taskRequest, userId as string)
      return response.status(204).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
