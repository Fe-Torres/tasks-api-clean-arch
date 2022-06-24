import mongoose, {
  Schema
} from 'mongoose'

const TaskSchema = new Schema({
  id: { type: String, unique: true, required: true, notNull: true },
  title: { type: String, required: true, notNull: true },
  description: { type: String, required: false, notNull: false },
  isDone: { type: Boolean, required: true, notNull: true },
  userId: { type: String, required: true, notNull: true }
})

const TaskModel = mongoose.model('task', TaskSchema)
export default TaskModel
