import { Router } from 'express'
import { authUserController, createUserController } from '../../../useCases'

const userRoutes = Router()

userRoutes.post('/user', (request, response) => {
  return createUserController.handle(request, response)
})
userRoutes.post('/user/auth', (request, response) => {
  return authUserController.handle(request, response)
})

export { userRoutes }
