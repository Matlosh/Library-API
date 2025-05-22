import { OmitType } from "@nestjs/mapped-types";
import { UpdateRateDto } from "./update-rate.dto";
import { Rate } from "../interfaces/rate.interface";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRateDto implements Rate {
  @IsNumber()
  bookId: number;
  
  @IsNumber()
  userId: number;

  @IsNumber()
  score: number;

  @IsOptional()
  @IsString()
  comment: string;
}
