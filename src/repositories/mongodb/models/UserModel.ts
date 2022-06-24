import mongoose, {
  Schema
} from 'mongoose'

const UserSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  email: { type: String, required: true, notNull: true },
  password: { type: String, required: true, notNull: true }
})

const UserModel = mongoose.model('user', UserSchema)
export default UserModel
