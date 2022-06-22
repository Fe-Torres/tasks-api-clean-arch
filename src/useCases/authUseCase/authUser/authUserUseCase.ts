import { IUsersRepository } from '../../../repositories/interfaces/UserRepository'
import { UserPassword } from '../../../entities/User/password'
import { UserValidation } from '../../../entities/User/validations'
import jwt from 'jsonwebtoken'
import { Token } from './interface'

export class AuthUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) { }

  async execute (email: string, password: string): Promise<Token | Error> {
    UserValidation.validationEmail(email)
    UserValidation.validationPassword(password)
    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (!userAlreadyExists) {
      throw new Error('User not found.')
    }
    const response = await UserPassword.comparePassword(userAlreadyExists.password, password)
    if (!response) throw new Error('Invalid password.')
    const accessToken = jwt.sign({ id: userAlreadyExists.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    const refreshToken = jwt.sign({ id: userAlreadyExists.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })

    return { accessToken, refreshToken }
  }
}
