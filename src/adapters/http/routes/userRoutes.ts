import { Router } from 'express'
import { authUserController, createUserController, refreshTokenController } from '../../../useCases'

const userRoutes = Router()

userRoutes.post('/user', (request, response) => {
  return createUserController.handle(request, response)
})
userRoutes.post('/auth', (request, response) => {
  return authUserController.handle(request, response)
})
userRoutes.post('/refresh-token', (request, response) => {
  return refreshTokenController.handle(request, response)
})

export { userRoutes }
