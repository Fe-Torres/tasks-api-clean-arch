import { User } from '../../entities/User/User'

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>
  save(user: User): Promise<void>
  login(email: string, senha:string)
}
