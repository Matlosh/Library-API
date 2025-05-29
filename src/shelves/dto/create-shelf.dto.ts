import { Shelf } from "../interfaces/shelf.interface";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class CreateShelfDto implements Shelf {
  @ApiProperty({
    type: String,
    description: 'The unique identifier of the library to which the shelf belongs'
  })
  @IsObjectId()
  libraryId: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    type: String,
    description: 'The name of the shelf'
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: Boolean,
    description: 'Indicates whether the shelf is the default (root) one'
  })
  @IsBoolean()
  isDefault: boolean;
}