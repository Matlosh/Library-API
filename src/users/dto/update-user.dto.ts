import { CreateUserDto } from "./create-user.dto";
import mongoose from "mongoose";
import { IsObjectId } from "src/decorators/isObjectId.decorator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto extends CreateUserDto {
  @ApiProperty({
    type: String,
    description: "The unique identifier of the user to update",
  })
  @IsObjectId()
  id: mongoose.Schema.Types.ObjectId;
}