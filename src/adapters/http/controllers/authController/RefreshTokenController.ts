import { Request, Response } from 'express'
import { RefreshTokenUseCase } from '../../../../useCases/authUseCase/refreshToken/refreshTokenUseCase'

export class RefreshTokenController {
  constructor (
    private refreshTokenUseCase: RefreshTokenUseCase
  ) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const { refreshToken } = request.body
    try {
      // adicionar validação com joi depois
      const token = await this.refreshTokenUseCase.execute(
        refreshToken
      )

      return response.status(201).send({ token })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
