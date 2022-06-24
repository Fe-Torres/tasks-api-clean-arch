import 'dotenv/config'
import { IUsersRepository } from '../../../repositories/interfaces/UserRepository'
import { UserPassword } from '../../../entities/User/password'
import { UserValidation } from '../../../entities/User/validations'
import jwt from 'jsonwebtoken'
import { IToken } from './interface'

export class AuthUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) { }

  async execute (email: string, password: string): Promise<IToken> {
    if (!UserValidation.validationEmail(email)) throw new Error('Invalid e-mail.')
    if (!UserValidation.validationPassword(password)) throw new Error('Invalid password - Must contain 6 characters or more.')
    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (!userAlreadyExists) {
      throw new Error('User not found.')
    }
    const response = await UserPassword.comparePassword(userAlreadyExists.password, password)
    if (!response) throw new Error('Incorrect password.')
    const accessToken = jwt.sign({ id: userAlreadyExists.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    const refreshToken = jwt.sign({ id: userAlreadyExists.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })

    return { accessToken, refreshToken }
  }
}
