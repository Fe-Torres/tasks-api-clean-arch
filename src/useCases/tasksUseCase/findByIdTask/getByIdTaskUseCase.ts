import { ITasksRepository } from '../../../repositories/interfaces/TasksRepository'

export class GetByIdTaskUseCase {
  constructor (
    private taskRepository: ITasksRepository
  ) {}

  async execute (taskId: string, userId: string): Promise<unknown> {
    const task = await this.taskRepository.findById(taskId, userId)
    return task
  }
}
