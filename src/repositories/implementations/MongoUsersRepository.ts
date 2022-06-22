import { IUsersRepository } from '../interfaces/UserRepository'
import { User } from '../../entities/User/User'
import UserModel from '../mongodb/models/UserModel'

export class MongoUsersRepository implements IUsersRepository {
  async save (user: User): Promise<void> {
    const userModel = new UserModel(user)
    await userModel.save()
  }

  async findByEmail (email: string): Promise<undefined | User> {
    return await UserModel.findOne({
      email
    })
  }
};
