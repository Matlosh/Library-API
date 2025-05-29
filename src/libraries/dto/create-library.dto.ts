import { IsBoolean, IsNumber, IsString } from "class-validator";
import { Library } from "../interfaces/library.interface";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLibraryDto implements Library {
  @ApiProperty({
    type: String,
    description: 'The unique identifier of the user who owns the library'
  })
  @IsObjectId()
	userId: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    type: String,
    description: 'The name of the library'
  })
  @IsString()
	name: string;

  @ApiProperty({
    type: Boolean,
    description: 'Indicates whether the library is public or private',
  })
  @IsBoolean()
	isPublic: boolean;
}