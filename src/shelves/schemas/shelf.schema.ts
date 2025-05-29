import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Shelf as ShelfInterface } from "../interfaces/shelf.interface";
import { Library } from "src/libraries/schemas/library.schema";
import mongoose, { HydratedDocument } from "mongoose";

export type ShelfDocument = HydratedDocument<Shelf>;

@Schema()
export class Shelf implements ShelfInterface {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Library' })
  library: Library;

  @Prop()
  name: string;

  @Prop()
  isDefault: boolean;
}

export const ShelfSchema = SchemaFactory.createForClass(Shelf);