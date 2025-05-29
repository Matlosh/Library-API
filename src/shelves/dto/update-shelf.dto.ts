import { IsNumber } from "class-validator";
import { Shelf } from "../interfaces/shelf.interface"
import { CreateShelfDto } from "./create-shelf.dto";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";

export class UpdateShelfDto extends CreateShelfDto {
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}