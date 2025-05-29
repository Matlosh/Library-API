import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Book as BookInterface } from "../interfaces/book.interface";
import mongoose, { HydratedDocument } from "mongoose";
import { Subject } from "src/subjects/schemas/subject.schema";
import { Shelf } from "src/shelves/schemas/shelf.schema";

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book implements BookInterface {
  @Prop()
  title: string;

  @Prop()
  isbn: string;

  @Prop()
  author: string;

  @Prop()
  coverUrl: string;

  @Prop()
  pagesCount: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }] })
  subjects: Subject[]

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shelf' }] })
  shelves: Shelf[]
}

export const BookSchema = SchemaFactory.createForClass(Book);