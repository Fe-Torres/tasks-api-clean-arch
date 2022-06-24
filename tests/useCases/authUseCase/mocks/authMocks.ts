/* eslint-disable no-undef */
import { IUsersRepository } from '../../../../src/repositories/interfaces/UserRepository'
import { IUserRequestDTO } from '../../../../src/useCases/usersUseCase/createUser/createUserDTO'

export const loginData = {
  email: 'email@teste.com',
  password: '123456'
}
export const userMockWithEncryptPassword: IUserRequestDTO = {
  name: 'Teste Oliveira',
  email: 'teste@gmail.com',
  password: '$2b$10$BOBl3jkp7jTx8hBrCKXdxeMiRk7l.VqffcMs0mvjV4ZilZsknQUGy'
}
export const userRepositoryMockWithUser: IUsersRepository = {
  findByEmail: jest.fn().mockReturnValue(userMockWithEncryptPassword),
  save: jest.fn()
}
export const userRepositoryMockWithoutUser: IUsersRepository = {
  findByEmail: jest.fn(),
  save: jest.fn()
}
