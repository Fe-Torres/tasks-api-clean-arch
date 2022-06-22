import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { ITokenPayload } from '../../../adapters/http/routes/middlewares/middleware'

export class RefreshTokenUseCase {
  async execute (refreshToken: string): Promise<string | Error> {
    const data = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    const { id } = data as ITokenPayload
    const newtoken = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    return newtoken
  }
}
