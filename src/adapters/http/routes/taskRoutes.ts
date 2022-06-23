import { Router } from 'express'
import { createTaskController, deleteTaskController, getAllTasksByUserController, findTaskByIdController, updateTaskController } from '../../../useCases'
import { AuthMiddleware } from './middlewares/middleware'

const taskRoutes = Router()

taskRoutes.post('/task', AuthMiddleware, (request, response) => {
  return createTaskController.handle(request, response)
})

taskRoutes.get('/task', AuthMiddleware, (request, response) => {
  return getAllTasksByUserController.handle(request, response)
})
taskRoutes.get('/task/:id', AuthMiddleware, (request, response) => {
  return findTaskByIdController.handle(request, response)
})
taskRoutes.delete('/task/:id', AuthMiddleware, (request, response) => {
  return deleteTaskController.handle(request, response)
})
taskRoutes.put('/task', AuthMiddleware, (request, response) => {
  return updateTaskController.handle(request, response)
})

export { taskRoutes }
