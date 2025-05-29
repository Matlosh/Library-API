import { OmitType } from "@nestjs/mapped-types";
import { UpdateShelfDto } from "./update-shelf.dto";
import { Shelf } from "../interfaces/shelf.interface";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import mongoose from "mongoose";

export class CreateShelfDto implements Shelf {
  @IsObjectId()
  libraryId: mongoose.Schema.Types.ObjectId;

  @IsString()
  name: string;

  @IsBoolean()
  isDefault: boolean;
}