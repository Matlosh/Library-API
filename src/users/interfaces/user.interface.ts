import mongoose from "mongoose";

export interface User {
  id?: mongoose.Schema.Types.ObjectId,
  login: string,
  email: string,
  nick: string,
  // plain text for now
  password: string
}