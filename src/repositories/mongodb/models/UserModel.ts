import mongoose, {
  Schema
} from 'mongoose'

export const UserSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  email: { type: String, required: true, notNull: true },
  password: { type: String, required: true, notNull: true }
})

const UserModel = mongoose.model('user', UserSchema)
export default UserModel
