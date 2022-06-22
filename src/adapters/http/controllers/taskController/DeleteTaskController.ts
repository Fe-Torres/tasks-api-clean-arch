import { Request, Response } from 'express'
import { DeleteTaskUseCase } from '../../../../useCases/tasksUseCase/deleteTask/deleteTaskUseCase'

export class DeleteTaskController {
  constructor (
    private deleteTaskUseCase: DeleteTaskUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const userId = request.headers.userID
    try {
      await this.deleteTaskUseCase.execute(id, userId as string)
      return response.status(204).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
