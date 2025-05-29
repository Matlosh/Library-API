import { IsNumber, IsString } from "class-validator";
import { CreateLibraryDto } from "./create-library.dto";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";

export class UpdateLibraryDto extends CreateLibraryDto {
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}