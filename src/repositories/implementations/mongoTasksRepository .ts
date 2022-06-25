import { Task } from '../../entities/Task/Task'
import { ITaskQuery, ITasksRepository } from '../interfaces/tasksRepository'
import TaskModel from '../mongodb/models/TasksModel'

export class MongoTasksRepository implements ITasksRepository {
  async save (task: Task): Promise<void> {
    const taskModel = new TaskModel(task)
    await taskModel.save()
  }

  async findById (taskId: string, userId: string): Promise<unknown> {
    const task = await TaskModel.findOne({ id: taskId, userId }).select({ _id: 0, __v: 0 })
    if (!task) throw new Error('Task not found')
    return task
  }

  async index (taskQuery: ITaskQuery): Promise<unknown> {
    const tasks = await TaskModel.find(taskQuery).select({ _id: 0, __v: 0 })
    return tasks
  }

  async update (task: Partial<Task>): Promise<void> {
    const result = await TaskModel.findOneAndUpdate({ id: task.id, userId: task.userId }, task).select({ _id: 0, __v: 0 })
    if (!result) throw new Error('Task not found')
  }

  async delete (taskId: string, userId: string): Promise<void> {
    const result = await TaskModel.findOneAndDelete({ id: taskId, userId })
    if (!result) throw new Error('Task not found')
  }
};
