import { User } from '../../entities/User/User'

export interface IUsersRepository {
  save(user: User): Promise<void>
  findByEmail(email:string): Promise<boolean>
}
