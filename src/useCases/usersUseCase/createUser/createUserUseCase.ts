import { IUsersRepository } from '../../../repositories/interfaces/UserRepository'
import { User } from '../../../entities/User/User'
import { IUserRequestDTO } from './createUserDTO'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (userData: IUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(userData.email)
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User('', '', '', '')

    await this.usersRepository.save(user)
  }
}
