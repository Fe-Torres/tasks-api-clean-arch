import { Task } from '../../entities/Task/Task'

export interface ITaskQuery {
    userId: string
    isDone?: string
}

export interface ITasksRepository {
    save(task: Task): Promise<void | Error>
    findById(taskId: string, userId: string): Promise<unknown>
    index(taskQuery: ITaskQuery): Promise<unknown>
    update(task: Partial<Task>): Promise<void>
    delete(taskId: string, userId: string): Promise<void>
}
