import { OmitType } from "@nestjs/mapped-types";
import { UpdateShelfDto } from "./update-shelf.dto";
import { Shelf } from "../interfaces/shelf.interface";

export class CreateShelfDto implements Shelf {
  libraryId: number;
  name: string;
  isDefault: boolean;
}