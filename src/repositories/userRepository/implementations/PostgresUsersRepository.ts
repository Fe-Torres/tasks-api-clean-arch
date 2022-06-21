import { IUsersRepository } from '../IUsersRepository'
import { User } from '../../../entities/User/User'

export class MongoUsersRepository implements IUsersRepository {
  login (email: string, senha: string) {
    throw new Error('Method not implemented.')
  }

  private users: User[] = []

  async findByEmail (email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email)

    return user
  }

  async save (user: User): Promise<void> {
    this.users.push(user)
  }
};
