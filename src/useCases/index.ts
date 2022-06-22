import { MongoUsersRepository } from '../repositories/implementations/MongoUsersRepository'
import { CreateUserUseCase } from './usersUseCase/createUser/createUserUseCase'
import { CreateUserController } from '../adapters/http/controllers/userController/CreateUserController'
import { AuthUserUseCase } from './authUseCase/authUser/authUserUseCase'
import { MongoTasksRepository } from '../repositories/implementations/MongoTasksRepository '
import { CreateTaskUseCase } from './tasksUseCase/createTask/createTaskUseCase'
import { CreateTaskController } from '../adapters/http/controllers/taskController/CreateTaskController'
import { AuthUserController } from '../adapters/http/controllers/authController/AuthUserController'
import { GetAllTasksByUserUseCase } from './tasksUseCase/getAllTasksbyUser/getAllTasksUseCaseByUser'
import { GetAllTasksController } from '../adapters/http/controllers/taskController/GetAllTasksController'
import { GetByIdTaskUseCase } from './tasksUseCase/findByIdTask/getByIdTaskUseCase'
import { GetTaskByIdController } from '../adapters/http/controllers/taskController/GetTaskByIdController'
import { DeleteTaskUseCase } from './tasksUseCase/deleteTask/deleteTaskUseCase'
import { DeleteTaskController } from '../adapters/http/controllers/taskController/DeleteTaskController'
import { UpdateTaskUseCase } from './tasksUseCase/updateTask/updateTaskUseCase'
import { UpdateTaskController } from '../adapters/http/controllers/taskController/UpdateTaskController'

const mongoUsersRepository = new MongoUsersRepository()
const mongoTasksRepository = new MongoTasksRepository()

const createUserUseCase = new CreateUserUseCase(mongoUsersRepository)
const authUserUseCase = new AuthUserUseCase(mongoUsersRepository)

const createTaskUseCase = new CreateTaskUseCase(mongoTasksRepository)
const getAllTasksByUserUseCase = new GetAllTasksByUserUseCase(mongoTasksRepository)
const getTaskByIdUseCase = new GetByIdTaskUseCase(mongoTasksRepository)
const deleteTaskUseCase = new DeleteTaskUseCase(mongoTasksRepository)
const updateTaskUseCase = new UpdateTaskUseCase(mongoTasksRepository)

const createUserController = new CreateUserController(createUserUseCase)
const authUserController = new AuthUserController(authUserUseCase)

const createTaskController = new CreateTaskController(createTaskUseCase)
const getAllTasksByUserController = new GetAllTasksController(getAllTasksByUserUseCase)
const getTaskByIdController = new GetTaskByIdController(getTaskByIdUseCase)
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase)
const updateTaskController = new UpdateTaskController(updateTaskUseCase)

export { authUserController, createUserController, createTaskController, getAllTasksByUserController, getTaskByIdController, deleteTaskController, updateTaskController }
