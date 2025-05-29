import { OmitType } from "@nestjs/mapped-types";
import { UpdateRateDto } from "./update-rate.dto";
import { Rate } from "../interfaces/rate.interface";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";

export class CreateRateDto implements Rate {
  @IsObjectId()
  bookId: mongoose.Schema.Types.ObjectId;
  
  @IsObjectId()
  userId: mongoose.Schema.Types.ObjectId;

  @IsNumber()
  score: number;

  @IsOptional()
  @IsString()
  comment: string;
}
