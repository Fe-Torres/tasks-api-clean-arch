import { MongoUsersRepository } from '../repositories/implementations/MongoUsersRepository'
import { CreateUserUseCase } from './usersUseCase/createUser/createUserUseCase'
import { CreateUserController } from '../adapters/http/controllers/CreateUserController'
import { AuthUserUseCase } from './authUseCase/authUser/authUserUseCase'
import { AuthUserController } from '../adapters/http/controllers/AuthUserController'

const mongoUsersRepository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(mongoUsersRepository)
const authUserUseCase = new AuthUserUseCase(mongoUsersRepository)

const createUserController = new CreateUserController(
  createUserUseCase
)
const authUserController = new AuthUserController(authUserUseCase)

export { authUserController, createUserController }
