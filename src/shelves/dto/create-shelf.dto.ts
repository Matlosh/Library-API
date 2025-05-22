import { OmitType } from "@nestjs/mapped-types";
import { UpdateShelfDto } from "./update-shelf.dto";
import { Shelf } from "../interfaces/shelf.interface";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateShelfDto implements Shelf {
  @IsNumber()
  libraryId: number;

  @IsString()
  name: string;

  @IsBoolean()
  isDefault: boolean;
}