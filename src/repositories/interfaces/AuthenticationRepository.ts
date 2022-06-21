export interface IAuthenticationRepository {
  login(email: string, senha:string): Promise<string>
  refreshToken(token:string): Promise<string|Error>
}
