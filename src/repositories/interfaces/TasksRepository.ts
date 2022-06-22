import { Task } from '../../entities/Task/Task'

export interface ITasksRepository {
    save(task: Task): Promise<void | Error>
    findById(taskId: string, userId: string): Promise<unknown>
    index(userId: string): Promise<unknown>
    update(task: Partial<Task>, userId: string): Promise<void>
    delete(taskId: string, userId: string): Promise<void>
}
