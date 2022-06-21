import { IUsersRepository } from '../../../repositories/interfaces/UserRepository'
import { User } from '../../../entities/User/User'
import { IUserRequestDTO } from './createUserDTO'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (userData: IUserRequestDTO) {
    const user = new User(userData.name, userData.email, userData.password)
    const userAlreadyExists = await this.usersRepository.findByEmail(user.email)
    console.log(userAlreadyExists)
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    await this.usersRepository.save(user)
  }
}
