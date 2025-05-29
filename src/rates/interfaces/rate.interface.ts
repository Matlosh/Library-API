import mongoose from "mongoose";
import { Book } from "src/books/interfaces/book.interface";
import { User } from "src/users/schemas/user.schema";

export interface Rate {
  id?: mongoose.Schema.Types.ObjectId,
  user?: User;
  userId?: mongoose.Schema.Types.ObjectId,
  book?: Book;
  bookId?: mongoose.Schema.Types.ObjectId,
  score: number,
  comment: string
}