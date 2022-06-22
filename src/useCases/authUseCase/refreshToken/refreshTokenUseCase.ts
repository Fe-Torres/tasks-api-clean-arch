import jwt from 'jsonwebtoken'
import 'dotenv/config'

export class RefreshTokenUseCase {
  async execute (refreshToken: string): Promise<string | Error> {
    if (refreshToken === 'abc') { console.log(refreshToken) }
    const token = jwt.sign({ refreshToken }, process.env.JWT_SECRET, { expiresIn: '1d' })
    return token
  }
}
