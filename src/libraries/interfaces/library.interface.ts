import mongoose from "mongoose"
import { User } from "src/users/schemas/user.schema"

export interface Library {
  id?: mongoose.Schema.Types.ObjectId,
  user?: User,
  userId?: mongoose.Schema.Types.ObjectId,
  name: string,
  isPublic: boolean
}