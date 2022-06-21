import { Task } from '../../entities/Task/Task'

export interface ITasksRepository {
    save(task: Task): Promise<void | Error>
    findById(id: string): Promise<Task | Error>
    index(userId: string): Promise<Task[] | Error>
    update(task: Partial<Task>, userId: string): Promise<Task | Error>
    delete(taskId: string, userId: string): Promise<Task | Error>
}
