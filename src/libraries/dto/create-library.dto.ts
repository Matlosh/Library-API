import { IsBoolean, IsNumber, IsString } from "class-validator";
import { Library } from "../interfaces/library.interface";

export class CreateLibraryDto implements Library {
  @IsNumber()
	userId: number;

  @IsString()
	name: string;

  @IsBoolean()
	isPublic: boolean;
}