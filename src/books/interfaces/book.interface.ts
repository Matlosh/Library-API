import mongoose from "mongoose";
import { Shelf } from "src/shelves/schemas/shelf.schema";
import { Subject } from "src/subjects/schemas/subject.schema";

export interface Book {
  id?: mongoose.Schema.Types.ObjectId,
  title: string,
  isbn: string,
  author: string,
  coverUrl: string,
  pagesCount: number,
  subjects?: Subject[],
  subjectsIds?: mongoose.Schema.Types.ObjectId[],
  shelves?: Shelf[],
  shelvesIds?: mongoose.Schema.Types.ObjectId[]
}