import { MongoUsersRepository } from '../repositories/implementations/MongoUsersRepository'
import { CreateUserUseCase } from './usersUseCase/createUser/createUserUseCase'
import { CreateUserController } from '../adapters/http/controllers/CreateUserController'

const postgresUsersRepository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
