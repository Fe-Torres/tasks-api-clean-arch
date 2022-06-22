import { IUsersRepository } from '../../../repositories/interfaces/UserRepository'
import { User } from '../../../entities/User/User'
import { IUserRequestDTO } from './createUserDTO'
import { UserPassword } from '../../../entities/User/password'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (userData: IUserRequestDTO) {
    const user = new User(userData.name, userData.email, userData.password)
    const userAlreadyExists = await this.usersRepository.findByEmail(user.email)
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }
    user.password = await UserPassword.encryptPassword(user.password)
    await this.usersRepository.save(user)
  }
}
