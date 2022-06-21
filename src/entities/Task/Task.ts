import { uuid } from 'uuidv4'

export class Task {
  public readonly id: string

  public title: string
  public description?: string
  public isDone: boolean
  public userId: string

  constructor (userId: string, title:string, isDone:boolean, id?: string, description?:string) {
    this.title = title
    this.description = description
    this.isDone = isDone
    this.userId = userId
    if (!id) {
      this.id = uuid()
    }
  }
}
