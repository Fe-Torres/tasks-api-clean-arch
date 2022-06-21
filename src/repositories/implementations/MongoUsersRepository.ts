import { IUsersRepository } from '../interfaces/UserRepository'
import { User } from '../../entities/User/User'
import UserModel from '../mongodb/models/UserModel'

export class MongoUsersRepository implements IUsersRepository {
  async save (user: User): Promise<void> {
    const userModel = new UserModel(user)
    return await userModel.save((error: any, result: any) => {
      if (error) throw new Error(error.message)
    })
  }

  async findByEmail (email: string): Promise<any> {
    return await UserModel.findOne({
      email
    })
  }
};
