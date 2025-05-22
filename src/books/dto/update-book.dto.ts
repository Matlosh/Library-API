import { IsNumber } from "class-validator";
import { CreateBookDto } from "./create-book.dto";

export class UpdateBookDto extends CreateBookDto {
  @IsNumber()
  id: number;
}