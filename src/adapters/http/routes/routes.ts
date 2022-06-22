import { Router } from 'express'
import { authUserController, createUserController } from '../../../useCases'

const router = Router()

router.post('/user', (request, response) => {
  return createUserController.handle(request, response)
})
router.post('/user/auth', (request, response) => {
  return authUserController.handle(request, response)
})

export { router }
