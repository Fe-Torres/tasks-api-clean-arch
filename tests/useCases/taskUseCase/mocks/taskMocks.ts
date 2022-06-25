/* eslint-disable no-undef */
import { ITaskRequestDTO } from '../../../../src/useCases/tasksUseCase/createTask/createTaskDTO'
import { ITasksRepository } from '../../../../src/repositories/interfaces/tasksRepository'
import { Error } from 'mongoose'

const tasksArrayMock: ITaskRequestDTO[] = [
  {
    title: 'Pular fogueira',
    description: 'Dia 24 e dia 25!',
    userId: '1'
  },
  {
    title: 'Comer bolo de aipim',
    description: 'Dia 24 e dia 25!',
    userId: '1'
  },
  {
    title: 'Dançar quadrilha',
    description: 'Dia 24 e dia 25!',
    userId: '1'
  }
]

export const taskMock: ITaskRequestDTO = {
  title: 'Pular fogueira',
  description: 'Dia 24 e dia 25!',
  userId: '1'
}

export const taskRepositoryMock: ITasksRepository = {
  save: jest.fn(),
  findById: jest.fn().mockReturnValue(taskMock),
  index: jest.fn().mockReturnValue(tasksArrayMock),
  update: jest.fn(),
  delete: jest.fn()
}
export const taskRepositoryMockWithError: ITasksRepository = {
  save: jest.fn().mockRejectedValue(new Error('Error saving task data')),
  findById: jest.fn().mockRejectedValue(new Error('Task not found')),
  index: jest.fn(),
  update: jest.fn().mockRejectedValue(new Error('Task not found')),
  delete: jest.fn().mockRejectedValue(new Error('Task not found'))
}
