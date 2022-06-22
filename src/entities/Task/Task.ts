export class Task {
  public readonly _id: string

  public title: string
  public description?: string
  public isDone: boolean
  public userId: string

  constructor (userId: string, title:string, isDone:boolean, _id?: string, description?:string) {
    this.title = title
    this.description = description
    this.isDone = isDone
    this.userId = userId
  }
}
