import { IUsersRepository } from '../interfaces/UserRepository'
import { User } from '../../entities/User/User'

export class MongoUsersRepository implements IUsersRepository {
  async save (user: User): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findByEmail (email: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
};
