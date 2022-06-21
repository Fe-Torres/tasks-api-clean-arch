import { MongoUsersRepository } from '../repositories/implementations/MongoUsersRepository'
import { CreateUserUseCase } from './usersUseCase/createUser/createUserUseCase'
import { CreateUserController } from '../adapters/http/controllers/CreateUserController'

const mongoUsersRepository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
