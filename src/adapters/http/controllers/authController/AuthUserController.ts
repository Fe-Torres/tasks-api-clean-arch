import { Request, Response } from 'express'
import { AuthUserUseCase } from '../../../../useCases/authUseCase/authUser/authUserUseCase'

export class AuthUserController {
  constructor (
    private authUserUseCase: AuthUserUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    try {
      // adicionar validação com joi depois
      const token = await this.authUserUseCase.execute(
        email,
        password
      )

      return response.status(201).send({ token })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
