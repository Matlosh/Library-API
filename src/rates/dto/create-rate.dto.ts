import { OmitType } from "@nestjs/mapped-types";
import { UpdateRateDto } from "./update-rate.dto";
import { Rate } from "../interfaces/rate.interface";

export class CreateRateDto implements Rate {
  bookId: number;
  userId: number;
  score: number;
  comment: string;
}
