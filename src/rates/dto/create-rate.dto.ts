import { Rate } from "../interfaces/rate.interface";
import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRateDto implements Rate {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the book being rated",
  })
  @IsObjectId()
  bookId: mongoose.Schema.Types.ObjectId;
  
  @ApiProperty({
    type: String,
    description: "The unique identifier of the user who is rating the book"
  })
  @IsObjectId()
  userId: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    type: Number,
    description: "The score given to the book",
  })
  @IsNumber()
  @Min(1)
  @Max(5)
  score: number;

  @ApiProperty({
    type: String,
    description: "An optional comment about the book",
    required: false,
  })
  @IsOptional()
  @IsString()
  comment?: string;
}
