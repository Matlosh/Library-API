import mongoose from "mongoose";

export interface Subject {
  id?: mongoose.Schema.Types.ObjectId,
  name: string
}