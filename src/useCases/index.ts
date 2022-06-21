import { MongoUsersRepository } from '../repositories/userRepository/implementations/PostgresUsersRepository'
import { CreateUserUseCase } from './usersUseCase/CreateUser/CreateUserUseCase'
import { CreateUserController } from '../adapters/http/controllers/CreateUserController'

const postgresUsersRepository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
