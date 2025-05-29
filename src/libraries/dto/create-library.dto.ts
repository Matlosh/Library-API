import { IsBoolean, IsNumber, IsString } from "class-validator";
import { Library } from "../interfaces/library.interface";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";

export class CreateLibraryDto implements Library {
  @IsObjectId()
	userId: mongoose.Schema.Types.ObjectId;

  @IsString()
	name: string;

  @IsBoolean()
	isPublic: boolean;
}