export interface IAuthenticationRepository {
  login(email: string, senha: string): Promise<string | Error>
  refreshToken(token: string): Promise<string | Error>
}
