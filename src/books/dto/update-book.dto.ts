import { CreateBookDto } from "./create-book.dto";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateBookDto extends CreateBookDto {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the book to update"
  })
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}