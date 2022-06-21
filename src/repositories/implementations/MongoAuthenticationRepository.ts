import { IAuthenticationRepository } from '../interfaces/AuthenticationRepository'

export class MongoAuthenticationRepository implements IAuthenticationRepository {
  login (email: string, senha: string): Promise<string> {
    throw new Error('Method not implemented.')
  }

  refreshToken (token: string): Promise<string | Error> {
    throw new Error('Method not implemented.')
  }
};
