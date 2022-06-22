import { Task } from '../../entities/Task/Task'
import { ITasksRepository } from '../interfaces/TasksRepository'
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

  async index (userId: string): Promise<unknown> {
    const tasks = await TaskModel.find({ userId }).select({ _id: 0, __v: 0 })
    return tasks
  }

  update (task: Partial<Task>, userId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async delete (taskId: string, userId: string): Promise<void> {
    const result = await TaskModel.findOneAndDelete({ id: taskId, userId }).select({ _id: 0, __v: 0 })
    if (!result) throw new Error('Task not found')
  }
};
