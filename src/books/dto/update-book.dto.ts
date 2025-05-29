import { IsNumber } from "class-validator";
import { CreateBookDto } from "./create-book.dto";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";

export class UpdateBookDto extends CreateBookDto {
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}