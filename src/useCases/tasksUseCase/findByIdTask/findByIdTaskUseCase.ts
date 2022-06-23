import { ITasksRepository } from '../../../repositories/interfaces/TasksRepository'

export class FindByIdTaskUseCase {
  constructor (
    private taskRepository: ITasksRepository
  ) {}

  async execute (taskId: string, userId: string): Promise<unknown> {
    const task = await this.taskRepository.findById(taskId, userId)
    return task
  }
}
