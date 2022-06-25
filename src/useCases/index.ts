import { MongoUsersRepository } from '../repositories/implementations/mongoUsersRepository'
import { CreateUserUseCase } from './usersUseCase/createUser/createUserUseCase'
import { CreateUserController } from '../adapters/http/controllers/userController/createUserController'
import { AuthUserUseCase } from './authUseCase/authUser/authUserUseCase'
import { MongoTasksRepository } from '../repositories/implementations/mongoTasksRepository '
import { CreateTaskUseCase } from './tasksUseCase/createTask/createTaskUseCase'
import { CreateTaskController } from '../adapters/http/controllers/taskController/createTaskController'
import { AuthUserController } from '../adapters/http/controllers/authController/authUserController'
import { GetAllTasksByUserUseCase } from './tasksUseCase/getAllTasksbyUser/getAllTasksUseCaseByUser'
import { GetAllTasksController } from '../adapters/http/controllers/taskController/getAllTasksController'
import { FindByIdTaskUseCase } from './tasksUseCase/findByIdTask/findByIdTaskUseCase'
import { GetTaskByIdController } from '../adapters/http/controllers/taskController/getTaskByIdController'
import { DeleteTaskUseCase } from './tasksUseCase/deleteTask/deleteTaskUseCase'
import { DeleteTaskController } from '../adapters/http/controllers/taskController/deleteTaskController'
import { UpdateTaskUseCase } from './tasksUseCase/updateTask/updateTaskUseCase'
import { UpdateTaskController } from '../adapters/http/controllers/taskController/updateTaskController'
import { RefreshTokenController } from '../adapters/http/controllers/authController/refreshTokenController'
import { RefreshTokenUseCase } from './authUseCase/refreshToken/refreshTokenUseCase'

const mongoUsersRepository = new MongoUsersRepository()
const mongoTasksRepository = new MongoTasksRepository()

const createUserUseCase = new CreateUserUseCase(mongoUsersRepository)
const authUserUseCase = new AuthUserUseCase(mongoUsersRepository)

const createTaskUseCase = new CreateTaskUseCase(mongoTasksRepository)
const getAllTasksByUserUseCase = new GetAllTasksByUserUseCase(mongoTasksRepository)
const findTaskByIdUseCase = new FindByIdTaskUseCase(mongoTasksRepository)
const deleteTaskUseCase = new DeleteTaskUseCase(mongoTasksRepository)
const updateTaskUseCase = new UpdateTaskUseCase(mongoTasksRepository)

const createUserController = new CreateUserController(createUserUseCase)
const authUserController = new AuthUserController(authUserUseCase)
const refreshTokenController = new RefreshTokenController(new RefreshTokenUseCase())

const createTaskController = new CreateTaskController(createTaskUseCase)
const getAllTasksByUserController = new GetAllTasksController(getAllTasksByUserUseCase)
const findTaskByIdController = new GetTaskByIdController(findTaskByIdUseCase)
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase)
const updateTaskController = new UpdateTaskController(updateTaskUseCase)

export { authUserController, createUserController, createTaskController, getAllTasksByUserController, findTaskByIdController, deleteTaskController, updateTaskController, refreshTokenController }
