import { uuid } from 'uuidv4'

export class Task {
  public readonly id: string

  public title: string
  public description?: string
  public isDone: boolean
  public userId: string

  constructor (userId: string, title:string, isDone:boolean, description?:string, id?: string) {
    if (!title || !userId) throw new Error('invalid structure')
    if (!id) {
      this.id = uuid()
    }
    this.title = title
    this.description = description
    this.isDone = isDone || false
    this.userId = userId
  }
}
