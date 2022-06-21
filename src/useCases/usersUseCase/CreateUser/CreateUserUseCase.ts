import { IUsersRepository } from '../../../repositories/userRepository/IUsersRepository'
import { IUserRequestDTO } from './CreateUserDTO'
import { User } from '../../../entities/User/User'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: IUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User('', '', '', '')

    await this.usersRepository.save(user)
  }
}
