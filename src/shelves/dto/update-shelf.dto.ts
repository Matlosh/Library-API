import { IsNumber } from "class-validator";
import { Shelf } from "../interfaces/shelf.interface"
import { CreateShelfDto } from "./create-shelf.dto";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateShelfDto extends CreateShelfDto {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the shelf to update"
  })
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}