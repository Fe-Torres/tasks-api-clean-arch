import { Router } from 'express'
import { authUserController, createTaskController, createUserController, deleteTaskController, getAllTasksByUserController, getTaskByIdController } from '../../../useCases'
import { AuthMiddleware } from './middlewares/middleware'

const router = Router()

router.post('/user', (request, response) => {
  return createUserController.handle(request, response)
})
router.post('/user/auth', (request, response) => {
  return authUserController.handle(request, response)
})

router.post('/task', AuthMiddleware, (request, response) => {
  return createTaskController.handle(request, response)
})

router.get('/task', AuthMiddleware, (request, response) => {
  return getAllTasksByUserController.handle(request, response)
})
router.get('/task/:id', AuthMiddleware, (request, response) => {
  return getTaskByIdController.handle(request, response)
})
router.delete('/task/:id', AuthMiddleware, (request, response) => {
  return deleteTaskController.handle(request, response)
})

export { router }
