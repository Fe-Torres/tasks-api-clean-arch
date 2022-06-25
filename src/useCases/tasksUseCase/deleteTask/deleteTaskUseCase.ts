import { ITasksRepository } from '../../../repositories/interfaces/tasksRepository'

export class DeleteTaskUseCase {
  constructor (
    private taskRepository: ITasksRepository
  ) {}

  async execute (taskId: string, userId: string): Promise<void> {
    await this.taskRepository.delete(taskId, userId)
  }
}
