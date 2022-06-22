import { Request, Response } from 'express'
import { ITaskRequestDTO } from '../../../../useCases/tasksUseCase/createTask/createTaskDTO'
import { CreateTaskUseCase } from '../../../../useCases/tasksUseCase/createTask/createTaskUseCase'

export class CreateTaskController {
  constructor (
    private createTaskUsecase: CreateTaskUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const taskRequest: ITaskRequestDTO = request.body
    const userId = request.headers.userID
    try {
      await this.createTaskUsecase.execute(taskRequest, userId as string)
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
