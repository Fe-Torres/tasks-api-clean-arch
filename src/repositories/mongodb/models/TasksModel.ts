import mongoose, {
  Schema
} from 'mongoose'

export const TaskModel = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  title: { type: String, required: true, notNull: true },
  body: { type: String, required: true, notNull: true },
  tags: { type: Array, required: true, notNull: true }
})

const Post = mongoose.model('task', TaskModel)
export default Post
