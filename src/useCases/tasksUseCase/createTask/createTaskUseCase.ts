import { Task } from '../../../entities/Task/Task'
import { ITasksRepository } from '../../../repositories/interfaces/tasksRepository'
import { ITaskRequestDTO } from './createTaskDTO'

export class CreateTaskUseCase {
  constructor (
    private taskRepository: ITasksRepository
  ) {}

  async execute (taskData: ITaskRequestDTO, userId: string) {
    const task = new Task(userId, taskData.title, taskData.isDone, taskData.description)
    return await this.taskRepository.save(task)
  }
}
