import { Task } from '../../entities/Task/Task'
import { ITasksRepository } from '../interfaces/TasksRepository'

export class MongoTasksRepository implements ITasksRepository {
  save (task: Task): Promise<void | Error> {
    throw new Error('Method not implemented.')
  }

  findById (id: string): Promise<Error | Task> {
    throw new Error('Method not implemented.')
  }

  index (userId: string): Promise<Error | Task[]> {
    throw new Error('Method not implemented.')
  }

  update (task: Partial<Task>, userId: string): Promise<Error | Task> {
    throw new Error('Method not implemented.')
  }

  delete (taskId: string, userId: string): Promise<Error | Task> {
    throw new Error('Method not implemented.')
  }
};
