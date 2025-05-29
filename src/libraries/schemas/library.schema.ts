import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Library as LibraryInterface } from "../interfaces/library.interface";
import { User } from "src/users/schemas/user.schema";

export type LibraryDocument = HydratedDocument<Library>;

@Schema()
export class Library implements LibraryInterface {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  name: string;

  @Prop()
  isPublic: boolean;
}

export const LibrarySchema = SchemaFactory.createForClass(Library);