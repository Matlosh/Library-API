import { IsNumber } from "class-validator";
import { CreateLibraryDto } from "./create-library.dto";

export class UpdateLibraryDto extends CreateLibraryDto {
  @IsNumber()
  id: number;
}