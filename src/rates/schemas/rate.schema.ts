import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Rate as RateInterface } from "../interfaces/rate.interface";
import { User } from "src/users/schemas/user.schema";
import mongoose, { HydratedDocument } from "mongoose";
import { Book } from "src/books/schemas/book.schema";

export type RateDocument = HydratedDocument<Rate>;

@Schema()
export class Rate implements RateInterface {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })  
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Book' })
  book: Book;

  @Prop()
  score: number;

  @Prop()
  comment: string;
}

export const RateSchema = SchemaFactory.createForClass(Rate);