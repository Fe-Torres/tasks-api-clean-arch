import { ITaskQuery, ITasksRepository } from '../../../repositories/interfaces/tasksRepository'

export class GetAllTasksByUserUseCase {
  constructor (
    private taskRepository: ITasksRepository
  ) {}

  async execute (taskQuery: ITaskQuery): Promise<unknown> {
    const tasks = await this.taskRepository.index(taskQuery)
    return tasks
  }
}
