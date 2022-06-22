import { ITasksRepository } from '../../../repositories/interfaces/TasksRepository'

export class GetAllTasksByUserUseCase {
  constructor (
    private taskRepository: ITasksRepository
  ) {}

  async execute (userId: string): Promise<unknown> {
    const tasks = await this.taskRepository.index(userId)
    return tasks
  }
}
