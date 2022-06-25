import { Task } from '../../../entities/Task/Task'
import { ITasksRepository } from '../../../repositories/interfaces/tasksRepository'
import { ITaskRequestDTO } from '../createTask/createTaskDTO'

export class UpdateTaskUseCase {
  constructor (
    private taskRepository: ITasksRepository
  ) {}

  async execute (taskData: ITaskRequestDTO, userId: string) {
    const task = new Task(userId, taskData.title, taskData.isDone, taskData.description, taskData.id)
    return await this.taskRepository.update(task)
  }
}
