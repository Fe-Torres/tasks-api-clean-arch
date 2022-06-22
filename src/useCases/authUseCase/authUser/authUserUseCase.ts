import { IUsersRepository } from '../../../repositories/interfaces/UserRepository'
import { UserPassword } from '../../../entities/User/password'
import { UserValidation } from '../../../entities/User/validations'
import jwt from 'jsonwebtoken'

export class AuthUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) { }

  async execute (email: string, password: string): Promise<string | Error> {
    UserValidation.validationEmail(email)
    UserValidation.validationPassword(password)
    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (!userAlreadyExists) {
      throw new Error('User not found.')
    }
    const response = await UserPassword.comparePassword(userAlreadyExists.password, password)
    if (!response) throw new Error('Invalid password.')
    const token = jwt.sign({ id: userAlreadyExists.id }, process.env.JWT_SECRET, { expiresIn: '1d' })
    return token
  }
}
