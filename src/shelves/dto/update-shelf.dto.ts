import { IsNumber } from "class-validator";
import { Shelf } from "../interfaces/shelf.interface"
import { CreateShelfDto } from "./create-shelf.dto";

export class UpdateShelfDto extends CreateShelfDto {
  @IsNumber()
  id: number;
}