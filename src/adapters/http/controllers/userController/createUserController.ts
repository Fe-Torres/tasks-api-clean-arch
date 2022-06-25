import { Request, Response } from 'express'
import { IUserRequestDTO } from '../../../../useCases/usersUseCase/createUser/createUserDTO'
import { CreateUserUseCase } from '../../../../useCases/usersUseCase/createUser/createUserUseCase'

export class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const userRequest:IUserRequestDTO = request.body
    try {
      // adicionar validação com joi depois
      await this.createUserUseCase.execute(userRequest)
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
