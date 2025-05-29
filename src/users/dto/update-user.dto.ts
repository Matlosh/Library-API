import { IsNumber, IsString } from "class-validator";
import { User } from "../interfaces/user.interface";
import { CreateUserDto } from "./create-user.dto";
import mongoose from "mongoose";
import { IsObjectId } from "src/decorators/isObjectId.decorator";

export class UpdateUserDto extends CreateUserDto {
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}