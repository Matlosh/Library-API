import mongoose from "mongoose";
import { Library } from "src/libraries/schemas/library.schema";

export interface Shelf {
  id?: mongoose.Schema.Types.ObjectId,
  library?: Library,
  libraryId?: mongoose.Schema.Types.ObjectId,
  name: string,
  isDefault: boolean
}