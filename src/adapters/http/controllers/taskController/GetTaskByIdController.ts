import { Request, Response } from 'express'
import { GetByIdTaskUseCase } from '../../../../useCases/tasksUseCase/findByIdTask/getByIdTaskUseCase'

export class GetTaskByIdController {
  constructor (
    private getTaskByIdUseCase: GetByIdTaskUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const userId = request.headers.userID
    try {
      const task = await this.getTaskByIdUseCase.execute(id, userId as string)
      return response.status(200).send({ task })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
