import { IsNumber, IsString } from "class-validator";
import { CreateLibraryDto } from "./create-library.dto";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateLibraryDto extends CreateLibraryDto {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the library to update"
  })
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}